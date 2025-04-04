import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Listings from '@/app/adoption/components/Listings';
import { Cat } from '@/types';

const catsDetails: Cat[] = [
    {
        id: '316fffca-8ea5-46bd-9f2d-8f7d7cce806f',
        status: 'ADOPTABLE',
        adoption_fee: null,
        pet: {
            name: 'Alf',
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
            gender: 'MALE',
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
        status: 'ADOPTABLE',
        adoption_fee: null,
        pet: {
            name: 'Tyson',
            status: 'ORGANIZATION',
            status_details: null,
            description: null,
            species: 'CAT',
            breed_cat: ['DOMESTIC_SHORT_HAIR'],
            mixed: null,
            estimated_birth_date: '2020-08-31T23:00:00Z',
            special_needs: null,
            distinguishing_marks: null,
            weight: {
                unit: 'KILOGRAMS',
                value: 6.0,
            },
            youtube_video_url: null,
            gender: 'MALE',
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

describe('filterCats', () => {
});
