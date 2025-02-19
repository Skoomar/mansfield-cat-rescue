// TODO: error message if there's an issue when authenticating or fetching cats (and if the fetch cats returns an empty object)
import { getAdoptableCats } from '@/app/adoption/callPawlytics';
import { Cat } from '@/types';
import CatCard from '@/app/adoption/CatCard';
import { H1 } from '@/components/Headings';

const Adoption = async () => {
    const cats: Cat[] = await getAdoptableCats();
    let catCards;
    if (cats) {
        catCards = cats.map((cat) => <CatCard key={cat.id} cat={cat} />);
    }

    return (
        <>
            <header className="py-6">
                <H1>Adoption</H1>
            </header>
            <section className="py-2 px-4">
                <div>
                    Filters
                </div>
                <div className="flex flex-row flex-wrap justify-between">
                    {catCards}
                </div>
            </section>
        </>
    );
};

export default Adoption;