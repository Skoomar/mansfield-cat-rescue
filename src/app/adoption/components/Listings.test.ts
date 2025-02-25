import { vi, describe, test, beforeAll, afterAll, expect } from 'vitest';
import { getLifeStage, LIFE_STAGE } from '@/app/adoption/components/Listings';

describe('getLifeStage', (): void => {
    beforeAll((): void => {
        vi.useFakeTimers();
        const today: Date = new Date(2025, 0, 15);
        vi.setSystemTime(today);
    });

    afterAll((): void => {
        vi.useRealTimers();
    });

    test.each([
        '2025-01-15T00:00:00Z',
        '2024-12-15T00:00:00Z',
        '2024-01-30T00:00:00Z',
    ])('return the KITTEN life stage if age is less than 1 year', (birthday: string) => {
            expect(getLifeStage(birthday)).toBe(LIFE_STAGE.KITTEN);
        }
    );

    test.each([
        '2024-01-15T00:00:00Z',
        '2023-12-15T00:00:00Z',
        '2020-08-30T00:00:00Z',
        '2010-05-30T00:00:00Z',
    ])('return the ADULT life stage if age is 1 year or more', (birthday: string) => {
            expect(getLifeStage(birthday)).toBe(LIFE_STAGE.ADULT);
        }
    );

    test.each([
        'blah',
        '2024-13-30T00:00:00Z',
        '2024-0530T00:00:00Z',
    ])('should return Unknown if the birthday is invalid', (birthday: string) => {
            expect(getLifeStage(birthday)).toBeNull();
        }
    );
});

describe('filterCats', () => {
});