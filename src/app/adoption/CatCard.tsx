import { Cat } from '@/types';
// import ImageSlider from '@/app/adoption/ImageSlider';
import Image from 'next/image';

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
}

const CatCard = ({ cat }: { cat: Cat }) => {
    // TODO: can these images be cached
    // if (cat.pet.images) {
    //     cat.pet.images.map((image) => )
    // }

    return (
        <div className="mx-auto mb-8 md:w-1/2">
            {/* TODO: allow to scroll through all images use onLoad and onError for stuff - and lazy loading have a cute cartoon cat as placeholder */}
            {/*<ImageSlider imageUrls={cat.pet.images} />*/}
            {cat.pet.images && (<Image src={cat.pet.images[0].url} alt={cat.pet.name} width={200} height={200} />)}
            <p className="font-medium">{cat.pet.name}</p>
            <div className="text-sm">
            <p>{getAgeFromBirthdate(cat.pet.estimated_birth_date) ?? 'Age Unknown'}</p>
            <p>{toTitleCase(cat.pet.gender) ?? 'Gender Unknown'}</p>
            <p>{cat.pet.description}</p>
            </div>
        </div>
    );
};

export default CatCard;