export enum LIFE_STAGE {
    KITTEN = 'KITTEN',
    ADULT = 'ADULT',
    SENIOR = 'SENIOR',
}

export const getLifeStage = (dateOfBirth: string | null): LIFE_STAGE => {
    if (!dateOfBirth) return LIFE_STAGE.ADULT;

    const birthdateObj = new Date(dateOfBirth);
    if (!birthdateObj.valueOf()) return LIFE_STAGE.ADULT;

    // TODO: handle senior stage
    const today = new Date();
    const isKitten = (today.valueOf() - birthdateObj.valueOf()) / (1000 * 3600 * 24 * 365) < 1;
    return isKitten ? LIFE_STAGE.KITTEN : LIFE_STAGE.ADULT;
};

export const getAgeFromBirthdate = (birthdate: string | null): string | null => {
    if (!birthdate) {
        return null;
    }
    const birthdateObj: Date = new Date(birthdate);
    if (!birthdateObj.valueOf()) {
        return null;
    }

    const today: Date = new Date();
    let months: number = (today.getFullYear() - birthdateObj.getFullYear()) * 12;
    months -= birthdateObj.getMonth();
    months += today.getMonth();
    if (today.getDate() < birthdateObj.getDate()) {
        months -= 1;
    }

    if (months < 0) {
        return null;
    }

    const monthsStr: string = months % 12 === 1 ? '1 month old' : `${months % 12} months old`;
    if (months < 12) {
        return monthsStr;
    }

    const years: number = Math.floor(months / 12);
    return years === 1 ? `1 year ${monthsStr}` : `${years} years ${monthsStr}`;
};

export const getPrettyDate = (date: string | null): string | null => {
    if (!date) return null;

    const dateObj = new Date(date);
    if (!dateObj.valueOf()) return null;

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString('en-GB', options);
};

export const toTitleCase = (inputString: string | null): string | null => {
    return !inputString ? null : inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
};

/*
    For some reason the Pawlytics API uses Int as the scalar for the Money type used for adoption_fee and represents the
    currency in most atomic unit. So it's actually pence instead of pounds.
    Also It seems like if no value has been entered then it'll just be 0 by default. But if you enter a value then it has to
    be at least 0.30 and you can't change it back to 0. So just return anything under 100 pence as null for now.

    TODO: Reach out to Pawlytics to see why this is and see if it can be float instead. And if 0 can be reset as value
    after being modified
 */
export const normaliseAdoptionFee = (adoptionFee: number): string | null => {
    return adoptionFee >= 100 ? '£' + (adoptionFee / 100) : null;
};
