// TODO: error message if there's an issue when authenticating or fetching cats (and if the fetch cats returns an empty object)
import { getAdoptableCats } from '@/app/adoption/callPawlytics';
import { Cat } from '@/types';
import Listings from '@/app/adoption/components/Listings';
import { PageHeader } from '@/components/PageHeader';

export const metadata = {
    title: 'Adoption - Mansfield Cat Rescue',
    description: 'Listing of cats that are ready for adoption',
};

export const revalidate = 43200; // refresh cat data every 12 hours

const Adoption = async () => {
    const cats: Cat[] = await getAdoptableCats();

    return (
        <>
            <PageHeader>
                <h1>Adoption</h1>
            </PageHeader>
            <section className="px-6 md:px-[5%] py-5">
                <Listings cats={cats} />
            </section>
        </>
    );
};

export default Adoption;
