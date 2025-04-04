import { getCatInfo } from '@/app/adoption/callPawlytics';

export const revalidate = 43200;

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
    const catInfo = await getCatInfo(catId);

    return (
        <div>
            <p>Name: {catInfo.pet.name}</p>
            <p>stuff: {catInfo.pet.estimated_birth_date}</p>
        </div>);
};

export default CatPage;
