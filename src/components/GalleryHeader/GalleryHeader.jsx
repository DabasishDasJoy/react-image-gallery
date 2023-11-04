import React from 'react';

const GalleryHeader = ({ checkedCount, setImages }) => {
    const toggleCheckAll = (checkedCount) => {
        let checked = false;
        if (!checkedCount) checked = true;

        setImages((prevImages) =>
            prevImages.map((image) => {
                return { ...image, checked: checked };
            })
        );
    };

    const deleteFiles = () => {
        setImages((prevImages) => prevImages.filter((image) => !image.checked));
    };

    return (
        <div className="flex justify-between border-b-[2px] border-gray-200 px-5 py-2">
            <div className="flex space-x-2">
                <input
                    type="checkbox"
                    checked={checkedCount}
                    onClick={() => toggleCheckAll(checkedCount)}
                ></input>
                <span className="font-medium text-gray-800">
                    {checkedCount} Files Selected
                </span>
            </div>
            <button
                className="text-red-500 font-medium text-sm"
                onClick={deleteFiles}
            >
                Delete Files
            </button>
        </div>
    );
};

export default GalleryHeader;
