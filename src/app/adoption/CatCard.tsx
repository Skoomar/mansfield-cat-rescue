import { Cat } from '@/types';
import ImageSlider from '@/app/adoption/ImageSlider';

const CatCard = ({ cat }: { cat: Cat }) => {
    let catImages;
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
            <ImageSlider imageUrls={cat.pet.images} />
            <p>Adoption Fee: {cat.adoption_fee?.currency} {cat.adoption_fee?.amount}</p>
        </div>
    );
};

export default CatCard;