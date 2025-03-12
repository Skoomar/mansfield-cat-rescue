// TODO: error message if there's an issue when authenticating or fetching cats (and if the fetch cats returns an empty object)
import { getAdoptableCats } from '@/app/adoption/callPawlytics';
import { Cat } from '@/types';
import { H1 } from '@/components/Headings';
import Listings from '@/app/adoption/components/Listings';

export const metadata = {
    title: 'Adoption - Mansfield Cat Rescue',
    description: 'Listing of cats that are ready for adoption'
}

const Adoption = async () => {
    const cats: Cat[] = await getAdoptableCats();

    return (
        <>
            <header className="bg-secondary mb-3 py-6 lg:py-8">
                <H1>Adoption</H1>
            </header>
            <section className="py-2 px-4">
                <Listings cats={cats} />
            </section>
        </>
    );
};

export default Adoption;