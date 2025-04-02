import { Cat } from '@/types';
// import ImageSlider from '@/app/adoption/ImageSlider';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

export const toTitleCase = (inputString: string | null): string | null => {
    return !inputString ? null : inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
};

const CatCard = ({ cat }: { cat: Cat }) => {
    // TODO: can these images be cached
    // if (cat.pet.images) {
    //     cat.pet.images.map((image) => )
    // }

    return (
        <div
            className="flex w-72 flex-col rounded-sm border-2 pb-4 shadow-md hover:bg-accent hover:shadow-xl max-md:mx-auto">
            {/* TODO: allow to scroll through all images use onLoad and onError for stuff - and lazy loading have a cute cartoon cat as placeholder */}
            {/* TODO: maybe instead of ImageSlider just have a gallery of the images in the view when you click on a cat */}
            <Link href={`/adoption/${cat.id}`}>
                <div className="relative mb-2 h-80 overflow-hidden">
                    {cat.pet.images && (
                        <img
                            className="absolute h-full w-full object-cover"
                            src={cat.pet.images[0].url}
                            alt={cat.pet.name}
                            fetchPriority="low"
                            loading="lazy"
                        />
                    )}
                </div>
            </Link>
            <div className="mt-auto flex flex-col gap-1 px-6 text-sm">
                <Link href={`/adoption/${cat.id}`} className="mb-1 text-center text-lg font-black">{cat.pet.name}</Link>
                <p>
                    <strong>Age:</strong> {getAgeFromBirthdate(cat.pet.estimated_birth_date) ?? 'Unknown'}
                </p>
                <p>
                    <strong>Gender:</strong> {toTitleCase(cat.pet.gender) ?? 'Unknown'}
                </p>
                <p>{cat.pet.description}</p>
            </div>
        </div>
    );
};

export default CatCard;
