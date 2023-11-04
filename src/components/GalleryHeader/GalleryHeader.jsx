import React, { useEffect, useState } from 'react';

const GalleryHeader = ({ checkedCount, setImages, setDisSelectedAll }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckAll = () => {
        let checked = false;
        if (!checkedCount) checked = true;

        setImages((prevImages) =>
            prevImages.map((image) => {
                return { ...image, checked: checked };
            })
        );

        setDisSelectedAll(true);
    };

    useEffect(() => {
        if (checkedCount > 0) {
            setIsChecked((isChecked) => (isChecked = true));
            setDisSelectedAll(false);
        } else {
            setIsChecked((isChecked) => (isChecked = false));
        }
    }, [checkedCount, setDisSelectedAll]);

    const deleteFiles = () => {
        setImages((prevImages) => prevImages.filter((image) => !image.checked));
    };

    return (
        <div className="flex justify-between border-b-[2px] border-gray-200 px-5 py-2">
            <div className="flex space-x-2">
                {checkedCount > 0 && (
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={toggleCheckAll}
                    ></input>
                )}

                <span className="font-medium text-gray-800">
                    {checkedCount
                        ? `${checkedCount} ${
                              checkedCount > 1 ? 'Files' : 'File'
                          }
                    Selected `
                        : 'Gallery'}
                </span>
            </div>
            {checkedCount > 0 && (
                <button
                    className="text-red-500 font-medium text-sm hover:underline"
                    onClick={deleteFiles}
                >
                    Delete Files
                </button>
            )}
        </div>
    );
};

export default GalleryHeader;
