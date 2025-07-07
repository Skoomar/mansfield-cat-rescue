import { getCatInfo } from '@/app/adoption/callPawlytics';
import ImageDisplay from '@/app/adoption/[catId]/ImageDisplay';
import { getAgeFromBirthdate, getLifeStage, LIFE_STAGE, normaliseAdoptionFee, toTitleCase } from '@/app/adoption/utils';
import { ReactNode } from 'react';
import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';
import { Pet } from '@/__generated__/resolvers-types';
import { Button } from '@/components/ui/button';
import { StyledLink } from '@/components/UtilComponents/StyledLink';

export const revalidate = 43200;

const Attribute = ({ label, children }: { label: string; children: ReactNode }) => (
    <div className="mb-3">
        <p className="mb-0.5 font-medium lg:text-lg">{label}</p>
        <div className="max-lg:text-sm">{children}</div>
    </div>
);

// TODO: Add image
const SiblingDisplay = ({ siblingsInfo }: { siblingsInfo: Pet[] }) => (
    <Attribute label="Siblings">
        {siblingsInfo.map((sibling: Pet) => (
            <StyledLink href={'/adoption/' + sibling.id} key={sibling.id}>
                {sibling.name}
            </StyledLink>
        ))}
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
            <main className="mx-auto flex max-w-5xl px-6 py-4 max-lg:flex-col lg:justify-center lg:gap-20">
                {catInfo.pet.images ? (
                    <ImageDisplay images={catInfo.pet.images} />
                ) : (
                    <div className="my-4 h-96 min-w-72 content-center rounded border border-gray-400 bg-gray-100 text-center text-gray-800 max-lg:mx-auto lg:w-96">
                        No images for this cat!
                    </div>
                )}
                <div className="lg:mt-5">
                    <h2 className="text-3xl max-lg:text-center">{catInfo.pet.name}</h2>
                    <div className="mt-5 max-lg:text-center">
                        <Attribute label="Age">
                            {getAgeFromBirthdate(catInfo.pet.estimated_birth_date) ?? 'Unknown'}
                        </Attribute>
                        <Attribute label="Gender">{toTitleCase(catInfo.pet.gender) ?? 'Unknown'}</Attribute>
                        {catInfo.pet.description && (
                            <Attribute label="Description">{catInfo.pet.description}</Attribute>
                        )}
                        {catInfo.pet.siblings && <SiblingDisplay siblingsInfo={catInfo.pet.siblings} />}
                        <Attribute label="Adoption Fee">
                            {normaliseAdoptionFee(catInfo.adoption_fee?.amount) ??
                                'Please contact us for this information'}
                        </Attribute>
                    </div>
                    <div className="mt-5 flex max-lg:justify-center">
                        {/* TODO: see if there's a short link for this form that doesn't go through Facebook*/}
                        <Button
                            asChild
                            className="h-10 w-full max-w-72 bg-secondary text-secondary-foreground shadow-md hover:bg-accent hover:text-accent-foreground"
                        >
                            <Link
                                href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAShwW7pUM1BHVEtFOVJBUTNPRklWQTZQWE82Nk81US4u"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Apply for adoption
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CatPage;
