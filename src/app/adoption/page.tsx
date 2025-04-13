// TODO: error message if there's an issue when authenticating or fetching cats (and if the fetch cats returns an empty object)
import { getAdoptableCats } from '@/app/adoption/callPawlytics';
import Listings from '@/app/adoption/components/Listings';
import { PageHeader } from '@/components/PageHeader';
import { Organization_Pet } from '@/__generated__/resolvers-types';

export const metadata = {
    title: 'Adoption - Mansfield Cat Rescue',
    description: 'Listing of cats that are ready for adoption',
};

export const revalidate = 43200; // refresh cat data every 12 hours

const Adoption = async () => {
    const cats: Organization_Pet[] = await getAdoptableCats();

    return (
        <>
            <PageHeader>
                <h1>Adoption</h1>
            </PageHeader>
            <main className="px-6 py-5 md:px-[5%]">
                <div className="mb-4 text-sm flex flex-col gap-2">
                    <p>Cats are loosely split into 3 age categories: Kitten, Adult, Senior.</p>
                    <p>Our adoption fees for <strong>kittens</strong> and <strong>adults</strong> cover vaccinations, neutering, microchipping,
                        up-to-date parasite control, and 5 weeks pet insurance through Agria.</p>
                </div>
                <Listings cats={cats} />
            </main>
        </>
    );
};

export default Adoption;
