import React from 'react';

import AddNewImage from '../AddNewImage/AddNewImage';
import GalleryImage from '../GalleryImage/GalleryImage';

const GalleryImages = ({
    images,
    setImages,
    disSelectedAll,
    setDisSelectedAll,
}) => {
    return (
        <div className="grid grid-cols-5 gap-3 p-5">
            {images.length > 0 && (
                <div className="border rounded-md col-span-2 row-span-2">
                    {images?.length > 0 && (
                        <GalleryImage
                            key={images[0].id}
                            image={images[0]}
                            setImages={setImages}
                            disSelectedAll={disSelectedAll}
                            setDisSelectedAll={setDisSelectedAll}
                        />
                    )}
                </div>
            )}

            {images?.slice(1)?.map((image) => (
                <GalleryImage
                    key={image?.id}
                    image={image}
                    setImages={setImages}
                    disSelectedAll={disSelectedAll}
                    setDisSelectedAll={setDisSelectedAll}
                ></GalleryImage>
            ))}

            <AddNewImage></AddNewImage>
        </div>
    );
};

export default GalleryImages;
