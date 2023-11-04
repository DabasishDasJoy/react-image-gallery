import React from 'react';
import GalleryHeader from '../../components/GalleryHeader/GalleryHeader';
import GalleryImages from '../../components/GalleryImages/GalleryImages';

const ImageGallery = () => {
    return (
        <div className="w-[80%] my-auto border border-gray-100 rounded-md shadow-md">
            <GalleryHeader></GalleryHeader>
            <GalleryImages></GalleryImages>
        </div>
    );
};

export default ImageGallery;
