import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import CatCard from '@/app/adoption/components/CatCard';
import {
    Organization_Pet,
    Organization_Pet_Status,
    Pet_Breed_Cat, Pet_Gender,
    Pet_Species,
    Pet_Status
} from '@/__generated__/resolvers-types';

const catDetails: Organization_Pet = {
    id: '2de96ecd-8389-4817-b32c-32d2af1641e8',
    status: Organization_Pet_Status.Adoptable,
    adoption_fee: null,
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
};

describe('CatCard', () => {
    it('renders without errors', () => {
        render(<CatCard cat={catDetails} />);
    });
});
