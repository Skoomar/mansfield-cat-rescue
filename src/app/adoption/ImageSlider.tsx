"use client";

import { JSX, useEffect, useState } from 'react';
import Image from 'next/image';

const ImageSlider = ({ id, imageUrls }: { id: string, imageUrls: [{ url: string }] }): JSX.Element => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const showPrevImage = (): void => {
        setCurrentImage((prevImage) => (prevImage - 1) % imageUrls.length);
    };

    const showNextImage = (): void => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
    };

    useEffect(() => {
        if (!isHovered) {
            const autoSlideInterval = setInterval(() => {
                showNextImage();
            }, 3000);

            return () => {
                clearInterval(autoSlideInterval);
            };
        }
    }, [isHovered]);

    const handleMouseOver = (): void => {
        setIsHovered(true);
    };

    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };

    return (
        <div className="w-full">
            <div className="h-48 group hover:-translate-y-2"
                 onMouseOver={handleMouseOver}
                 onMouseLeave={handleMouseLeave}
            >
                <Image src={imageUrls[currentImage].url}
                       alt={`${id} image ${currentImage}`}
                       layout="fill"
                       objectFit="cover"
                       className="transition-all duration-500 ease-in-out cursor-pointer"
                />
                <button onClick={showPrevImage}>Prev</button>
                <button onClick={showNextImage}>Next</button>
                {/* Little display */}
                <div className="flex justify-center">
                    {
                        () => {
                            const selectedImageIndicators = [];
                            for (let i = 0; i < imageUrls.length; i++) {
                                selectedImageIndicators.push(
                                    <div
                                        key={`image-indicator-${i}`}
                                        className={`${i === currentImage ? "bg-orange-600" : "bg-gray-300"} 
                                                    h-1 w-10 rounded-xl transition-all duration-500 ease-in-out`}
                                    />
                                );
                            }
                            return selectedImageIndicators;
                        }
                    }
                </div>
            </div>
        </div>
    );
};

// TODO: use this so you're not using slider for everything
const ImageDisplay = ({ name, imageUrls }: { name: string, imageUrls: [{ url: string }] }): JSX.Element => (
    <>
        {imageUrls.length > 1
            ? (<ImageSlider name={name} imageUrls={imageUrls} />)
            : <Image src={imageUrls[0].url} alt={name} width={200} height={200} />
        }
    </>
);

export default ImageSlider;