import { unstable_cache } from 'next/cache';

const loadCatData = () => {
// const loadCatData = unstable_cache(
    // async () => {
    //     return await getBear
    // }
// )
    try {
        const pawlyticsToken = getPawlyticsToken();
        // blah
    } catch (error) {
        console.error('Error getting cat data', error);
        // TODO: write function to display this message to user
        setErrorMessage('Failed to load cat data. Please try again later.')
    }
}

const Adoption = async () => {
    return (
        <>
            <h1>Adoption</h1>
        </>
    );
};

export default Adoption;