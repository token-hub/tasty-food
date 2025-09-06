import { useState, useRef } from "react";

function CreateModalUploadVideo({ recipe, onChange }) {
    const [video, setVideo] = useState(recipe?.video?.link ?? null);
    const videoInputRef = useRef();

    function handleUpload(e) {
        const file = videoInputRef.current.files[0];

        if (file && file.type.startsWith("video/")) {
            const url = URL.createObjectURL(file);
            setVideo(url);
        }

        onChange(e);
    }

    return (
        <div className="my-3">
            <label htmlFor="formFile" className="form-label">
                Upload video instruction
            </label>
            <input ref={videoInputRef} onChange={handleUpload} className="form-control" name="video" type="file" accept="video/*" id="formFile" />

            {video && (
                <div className="w-100 vh-50 my-lg-3">
                    <video src={video} id="videoPreview" controls className="w-100"></video>
                </div>
            )}
        </div>
    );
}

export default CreateModalUploadVideo;
