// TODO: error message if there's an issue when authenticating or fetching cats (and if the fetch cats returns an empty object)
import { getAdoptableCats } from '@/app/adoption/callPawlytics';
import { Cat } from '@/types';
import { H1 } from '@/components/Headings';
import Listings from '@/app/adoption/components/Listings';

const Adoption = async () => {
    const cats: Cat[] = await getAdoptableCats();

    return (
        <>
            <header className="py-6">
                <H1>Adoption</H1>
            </header>
            <section className="py-2 px-4">
                <Listings cats={cats} />
            </section>
        </>
    );
};

export default Adoption;