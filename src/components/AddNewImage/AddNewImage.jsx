import React from 'react';
import { PiImageSquareFill } from 'react-icons/pi';

const AddNewImage = () => {
    return (
        <div className="flex justify-center items-center p-5 border border-dashed rounded-md flex-col gap-2">
            <span>
                <PiImageSquareFill></PiImageSquareFill>
            </span>
            <p className="text-[60%] font-semibold text-gray-600">Add Images</p>
        </div>
    );
};

export default AddNewImage;
