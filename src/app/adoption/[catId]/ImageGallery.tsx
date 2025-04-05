const ImageGallery = ({ images }: { images: string[] }) => (
    <div>
        {images.map((image) => (
            <p>{image.url}</p>
        ))}
    </div>
);

export default ImageGallery;
