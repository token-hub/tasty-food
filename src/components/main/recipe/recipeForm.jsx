import { Rating } from "react-simple-star-rating";
import EditIcon from "../../../assets/icons/editIcon";
import LikeFillIcon from "../../../assets/icons/likeFillIcon";
import XIcon from "../../../assets/icons/xIcon";
import { useState } from "react";
import { useParams } from "react-router";
import { useUserContext } from "../../../providers/userProvider";
import { objectToFormData } from "../../../lib/utilities";
import { useCreateRating } from "../../../hooks/useCreateRating";
import { useQuery } from "@tanstack/react-query";
import { getRating } from "../../../queries/getRating";

const defaultRating = {
    recipeId: "",
    comment: "",
    rate: 0,
    rater: {
        raterId: "",
        name: ""
    },
    likes: []
};
function RecipeForm() {
    const { recipeId } = useParams();
    const { fetcher } = useCreateRating();
    const { user } = useUserContext();

    const { data } = useQuery({
        queryKey: ["rating"],
        queryFn: ({ signal }) => getRating({ signal, recipeId, userId: user.id }),
        enabled: Boolean(recipeId && recipeId)
    });

    const [rating, setRating] = useState(data?.details ?? defaultRating);
    const [isEditting, setIsEditting] = useState(false);
    const isLoading = false;

    const userHasData = !isLoading && data?.details;
    const disabled = userHasData && !isEditting;

    function handleRating(name, value) {
        setRating((prev) => ({ ...prev, [name]: value }));
    }

    function handleEdit() {
        setIsEditting(!isEditting);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newRating = {
            ...rating,
            recipeId,
            rater: {
                raterId: user.id,
                name: user.name
            }
        };

        fetcher.submit(objectToFormData(newRating), { action: "/:author/recipes/:recipeId", method: "POST" });
        setIsEditting();
    }

    return (
        <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="rating" className="form-label w-100 d-flex m-0">
                    <span className="flex-grow-1">Your rating for this recipe:</span>
                    {userHasData && (
                        <button type="button" onClick={handleEdit} className="btn p-1 mb-1 text-primary border-0 ms-auto">
                            {!isEditting ? <EditIcon /> : <XIcon />}
                        </button>
                    )}
                </label>
                <Rating readonly={disabled} onClick={(rate) => handleRating("rate", rate)} initialValue={rating ? rating.rate : 0} />
                <p className="m-0 text-muted fs-7 ms-2">{rating ? rating.createdAt : null}</p>
            </div>
            <div className="form-floating">
                <textarea
                    className={`form-control ${disabled ? "" : "bg-light"}`}
                    placeholder="Leave a comment here ..."
                    id="floatingTextarea2"
                    style={{ height: 100 }}
                    disabled={disabled}
                    onChange={(e) => handleRating("comment", e.target.value)}
                    defaultValue={rating ? rating.comment : ""}
                />
            </div>

            <div className="d-flex align-items-center mt-2">
                {rating ? (
                    <button className="btn d-flex align-items-center p-0 border-0 ms-2">
                        <div className="d-flex">
                            <LikeFillIcon className="text-primary" />
                            <span className="text-muted fs-7 ms-1">{rating?.likes?.length || 0}</span>
                        </div>
                    </button>
                ) : null}

                {!disabled && (
                    <button type="submit" className="btn btn-primary text-white mt-3 ms-auto">
                        Submit
                    </button>
                )}
            </div>
        </form>
    );
}

export default RecipeForm;
