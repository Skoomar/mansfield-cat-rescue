const ImageGallery = ({ images }: { images: {}[] }) => (
    <div>
        {images.map((image) => (
            <p>{image.url}</p>
        ))}
    </div>
);

export default ImageGallery;
