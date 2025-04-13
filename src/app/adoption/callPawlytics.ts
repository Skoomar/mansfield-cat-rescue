import { Redis } from '@upstash/redis';
import { gql } from '@/__generated__';
import {
    Currency,
    Organization_Pet,
    Organization_Pet_Status,
    Pet_Breed_Cat,
    Pet_Gender,
    Pet_Species,
    Pet_Status,
    WeightUnit
} from '@/__generated__/resolvers-types';

// TODO: strip out entities from here after seeing which ones are really needed on Adoption page
const GET_CATS = gql(`
    query GetCats($orgId: UUID!) {
        organization_pets2(
            filter: {
                organization_pet_status: ADOPTABLE
            }
            organization_id: $orgId
        ) {
            entities {
                id
                status
                adoption_fee {
                    amount
                    currency
                }
                pet {
                    name
                    status
                    status_details
                    description
                    species
                    breed_cat
                    mixed
                    estimated_birth_date
                    special_needs
                    distinguishing_marks
                    weight_lbs
                    youtube_video_url
                    gender
                    siblings {
                        id
                        name
                    }
                    images {
                        url
                    }
                }
            }
        }
    }
`);

// TODO: is this a function that should be 'use server'?
// ^ on second thoughts probably not
export const getAdoptableCats = async (): Promise<Organization_Pet[]> => {
    // TODO: replace this with proper stubs or something
    // set up local testing flag temporarily
    if (process.env.LOCAL) {
        return adoptableCatsStubResponse;
    }

    const authToken = await getPawlyticsAuthToken();

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            query: GET_CATS.toString(),
            variables: {
                orgId: process.env.PAWLYTICS_ORG_ID,
            },
        }),
    };

    // TODO: make this error handling better to use the error response to display a message in UI
    try {
        const response = await fetch('https://api.pawlytics.com/api/graphql', options);
        if (!response.ok) {
            throw new Error(
                `HTTP error in getAdoptableCats! Status: ${response.status}; Error message: ${response.statusText}`,
            );
        }
        const responseJson = await response.json();
        return responseJson['data']['organization_pets2']['entities'];
    } catch (error) {
        // console.error('Error in getAdoptableCats:', error);
        throw new Error(`Error when fetching adoptable cats from Pawlytics: ${error}`);
    }
};

const GET_CAT_INFO = gql(`
    query GetCatInfo($petId: UUID!, $orgId: UUID!) {
        organization_pet_by_id(id: $petId, organization_id: $orgId) {
            id
            adoption_fee {
                amount
                currency
            }
            pet {
                name
                description
                breed_cat
                estimated_birth_date
                special_needs
                distinguishing_marks
                weight_lbs
                youtube_video_url
                gender
                siblings {
                    id
                    name
                }
                images {
                    url
                }
            }
        }
    }
`);

export const getCatInfo = async (petId: string) => {
    if (process.env.LOCAL) {
        return adoptableCatsStubResponse.find(cat => cat.id === petId);
    }

    const authToken = await getPawlyticsAuthToken();

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            query: GET_CAT_INFO.toString(),
            variables: {
                petId: petId,
                orgId: process.env.PAWLYTICS_ORG_ID,
            },
        }),
    };

    // TODO: refactor this so we're not repeating this try-catch call in multiple functions
    try {
        const response = await fetch('https://api.pawlytics.com/api/graphql', options);
        if (!response.ok) {
            throw new Error(
                `HTTP error in getAdoptableCats! Status: ${response.status}; Error message: ${response.statusText}`,
            );
        }
        const responseJson = await response.json();
        return responseJson['data']['organization_pet_by_id'];
    } catch (error) {
        // console.error('Error in getAdoptableCats:', error);
        throw new Error(`Error when fetching adoptable cats from Pawlytics: ${error}`);
    }
};

// TODO: try 'use cache' on these functions: https://nextjs.org/docs/app/api-reference/directives/use-cache
// TODO: could use middleware to modify these these requests if needed? https://nextjs.org/docs/app/building-your-application/routing/middleware
const getPawlyticsAuthToken = async () => {
    const redis = Redis.fromEnv();
    const apiToken: Record<string, number> | null = await redis.hgetall('pawlytics_auth_token');

    if (apiToken && Date.now() < apiToken.expiry) {
        return apiToken.access_token;
    }

    // TODO: make this error handling better to use the error response to display a message in UI
    try {
        const authResponse = await fetchPawlyticsAuthResponse();
        await redis.hset('pawlytics_auth_token', {
            access_token: authResponse['access_token'],
            expiry: Date.now() + authResponse['expires_in'],
        });
        return authResponse['access_token'];
    } catch (error) {
        // console.error('Error in fetchPawlyticsAuthResponse:', error);
        throw new Error(`Error when fetching Pawlytics API authentication token: ${error}`);
    }
};

