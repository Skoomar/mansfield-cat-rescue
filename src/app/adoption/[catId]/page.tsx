import { Cat } from '@/types';
import { gql } from '@/__generated__';

const GET_CAT_INFO = gql(`
    query GetCatInfo($petId: UUID!, $orgId: UUID!) {
       organization_pet_by_id(id: $petId, organization_id: $orgId) {
       
       } 
    }
`)

const CatPage = async ({ params }: { params: Promise<{ catId: string; cat: Cat }> }) => {
    const { catId, cat } = await params;
    return <div>{catId}: </div>;
};

export default CatPage;
