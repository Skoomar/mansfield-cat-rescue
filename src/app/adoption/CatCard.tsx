import { Cat } from '@/types';
// import ImageSlider from '@/app/adoption/ImageSlider';
import Image from 'next/image';

export const getAgeFromBirthdate = (birthdate: string): string => {
    const birthdateObj: Date = new Date(birthdate);
    if (!birthdateObj.valueOf()) {
        return 'Unknown';
    }

    const today: Date = new Date();
    let months: number = (today.getFullYear() - birthdateObj.getFullYear()) * 12;
    months -= birthdateObj.getMonth();
    months += today.getMonth();
    if (today.getDate() < birthdateObj.getDate()) {
        months -= 1;
    }

    if (months < 0) {
        return 'Unknown';
    }

    const monthsStr: string = months % 12 === 1 ? '1 month old' : `${months % 12} months old`;
    if (months < 12) {
        return monthsStr;
    }

    const years: number = Math.floor(months / 12);
    return years === 1 ? `1 year ${monthsStr}` : `${years} years ${monthsStr}`;
}

const CatCard = ({ cat }: { cat: Cat }) => {
    const age = cat.pet.estimated_birth_date ? getAgeFromBirthdate(cat.pet.estimated_birth_date) : 'Unknown';
    // TODO: can these images be cached
    // if (cat.pet.images) {
    //     cat.pet.images.map((image) => )
    // }

    return (
        <div className="w-96 border-2">
            <p>Name: {cat.pet.name}</p>
            {/* allow to scroll through all images */}
            {/* use onLoad and onError for stuff - and lazy loading */}
            {/* have a cute cartoon cat as placeholder */}
            {/*<ImageSlider imageUrls={cat.pet.images} />*/}
            {cat.pet.images && (<Image src={cat.pet.images[0].url} alt={cat.pet.name} width={200} height={200} />)}
            {/* TODO: does it make a difference if I just use getAgeFromBirthday here? It won't calculate it again and again will it? */}
            <p>Age: {age}</p>
            <p>Gender: {cat.pet.gender}</p>
            <p>Description: {cat.pet.description}</p>
        </div>
    );
};

export default CatCard;