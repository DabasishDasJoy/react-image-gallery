import React, { useState } from 'react';
import GalleryHeader from '../../components/GalleryHeader/GalleryHeader';
import GalleryImages from '../../components/GalleryImages/GalleryImages';
import data from '../../local-data/images.json';

const ImageGallery = () => {
    const [images, setImages] = useState(data);
    const [disSelectedAll, setDisSelectedAll] = useState(false);
    const checkedCount = images.filter((image) => image.checked).length;

    return (
        <div className="w-[80%] my-auto border border-gray-100 rounded-md shadow-md">
            <GalleryHeader
                checkedCount={checkedCount}
                setImages={setImages}
                setDisSelectedAll={setDisSelectedAll}
            ></GalleryHeader>
            <GalleryImages
                images={images}
                setImages={setImages}
                disSelectedAll={disSelectedAll}
            ></GalleryImages>
        </div>
    );
};

export default ImageGallery;
