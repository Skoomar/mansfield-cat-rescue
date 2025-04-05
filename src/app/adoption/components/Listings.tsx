'use client';

import CatCard from '@/app/adoption/components/CatCard';
import { useMemo, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { getLifeStage, LIFE_STAGE } from '@/app/adoption/utils';
import { Organization_Pet } from '@/__generated__/resolvers-types';

export const filterCats = (cats: Organization_Pet[], filter: LIFE_STAGE | ''): Organization_Pet[] => {
    if (!filter || !(filter in LIFE_STAGE)) {
        return cats;
    }
    return cats.filter((cat) => getLifeStage(cat.pet?.estimated_birth_date) === filter);
};

// TODO: Maybe change to use Checkbox instead of Radios if more filters get added
// TODO: colour button when selected
const FilterButton = ({ id, value, label }: { id: string; value: LIFE_STAGE | ''; label: string }) => (
    <Label className="flex cursor-pointer items-center gap-1 rounded-lg border p-1.5 hover:bg-accent" htmlFor={id}>
        <RadioGroupItem value={value} id={id} />
        {label}
    </Label>
);

const Listings = ({ cats }: { cats: Organization_Pet[] }) => {
    const [filter, setFilter] = useState<LIFE_STAGE | ''>('');

    // TODO: is useCallback more appropriate in this situation?
    const visibleCats = useMemo(() => filterCats(cats, filter), [cats, filter]);

    const updateFilter = (value: LIFE_STAGE | '') => setFilter(value);

    let catCards;
    if (visibleCats) {
        catCards = visibleCats.map((cat) => <CatCard key={cat.id} cat={cat} />);
    }

    return (
        <>
            <div className="mx-auto mb-4 font-medium max-sm:w-72">
                <div className="mb-1">Filters</div>
                <RadioGroup
                    value={filter}
                    onValueChange={updateFilter}
                    className="sm flex flex-row flex-wrap justify-start gap-x-3 gap-y-2"
                >
                    <FilterButton id="all" value="" label="All" />
                    <FilterButton id="adults" value={LIFE_STAGE.ADULT} label="Adults" />
                    <FilterButton id="kittens" value={LIFE_STAGE.KITTEN} label="Kittens" />
                </RadioGroup>
            </div>
            <div className="flex flex-row flex-wrap justify-start gap-8 text-center">
                {catCards ?? 'No cats found! Please check again later'}
            </div>
        </>
    );
};

export default Listings;
