import { afterAll, beforeAll, describe, expect, test, vi } from 'vitest';
import { getAgeFromBirthdate, getLifeStage, LIFE_STAGE, toTitleCase } from '@/app/adoption/utils';

describe('getLifeStage', (): void => {
    beforeAll((): void => {
        vi.useFakeTimers();
        const today: Date = new Date(2025, 0, 15);
        vi.setSystemTime(today);
    });

    afterAll((): void => {
        vi.useRealTimers();
    });

    test.each(['2025-01-15T00:00:00Z', '2024-12-15T00:00:00Z', '2024-01-30T00:00:00Z'])(
        'return the KITTEN life stage if age is less than 1 year',
        (birthday: string) => {
            expect(getLifeStage(birthday)).toBe(LIFE_STAGE.KITTEN);
        },
    );

    test.each(['2024-01-15T00:00:00Z', '2023-12-15T00:00:00Z', '2020-08-30T00:00:00Z', '2010-05-30T00:00:00Z'])(
        'return the ADULT life stage if age is 1 year or more',
        (birthday: string) => {
            expect(getLifeStage(birthday)).toBe(LIFE_STAGE.ADULT);
        },
    );

    test.each(['blah', '2024-13-30T00:00:00Z', '2024-0530T00:00:00Z'])(
        'should return Unknown if the birthday is invalid',
        (birthday: string) => {
            expect(getLifeStage(birthday)).toBeNull();
        },
    );
});

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
        expect(getAgeFromBirthdate(birthday)).toBe(expectedAge);
    });

    test.each([
        ['2024-01-15T00:00:00Z', '1 year 0 months old'],
        ['2023-12-15T00:00:00Z', '1 year 1 month old'],
        ['2022-12-15T00:00:00Z', '2 years 1 month old'],
        ['2023-08-30T00:00:00Z', '1 year 4 months old'],
        ['2023-08-02T00:00:00Z', '1 year 5 months old'],
        ['2010-05-30T00:00:00Z', '14 years 7 months old'],
        ['2010-05-30', '14 years 7 months old'],
    ])('should return the correct age in years and months', (birthday: string, expectedAge: string) => {
        expect(getAgeFromBirthdate(birthday)).toBe(expectedAge);
    });

    test.each(['blah', '2200-05-30T00:00:00Z', '2024-13-30T00:00:00Z', '2024-0530T00:00:00Z'])(
        'should return Unknown if the birthday is invalid',
        (birthday: string) => {
            expect(getAgeFromBirthdate(birthday)).toBeNull();
        },
    );
});

describe('toTitleCase', () => {
    test.each([
        ['MALE', 'Male'],
        ['female', 'Female'],
        ['bRuH', 'Bruh'],
    ])('should return the correct title case', (inputString: string, expectedString: string) => {
        const outputString = toTitleCase(inputString);
        expect(outputString).toBe(expectedString);
    });

    test.each([null, ''])('should return null if input has no value', (inputString) => {
        expect(toTitleCase(inputString)).toBeNull();
    });
});
