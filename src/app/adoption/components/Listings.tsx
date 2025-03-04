'use client';

import { Cat } from '@/types';
import CatCard from '@/app/adoption/components/CatCard';
import { useMemo, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

// TODO: probably best to move these enums & functions (and the ones from CatCard) and put them in some utils file
export enum LIFE_STAGE {
    ADULT = 'ADULT',
    KITTEN = 'KITTEN',
}

export const getLifeStage = (dateOfBirth: string | null): LIFE_STAGE | null => {
    if (!dateOfBirth) return null;

    const birthdateObj = new Date(dateOfBirth);
    if (!birthdateObj.valueOf()) return null;

    const today = new Date();
    const isKitten = (today.valueOf() - birthdateObj.valueOf()) / (1000 * 3600 * 24 * 365) < 1;
    return isKitten ? LIFE_STAGE.KITTEN : LIFE_STAGE.ADULT;
};

export const filterCats = (cats: Cat[], filter: LIFE_STAGE | ""): Cat[] => {
    console.log(filter);
    if (!filter || !(filter in LIFE_STAGE)) {
        return cats;
    }
    return cats.filter(cat => getLifeStage(cat.pet.estimated_birth_date) === filter);
};

// Maybe change to use Checkbox instead of Radios if more filters get added
const FilterButton = ({ id, value, label }: { id: string, value: LIFE_STAGE | "", label: string }) => (
    <div className="flex items-center gap-1 border p-1.5 rounded-lg">
        <RadioGroupItem value={value} id={id} />
        <Label htmlFor={id}>{label}</Label>
    </div>
);


const Listings = ({ cats }: { cats: Cat[] }) => {
    const [filter, setFilter] = useState<LIFE_STAGE | "">("");
    // TODO: is useCallback more appropriate in this situation?
    const visibleCats = useMemo(() => filterCats(cats, filter), [cats, filter]);

    const updateFilter = (value: LIFE_STAGE | "") => setFilter(value);

    let catCards;
    if (visibleCats) {
        catCards = visibleCats.map((cat) => <CatCard key={cat.id} cat={cat} />);
    }

    return (
        <section className="px-2">
            <div className="font-medium mx-auto mb-4 ">
                <div className="mb-1">Filters</div>
                <RadioGroup value={filter} onValueChange={updateFilter}
                            className="flex flex-row flex-wrap justify-between gap-y-2 gap-x-1">
                    <FilterButton id="all" value="" label="All" />
                    <FilterButton id="adults" value={LIFE_STAGE.ADULT} label="Adults" />
                    <FilterButton id="kittens" value={LIFE_STAGE.KITTEN} label="Kittens" />
                </RadioGroup>
            </div>
            <div className="flex flex-row flex-wrap text-center justify-between">
                {catCards ?? 'No cats found!'}
            </div>
        </section>
    );
};

export default Listings;