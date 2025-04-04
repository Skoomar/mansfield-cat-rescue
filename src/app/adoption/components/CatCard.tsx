import { Cat } from '@/types';
import Link from 'next/link';
import { getAgeFromBirthdate, toTitleCase } from '@/app/adoption/utils';

// TODO: Add link to siblings
const CatCard = ({ cat }: { cat: Cat }) => {
    // TODO: can these images be cached
    // if (cat.pet.images) {
    //     cat.pet.images.map((image) => )
    // }

    return (
        <div className="flex w-72 flex-col rounded-sm border-2 pb-4 shadow-md hover:bg-accent hover:shadow-xl max-md:mx-auto">
            {/* TODO: allow to scroll through all images use onLoad and onError for stuff - and lazy loading have a cute cartoon cat as placeholder */}
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
                <Link href={`/adoption/${cat.id}`} className="mb-1 text-center text-lg font-black">
                    {cat.pet.name}
                </Link>
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
