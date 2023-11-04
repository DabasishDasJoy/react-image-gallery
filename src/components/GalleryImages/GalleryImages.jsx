import React from 'react';

import AddNewImage from '../AddNewImage/AddNewImage';
import GalleryImage from '../GalleryImage/GalleryImage';

const GalleryImages = ({ images, setImages }) => {
    return (
        <div className="grid grid-cols-5 gap-3 p-5">
            <div className="border rounded-md col-span-2 row-span-2">
                {images?.length > 0 && (
                    <GalleryImage
                        key={images[0].id}
                        image={images[0]}
                        setImages={setImages}
                    />
                )}
            </div>
            {images?.slice(1)?.map((image) => (
                <GalleryImage
                    key={image?.id}
                    image={image}
                    setImages={setImages}
                ></GalleryImage>
            ))}

            <AddNewImage></AddNewImage>
        </div>
    );
};

export default GalleryImages;
