import { useRef, useState } from 'react';
import UpArrowIcon from '../../../assets/icons/UpArrowIcon';
import XIcon from '../../../assets/icons/xIcon';

function CreateModalUploadImage({ recipe, onChange }) {
    const defaultImage = 'https://placehold.co/200x200?font=roboto&text=Recipe';

    const uploadRef = useRef();
    const [recipeImage, setRecipeImage] = useState(recipe?.image?.link ?? defaultImage);

    function handleUploadClick() {
        uploadRef.current.click();
    }

    function handleUpload(e) {
        const file = uploadRef.current.files[0];

        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setRecipeImage(fileReader.result);
            };

            fileReader.readAsDataURL(file);
        }

        onChange(e);
    }

    function handleReset() {
        uploadRef.current.value = null;
        setRecipeImage(null);
    }

    return (
        <>
            <div className="mb-3 d-flex justify-content-center">
                <div className="position-relative d-inline-flex ">
                    <img
                        key={recipeImage}
                        height="200"
                        width="200"
                        src={recipeImage}
                        alt={recipe.name ?? 'image of new recipe'}
                        className=" rounded-circle"
                        // role="button"
                        // onClick={handleUploadClick}
                    />

                    {/* {recipeImage == defaultImage ? (
                        <div
                            className="position-absolute bottom-10 end-10 bg-light rounded-circle"
                            role="button"
                            onClick={handleUploadClick}
                        >
                            <UpArrowIcon height="28" width="28" className="text-muted" />
                        </div>
                    ) : (
                        <div
                            className="position-absolute top-10 end-10 bg-light border-dark rounded-circle"
                            role="button"
                            onClick={handleReset}
                        >
                            <XIcon height="28" width="28" className="text-secondary p-1" />
                        </div>
                    )} */}
                </div>
            </div>
            <div className="invisible" style={{ height: 0 }}>
                <label htmlFor="imageFile" className="form-label">
                    Upload Image of the recipe
                </label>
                <input
                    ref={uploadRef}
                    onChange={handleUpload}
                    className="form-control"
                    type="file"
                    id="imageFile"
                    name="image"
                    accept="image/png, image/gif, image/jpeg"
                />
            </div>
        </>
    );
}

export default CreateModalUploadImage;
