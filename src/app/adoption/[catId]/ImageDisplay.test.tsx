import { describe, test, expect } from 'vitest';
import { generateImageKeyFromUrl } from '@/app/adoption/[catId]/ImageDisplay';

describe('generateImageKeyFromUrl', () => {
    test.each([
        ['https://dbmt2d395muck.cloudfront.net/235bf8b2-5e0a-44ac-a68f-77d15571b276/Mo.jpg', 'Mo.jpg'],
        ['https://dbmt2d395muck.cloudfront.net/7bd637ae-e38a-4afe-acc2-490e52fb0db1/IMG_3042.jpeg', 'IMG_3042.jpeg'],
        ['https://dbmt2d395muck.cloudfront.net/b68a4f5e-9d7d-49a7-b0d5-ee6949a56429/cc173402-b70a-4cc6-89c3-3dd352f8bc4e.jpeg', 'cc173402-b70a-4cc6-89c3-3dd352f8bc4e.jpeg']
    ])('returns the name of the file found in the URL', (url: string, expectedKey: string) => {
        expect(generateImageKeyFromUrl(url)).toBe(expectedKey);
    });

    test.each(['https://dbmt2d395muck.cloudfront.net/1e775003-7345-4618-af0d-7a0e2a9f7013',
        'https://dbmt2d395muck.cloudfront.net/d71eb772-0752-433f-bcd4-94c8b5ed39ea',
        'https://dbmt2d395muck.cloudfront.net/d71eb772-0752-433f-bcd4-94c8b5ed39ea'
    ])('returns default key if no specific filename is found', (url: string) => {
        expect(generateImageKeyFromUrl(url)).toBe('img0')
    });
});
