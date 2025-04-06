import { getCatInfo } from '@/app/adoption/callPawlytics';
import ImageDisplay from '@/app/adoption/[catId]/ImageDisplay';
import { getAgeFromBirthdate, getPrettyDate, toTitleCase } from '@/app/adoption/utils';

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
        <div className="py-5 px-5">
            <h1>{catInfo.pet.name}</h1>
            {
                catInfo.pet.images ?
                <ImageDisplay images={catInfo.pet.images} />:
                'No images for this cat'
            }
            <p>
                <strong>Age: </strong>{getAgeFromBirthdate(catInfo.pet.estimated_birth_date) ?? 'Unknown'}
            </p>
            <p>
                <strong>Date of Birth: </strong>{getPrettyDate(catInfo.pet.estimated_birth_date) ?? 'Unknown'}
            </p>
            <p>
                <strong>Gender:</strong> {toTitleCase(catInfo.pet.gender) ?? 'Unknown'}
            </p>
        </div>
    );
};

export default CatPage;
