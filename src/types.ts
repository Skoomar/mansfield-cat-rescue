// TODO: see if I can pull the string from the query schema somehow instead of defining manually
export type Cat = {
    id: string;
    status: string;
    adoption_fee: { amount: number, currency: string };
    pet: {
        name: string;
        status: string;
        status_details: string;
        description: string;
        species: string;
        breed_cat: string[];
        mixed: string;
        estimated_birth_date: Date;
        special_needs: string;
        distinguishing_marks: string;
        weight_lbs: number;
        youtube_video_url: string;
        gender: string
        siblings: {
            id: string;
            name: string;
        }
        images: {
            url: string;
        }
    }
};