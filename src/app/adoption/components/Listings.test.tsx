import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Listings from '@/app/adoption/components/Listings';
import {
    Organization_Pet,
    Organization_Pet_Status,
    Pet_Breed_Cat,
    Pet_Gender,
    Pet_Species,
    Pet_Status, WeightUnit
} from '@/__generated__/resolvers-types';

const catsDetails: Organization_Pet[] = [
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
            images: [
                {
                    url: 'https://dbmt2d395muck.cloudfront.net/1e775003-7345-4618-af0d-7a0e2a9f7013',
                },
            ],
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
];

describe('Listings', () => {
    it('renders without errors', () => {
        render(<Listings cats={catsDetails} />);
    });
});

describe('filterCats', () => {});
