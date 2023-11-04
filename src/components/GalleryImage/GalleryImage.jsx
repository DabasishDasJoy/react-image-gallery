import React from 'react';

const GalleryImage = ({ setImages, image }) => {
    const toggleImage = (id) => {
        setImages((prevImages) =>
            prevImages.map((image) => {
                if (image.id === id) {
                    return { ...image, checked: !image.checked };
                }
                return image;
            })
        );
    };

    return (
        <div
            className="border rounded-md relative group"
            onClick={() => toggleImage(image.id)}
        >
            <input
                type="checkbox"
                name=""
                id={image?.id}
                checked={image.checked}
                className="absolute bg-white top-1 left-1 opacity-100 z-10"
            />
            <img
                src={image?.url}
                alt="Gallery"
                className="w-full h-auto rounded-md"
            />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30 transition-opacity duration-200 opacity-0 group-hover:opacity-80 rounded-md"></div>
        </div>
    );
};

export default GalleryImage;
