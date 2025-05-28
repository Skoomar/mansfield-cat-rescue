import Link from 'next/link';
import { getAgeFromBirthdate, toTitleCase } from '@/app/adoption/utils';
import { Organization_Pet } from '@/__generated__/resolvers-types';

// TODO: Add link to siblings
const CatCard = ({ cat }: { cat: Organization_Pet }) => {
    // TODO: can these images be cached
    // if (cat.pet.images) {
    //     cat.pet.images.map((image) => )
    // }

    return (
        <div className="flex w-72 flex-col rounded-sm border-2 pb-4 shadow-md hover:bg-accent hover:shadow-xl max-md:mx-auto">
            {/* TODO: allow to scroll through all images use onLoad and onError for stuff - and lazy loading have a cute cartoon cat as placeholder */}
            <Link href={`/adoption/${cat.id}`}>
                <div className="relative mb-2 h-80 overflow-hidden">
                    {cat.pet?.images ? (
                        <img
                            className="absolute h-full w-full object-cover"
                            src={cat.pet?.images[0]?.url as string}
                            alt={cat.pet?.name as string}
                            fetchPriority="low"
                            loading="lazy"
                        />
                    )
                    :
                        <div className="text-gray-800 bg-gray-100 flex justify-center h-full items-center">No images for this cat</div>
                    }
                </div>
            </Link>
            <div className="mt-3 flex flex-col gap-1 px-6 text-sm text-center">
                <Link href={`/adoption/${cat.id}`} className="mb-1 text-lg font-black">
                    {cat.pet?.name}
                </Link>
                <p>
                    <strong>Age:</strong> {getAgeFromBirthdate(cat.pet?.estimated_birth_date) ?? 'Unknown'}
                </p>
                <p>
                    <strong>Gender:</strong> {toTitleCase(cat.pet?.gender as string) ?? 'Unknown'}
                </p>
                <p>{cat.pet?.description}</p>
            </div>
        </div>
    );
};

export default CatCard;
