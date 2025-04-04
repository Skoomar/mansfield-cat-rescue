import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import CatCard from '@/app/adoption/components/CatCard';
import { Cat } from '@/types';

const catDetails: Cat = {
    id: '2de96ecd-8389-4817-b32c-32d2af1641e8',
    status: 'ADOPTABLE',
    adoption_fee: null,
    pet: {
        name: 'Mo',
        status: 'ORGANIZATION',
        status_details: null,
        description: null,
        species: 'CAT',
        breed_cat: ['DOMESTIC_SHORT_HAIR'],
        mixed: null,
        estimated_birth_date: '2022-11-01T00:00:00Z',
        special_needs: null,
        distinguishing_marks: null,
        weight: null,
        youtube_video_url: null,
        gender: 'FEMALE',
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
