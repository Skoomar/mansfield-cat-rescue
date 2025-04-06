'use client';

const FILENAME_REGEX = /\/([^/.]+\.(jpeg|jpg|png|webp|gif))$/;

export const generateImageKeyFromUrl = (imageurl: string): string => {
    const matchFilename = FILENAME_REGEX.exec(imageurl);
    return matchFilename ? matchFilename[1] : 'img0';
};

/* TODO
- scroll functionality on mobile?
- all images displayed under currently selected image
 */
const ImageDisplay = ({ images }: { images: { url: string }[] }) => {

    if (!images) {
        return <div>No images for this cat</div>;
    } else {
        return (
            <div>

                {images.map((image) => (
                    <p>{image.url}</p>
                ))}
            </div>
        );
    }
};

export default ImageDisplay;
