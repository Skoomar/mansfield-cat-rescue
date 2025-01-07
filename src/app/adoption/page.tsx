
// TODO: error message if there's an issue when authenticating or fetching cats (and if the fetch cats returns an empty object)
import { getAdoptableCats } from '@/utils/authenticate-pawlytics';
import { Cat } from '@/types';

const CatCard = ({ cat }: { cat: Cat }) => (
    <div className="border-2">
        <p>ID: {cat.id}</p>
    </div>
);

const Adoption = async () => {
    const cats: Cat[] = await getAdoptableCats();
    let catCards;
    if (cats) {
        catCards = cats.map((cat) => <CatCard key={cat.id} cat={cat} />)
    }

    return (
        <>
            <h1>Adoption</h1>
            <div>
                {
                    {catCards}
                }
            </div>
        </>
    );
};

export default Adoption;