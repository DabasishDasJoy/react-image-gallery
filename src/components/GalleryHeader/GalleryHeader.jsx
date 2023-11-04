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
        <div className="flex justify-between border-b-[1px] border-gray-300 p-2">
            <div className="flex space-x-2">
                <input
                    type="checkbox"
                    checked={checkedCount}
                    onClick={() => toggleCheckAll(checkedCount)}
                ></input>
                <span>{checkedCount} Files Selected</span>
            </div>
            <button className="text-red-600" onClick={deleteFiles}>
                Delete Files
            </button>
        </div>
    );
};

export default GalleryHeader;
