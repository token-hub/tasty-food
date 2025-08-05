import { useRef } from "react";
import UpArrowIcon from "../../../assets/icons/UpArrowIcon";

function CreateModalUploadImage({ imageSrc = "https://placehold.co/200x200?font=roboto&text=Recipe", nameOfRecipe = "image of new recipe" }) {
    const uploadRef = useRef();

    function handleUpload() {
        uploadRef.current.click();
    }

    return (
        <>
            <div className="mb-3 d-flex justify-content-center">
                <div className="position-relative d-inline-flex ">
                    <img height="200" width="200" src={imageSrc} alt={nameOfRecipe} className=" rounded-circle" />
                    <div className="position-absolute bottom-10 end-10" role="button" onClick={handleUpload}>
                        <UpArrowIcon height="28" width="28" className="text-muted" />
                    </div>
                </div>
            </div>
            <div className="invisible" style={{ height: 0 }}>
                <label htmlFor="imageFile" className="form-label">
                    Upload Image of the recipe
                </label>
                <input ref={uploadRef} className="form-control" type="file" id="imageFile" accept="image/png, image/gif, image/jpeg" />
            </div>
        </>
    );
}

export default CreateModalUploadImage;
