import { getCatInfo } from '@/app/adoption/callPawlytics';

const CatPage = async ({ params }: { params: Promise<{ catId: string }> }) => {
    const { catId } = await params;
    const catInfo = await getCatInfo(catId);

    return <div>Name: {catInfo.pet.name}</div>;
};

export default CatPage;
