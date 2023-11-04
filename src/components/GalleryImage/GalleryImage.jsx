import React, { useRef } from 'react';

const GalleryImage = ({ setImages, image }) => {
    const ref = useRef();
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

    const toggleVisibilityCheckbox = (ref) => {
        if (!ref.current.checked)
            if (ref.current) {
                if (ref.current.style.opacity == 1)
                    ref.current.style.opacity = '0';
                else {
                    ref.current.style.opacity = '1';
                }
            }
    };

    return (
        <div
            className="border rounded-md relative group"
            onClick={() => toggleImage(image.id)}
            onMouseEnter={() => toggleVisibilityCheckbox(ref)}
            onMouseLeave={() => toggleVisibilityCheckbox(ref)}
        >
            <input
                type="checkbox"
                name=""
                ref={ref}
                id={image?.id}
                checked={image.checked}
                className={`absolute bg-white top-1 left-1 ${
                    image.checked ? 'opacity-100' : 'opacity-0'
                } z-10`}
            />
            <img
                src={image?.url}
                alt="Gallery"
                className="w-full h-auto rounded-md hover:opacity-100"
            />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30 transition-opacity duration-200 opacity-0 group-hover:opacity-80 rounded-md"></div>
        </div>
    );
};

export default GalleryImage;
