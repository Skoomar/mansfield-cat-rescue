// TODO: error message if there's an issue when authenticating or fetching cats (and if the fetch cats returns an empty object)
import { getAdoptableCats } from '@/app/adoption/callPawlytics';
import { Cat } from '@/types';
import CatCard from '@/app/adoption/CatCard';

const Adoption = async () => {
    const cats: Cat[] = await getAdoptableCats();
    let catCards;
    if (cats) {
        catCards = cats.map((cat) => <CatCard key={cat.id} cat={cat} />);
    }

    return (
        <>
            <h1>Adoption</h1>
            <div className="flex flex-row justify-between">
                {catCards}
            </div>
        </>
    );
};

export default Adoption;