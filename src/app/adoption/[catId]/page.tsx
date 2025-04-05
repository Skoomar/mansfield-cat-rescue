import { getCatInfo } from '@/app/adoption/callPawlytics';
import ImageGallery from '@/app/adoption/[catId]/ImageGallery';

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
        <div className="py-5">
            <h1>{catInfo.pet.name}</h1>
            <ImageGallery images={catInfo.pet.images} />
        </div>
    );
};

export default CatPage;