const fetchPawlyticsAuthResponse = async () => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            audience: 'https://api.pawlytics.com',
            client_id: process.env.PAWLYTICS_CLIENT_ID,
            username: process.env.PAWLYTICS_USER,
            password: process.env.PAWLYTICS_PASSWORD,
            grant_type: 'password',
            scope: 'openid',
            responseType: 'token id_token',
        }),
    };

    try {
        const response = await fetch('https://pawlytics.auth0.com/oauth/token', options);
        if (!response.ok) {
            throw new Error(
                `HTTP error when authenticating Pawlytics API! Status: ${response.status}; Error message: ${response.statusText}`,
            );
        }
        return await response.json();
    } catch (error) {
        // TODO: maybe set up some kind of logging instead of using console.error - don't want to potentially leak data out to users - could just throw logs into a free DB instead of paying for logz.io or whatever
        // console.error('Error when authenticating Pawlytics API:', error);
        throw error;
    }
};

const adoptableCatsStubResponse: Organization_Pet[] = [
    {
        id: '2de96ecd-8389-4817-b32c-32d2af1641e8',
        status: Organization_Pet_Status.Adoptable,
        adoption_fee: {
            currency: Currency.Gbp,
            amount: 20000
        },
        pet: {
            name: 'Mo',
            status: Pet_Status.Organization,
            status_details: null,
            description: null,
            species: Pet_Species.Cat,
            breed_cat: [Pet_Breed_Cat.DomesticShortHair],
            mixed: null,
            estimated_birth_date: '2022-11-01T00:00:00Z',
            special_needs: null,
            distinguishing_marks: null,
            weight: null,
            youtube_video_url: null,
            gender: Pet_Gender.Female,
            siblings: null,
            images: [
                {
                    url: 'https://dbmt2d395muck.cloudfront.net/235bf8b2-5e0a-44ac-a68f-77d15571b276/Mo.jpg',
                },
            ],
        },
    },
    {
        id: '316fffca-8ea5-46bd-9f2d-8f7d7cce806f',
        status: Organization_Pet_Status.Adoptable,
        adoption_fee: null,
        pet: {
            name: 'Alf',
            status: Pet_Status.Organization,
            status_details: null,
            description: null,
            species: Pet_Species.Cat,
            breed_cat: [Pet_Breed_Cat.DomesticShortHair],
            mixed: null,
            estimated_birth_date: '2022-11-01T00:00:00Z',
            special_needs: null,
            distinguishing_marks: null,
            weight: null,
            youtube_video_url: null,
            gender: Pet_Gender.Male,
            siblings: null,
            // images: [
            //     {
            //         url: 'https://dbmt2d395muck.cloudfront.net/1e775003-7345-4618-af0d-7a0e2a9f7013',
            //     },
            // ],
        },
    },
    {
        id: 'b8fef0ac-9506-4630-9ed3-4b1fb0c2eef0',
        status: Organization_Pet_Status.Adoptable,
        adoption_fee: null,
        pet: {
            name: 'Tyson',
            status: Pet_Status.Organization,
            status_details: null,
            description: null,
            species: Pet_Species.Cat,
            breed_cat: [Pet_Breed_Cat.DomesticShortHair],
            mixed: null,
            estimated_birth_date: '2020-08-31T23:00:00Z',
            special_needs: null,
            distinguishing_marks: null,
            weight: {
                unit: WeightUnit.Kilograms,
                value: 6.0,
            },
            youtube_video_url: null,
            gender: Pet_Gender.Male,
            siblings: null,
            images: [
                {
                    url: 'https://dbmt2d395muck.cloudfront.net/d71eb772-0752-433f-bcd4-94c8b5ed39ea',
                },
            ],
        },
    },
    {
        id: 'b8fea0ac-9506-4630-9ed3-4b1fb0c2eef0',
        status: Organization_Pet_Status.Adoptable,
        adoption_fee: null,
        pet: {
            name: 'Kitto',
            status: Pet_Status.Organization,
            status_details: null,
            description: null,
            species: Pet_Species.Cat,
            breed_cat: [Pet_Breed_Cat.DomesticShortHair],
            mixed: null,
            estimated_birth_date: '2025-01-31T23:00:00Z',
            special_needs: null,
            distinguishing_marks: null,
            weight: {
                unit: WeightUnit.Kilograms,
                value: 2.0,
            },
            youtube_video_url: null,
            gender: Pet_Gender.Male,
            siblings: null,
            images: [
                {
                    url: 'https://dbmt2d395muck.cloudfront.net/d71eb772-0752-433f-bcd4-94c8b5ed39ea',
                },
            ],
        },
    },
];
