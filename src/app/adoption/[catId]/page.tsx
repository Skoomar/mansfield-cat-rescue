import { getCatInfo } from '@/app/adoption/callPawlytics';
import ImageDisplay from '@/app/adoption/[catId]/ImageDisplay';
import { getAgeFromBirthdate, getLifeStage, LIFE_STAGE, normaliseAdoptionFee, toTitleCase } from '@/app/adoption/utils';
import { ReactNode } from 'react';
import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';
import { Pet } from '@/__generated__/resolvers-types';
import { Button } from '@/components/ui/button';

export const revalidate = 43200;

const Attribute = ({ label, children }: { label: string; children: ReactNode }) => (
    <div className="mb-3">
        <p className="font-medium lg:text-lg mb-0.5">{label}</p>
        <div className="max-lg:text-sm">{children}</div>
    </div>
);

// TODO: Add image
const SiblingDisplay = ({ siblingsInfo }: { siblingsInfo: Pet[] }) => (
    <Attribute label="Siblings">
        {siblingsInfo.map((sibling: Pet) => (
            <Link href={"/adoption/" + sibling.id} key={sibling.id}
                  className="text-blue-500 hover:underline">{sibling.name}</Link>)
        )}
    </Attribute>
);

/* TODO
- image gallery (mobile & desktop)
- gender
- age/birthday
- description
- weight?
- youtube video link if available
- link to siblings if any
- link to apply for adoption
 */
const CatPage = async ({ params }: { params: Promise<{ catId: string }> }) => {
    const { catId } = await params;
    // TODO: use React Suspense for placeholders during this data fetch? Skeleton page?
    const catInfo = await getCatInfo(catId);

    return (
        <>
            <PageHeader compact>
                <h1>Adoption</h1>
            </PageHeader>
            <main className="py-4 px-6 flex max-lg:flex-col lg:justify-center lg:gap-20 max-w-5xl mx-auto">
                {
                    catInfo.pet.images ?
                        <ImageDisplay images={catInfo.pet.images} /> :
                        <div
                            className="text-center text-gray-800 bg-gray-100 content-center my-4 max-lg:mx-auto min-w-72 lg:w-96 h-96 border rounded border-gray-400">No
                            images for this cat!</div>
                }
                <div className="lg:mt-5">
                    <h2 className="max-lg:text-center text-3xl">{catInfo.pet.name}</h2>
                    <div
                        className="mt-5 max-lg:text-center">
                        <Attribute
                            label="Age">{getAgeFromBirthdate(catInfo.pet.estimated_birth_date) ?? 'Unknown'}</Attribute>
                        <Attribute label="Gender">{toTitleCase(catInfo.pet.gender) ?? 'Unknown'}</Attribute>
                        {catInfo.pet.description &&
                            <Attribute label="Description">{catInfo.pet.description}</Attribute>}
                        {catInfo.pet.siblings && <SiblingDisplay siblingsInfo={catInfo.pet.siblings} />}
                        <Attribute
                            label="Adoption Fee">{normaliseAdoptionFee(catInfo.adoption_fee?.amount) ?? 'Please contact us for this information'}</Attribute>
                    </div>
                    <div className="flex max-lg:justify-center mt-5">
                        {/* TODO: see if there's a short link for this form that doesn't go through Facebook*/}
                        <Button asChild
                                className="bg-secondary text-secondary-foreground w-full max-w-72 h-10 hover:bg-accent hover:text-accent-foreground shadow-2xl"><Link
                            href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAShwW7pUM1BHVEtFOVJBUTNPRklWQTZQWE82Nk81US4u">Apply
                            for adoption</Link></Button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CatPage;
