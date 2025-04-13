'use client';

const FILENAME_REGEX = /\/([^/.]+\.(jpeg|jpg|png|webp|gif))$/;

export const generateImageKeyFromUrl = (imageurl: string): string => {
    const matchFilename = FILENAME_REGEX.exec(imageurl);
    return matchFilename ? matchFilename[1] : 'img0';
};

const SelectedImageContainer = ({src, key}: { src: string, key?: string }) => (
    <img className="mx-auto my-4 shadow-xl rounded-xl" key={key} src={src} alt="" width="288px" height="auto" />
)

/* TODO
- scroll functionality on mobile?
- all images displayed under currently selected image
 */
const ImageDisplay = ({ images }: { images: { url: string }[] }) => {
    return (
        <img className="max-lg:mx-auto my-4 shadow-xl rounded-xl" src={images[0].url} alt="" width="288px" height="auto" />
    );

    // if (images.length === 1) {
    //     return (
    //         <img className="mx-auto my-4 shadow-xl rounded-xl" src={images[0].url} alt="" width="288px" height="auto" />
    //     );
    // } else {
    //     const keyedImages = images.map(image => ({ id: generateImageKeyFromUrl(image.url), url: image.url }));
    //     return (
    //         <div>
    //             meow
    //         </div>
    //
    //     );
    // }
};

export default ImageDisplay;
