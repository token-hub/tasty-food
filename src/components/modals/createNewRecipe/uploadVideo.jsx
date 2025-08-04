function CreateModalUploadVideo() {
    return (
        <div className="my-3">
            <label htmlFor="formFile" className="form-label">
                Upload video instruction
            </label>
            <input className="form-control" type="file" id="formFile" />
        </div>
    );
}

export default CreateModalUploadVideo;
