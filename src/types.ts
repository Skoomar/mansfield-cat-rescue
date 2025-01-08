// TODO: see if I can pull the string from the query schema somehow instead of defining manually
export type Cat = {
    id: string;
    status: string;
    adoption_fee: { amount: number, currency: string } | null;
    pet: {
        name: string;
        status: string;
        status_details: string | null;
        description: string | null;
        species: string | null;
        breed_cat: string | string[] | null;
        mixed: string | null;
        estimated_birth_date: string | null;
        special_needs: string | null;
        distinguishing_marks: string | null;
        weight_lbs: number | null;
        youtube_video_url: string | null;
        gender: string | null;
        siblings: { id: string, name: string }[] | null;
        images: { url: string }[] | null;
    }
};