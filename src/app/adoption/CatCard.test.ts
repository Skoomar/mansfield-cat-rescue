import { vi, describe, it, test, beforeAll, afterAll, expect } from 'vitest';
import { getAgeFromBirthdate } from '@/app/adoption/CatCard';

describe('getAgeFromBirthdate', (): void => {
    beforeAll((): void => {
        vi.useFakeTimers();
        const today: Date = new Date(2025, 0, 15);
        vi.setSystemTime(today);
    });

    afterAll((): void => {
        vi.useRealTimers();
    });

    test.each([
        ['2025-01-15T00:00:00Z', '0 months old'],
        ['2024-12-15T00:00:00Z', '1 month old'],
        ['2024-08-30T00:00:00Z', '4 months old'],
        ['2024-08-02T00:00:00Z', '5 months old'],
        ['2024-01-30T00:00:00Z', '11 months old'],
        ['2024-01-30', '11 months old'],
    ])('should return the correct age in months', (birthday: string, expectedAge: string) => {
            const age: string = getAgeFromBirthdate(birthday);
            expect(age).toBe(expectedAge);
        }
    );

    test.each([
        ['2024-01-15T00:00:00Z', '1 year 0 months old'],
        ['2023-12-15T00:00:00Z', '1 year 1 month old'],
        ['2022-12-15T00:00:00Z', '2 years 1 month old'],
        ['2023-08-30T00:00:00Z', '1 year 4 months old'],
        ['2023-08-02T00:00:00Z', '1 year 5 months old'],
        ['2010-05-30T00:00:00Z', '14 years 7 months old'],
        ['2010-05-30', '14 years 7 months old'],
    ])('should return the correct age in years and months', (birthday: string, expectedAge: string) => {
            const age: string = getAgeFromBirthdate(birthday);
            expect(age).toBe(expectedAge);
        }
    );

    test.each([
        'blah',
        '2200-05-30T00:00:00Z',
        '2024-13-30T00:00:00Z',
        '2024-0530T00:00:00Z',
    ])('should return Unknown if the birthday is invalid', (birthday: string) => {
            const age: string = getAgeFromBirthdate(birthday);
            expect(age).toBe("Unknown");
        }
    );
});