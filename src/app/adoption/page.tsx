// TODO: error message if there's an issue when authenticating or fetching cats (and if the fetch cats returns an empty object)
import { getAdoptableCats } from '@/app/adoption/callPawlytics';
import { Cat } from '@/types';
import Listings from '@/app/adoption/components/Listings';

export const metadata = {
    title: 'Adoption - Mansfield Cat Rescue',
    description: 'Listing of cats that are ready for adoption',
};

const Adoption = async () => {
    // const cats: Cat[] = await getAdoptableCats();

    return (
        <>
            <header className="mb-3 bg-secondary py-6 lg:py-8">
                <h1>Adoption</h1>
            </header>
            <section className="px-4 py-2">
                {/*<Listings cats={cats} />*/}
                <Listings />
            </section>
        </>
    );
};

export default Adoption;
