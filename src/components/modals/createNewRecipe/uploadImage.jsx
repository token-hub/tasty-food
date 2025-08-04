function CreateModalUploadImage() {
    return (
        <div className="my-3 invisible" style={{ height: 0 }}>
            <label htmlFor="formFile" className="form-label">
                Upload Image of the recipe
            </label>
            <input className="form-control" type="file" id="formFile" />
        </div>
    );
}

export default CreateModalUploadImage;
