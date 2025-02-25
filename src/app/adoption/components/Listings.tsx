'use client';

import { Cat } from '@/types';
import CatCard from '@/app/adoption/components/CatCard';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';

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

export const filterCats = (cats: Cat[], filter: LIFE_STAGE | null): Cat[] => {
    console.log(filter);
    if (!filter || !(filter in LIFE_STAGE)) {
        return cats;
    }
    return cats.filter(cat => getLifeStage(cat.pet.estimated_birth_date) === filter);
};

const Listings = ({ cats }: { cats: Cat[] }) => {
    const [filter, setFilter] = useState<LIFE_STAGE | null>(null);
    const visibleCats = useMemo(() => filterCats(cats, filter), [cats, filter]);


    let catCards;
    if (visibleCats) {
        catCards = visibleCats.map((cat) => <CatCard key={cat.id} cat={cat} />);
    }

    return (
        <div>
            <div className="flex justify-between font-medium">
                <div>Filters</div>
                <Button onClick={() => setFilter(null)}>All</Button>
                <Button onClick={() => setFilter(LIFE_STAGE.ADULT)}>Adults Only</Button>
                <Button onClick={() => setFilter(LIFE_STAGE.KITTEN)}>Kittens Only</Button>
            </div>
            <div className="flex flex-row flex-wrap justify-between">
                {catCards}
            </div>
        </div>
    );
};

export default Listings;