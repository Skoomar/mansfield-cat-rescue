import { getCatInfo } from '@/app/adoption/callPawlytics';
import ImageDisplay from '@/app/adoption/[catId]/ImageDisplay';
import { getAgeFromBirthdate, getLifeStage, LIFE_STAGE, normaliseAdoptionFee, toTitleCase } from '@/app/adoption/utils';
import { ReactNode } from 'react';
import { PageHeader } from '@/components/PageHeader';

export const revalidate = 43200;

const Attribute = ({ label, children }: { label: string; children: ReactNode }) => (
    <div className="mb-3">
        <p className="font-medium text-md">{label}</p>
        <div className="text-sm">{children}</div>
    </div>
);

/* TODO
- image gallery (mobile & desktop)
- gender
- age/birthday
- description
- weight?
- youtube video link if available
- link to siblings if any
 */
const CatPage = async ({ params }: { params: Promise<{ catId: string }> }) => {
    const { catId } = await params;
    // TODO: use React Suspense for placeholders during this data fetch? Skeleton page?
    const catInfo = await getCatInfo(catId);
    // const adoptionFee = catInfo.adoption_fee?.amount ? decimaliseAdoptionFee(catInfo.adoption_fee?.amount) : getDefaultAdoptionFee(catInfo.pet.estimated_birth_date);

    return (
        <>
            <PageHeader>
                <h1>Adoption</h1>
            </PageHeader>
            <main className="py-4 px-6">
                <h2 className="text-center">{catInfo.pet.name}</h2>
                {
                    catInfo.pet.images ?
                        <ImageDisplay images={catInfo.pet.images} /> :
                        <div
                            className="text-center text-gray-700 content-center my-4 mx-auto w-72 h-80 border rounded border-gray-400 bg-gray-100">No
                            images for this cat!</div>
                }
                <div className="mt-5">
                    <Attribute
                        label="Age">{getAgeFromBirthdate(catInfo.pet.estimated_birth_date) ?? 'Unknown'}</Attribute>
                    <Attribute label="Gender">{toTitleCase(catInfo.pet.gender) ?? 'Unknown'}</Attribute>
                    {catInfo.pet.description && <Attribute label="Description">{catInfo.pet.description}</Attribute>}
                    <Attribute label="Adoption Fee">{normaliseAdoptionFee(catInfo.adoption_fee?.amount) ?? 'Please contact us for this information'}</Attribute>
                </div>
            </main>
        </>
    );
};

export default CatPage;
