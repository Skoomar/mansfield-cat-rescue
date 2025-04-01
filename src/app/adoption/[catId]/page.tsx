import { Cat } from '@/types';
// TODO: Maybe need to set up Apollo to manage the state of all info of cats. Can't just pass in cat data as props from the main adoption page
// or maybe just migrate to Vite and not do all this silly Nextjs stuff lol
const CatPage = async ({ params }: { params: Promise<{ catId: string; cat: Cat }> }) => {
    const { catId, cat } = await params;
    return <div>{catId}: </div>;
};

export default CatPage;
