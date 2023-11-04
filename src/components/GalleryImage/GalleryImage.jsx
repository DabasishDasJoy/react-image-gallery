import React, { useEffect, useState } from 'react';

const GalleryImage = ({ setImages, image, disSelectedAll }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isHover, setIsHovered] = useState(false);

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

    useEffect(() => {
        if (disSelectedAll) setIsChecked((isChecked) => (isChecked = false));
    }, [disSelectedAll]);

    const toggleCheckbox = () => {
        setIsChecked((isChecked) => !isChecked);
        toggleImage(image?.id);
    };

    const handleIsHovered = () => {
        setIsHovered((isHover) => (isHover = !isHover));
    };

    return (
        <div
            className="border rounded-md relative group cursor-pointer"
            onClick={toggleCheckbox}
            onMouseEnter={handleIsHovered}
            onMouseLeave={handleIsHovered}
        >
            <input
                type="checkbox"
                name=""
                id={image?.id}
                checked={isChecked}
                onChange={toggleCheckbox}
                className={`absolute bg-white top-1 left-1 ${
                    isChecked ? 'opacity-100' : 'opacity-0'
                } z-10 ${!isChecked && isHover ? 'opacity-100' : 'opacity-0'}`}
            />
            <img
                src={image?.url}
                alt="Gallery"
                className="w-full h-auto rounded-md hover:opacity-100"
            />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-gray-950 bg-opacity-30 transition-opacity duration-200 opacity-0 group-hover:opacity-80 rounded-md"></div>
        </div>
    );
};

export default GalleryImage;
