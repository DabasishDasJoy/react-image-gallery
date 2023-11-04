import React from 'react';

const GalleryHeader = () => {
    return (
        <div className="flex justify-between border-b-[1px] border-gray-300 p-2">
            <div className="flex space-x-2">
                <input type="checkbox"></input>
                <span>3 Files Selected</span>
            </div>
            <span className="text-red-600">Delete Files</span>
        </div>
    );
};

export default GalleryHeader;
