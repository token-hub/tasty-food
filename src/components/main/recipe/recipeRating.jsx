import UserIcon from "../../../assets/icons/userIcon";
import LikeFillIcon from "../../../assets/icons/likeFillIcon";
import LikeIcon from "../../../assets/icons/likeIcon";
import { Rating } from "react-simple-star-rating";
import { currentUser } from "../../../lib/constants";

function RecipeRating({ rating }) {
    const isLiked = rating.likes.includes(currentUser.id);

    return (
        <div className="row mt-2">
            <hr className="mt-3" />
            <div className="col-2 col-md-2 col-lg-1">
                <div className="d-flex justify-content-center">
                    <UserIcon className="text-muted" height="32" width="32" />
                </div>
            </div>
            <div className="col-9 col-md-9 col-lg-8 p-0">
                <div className="d-flex flex-column h-100">
                    <p className="fs-7 text-dark mb-0">{rating.rater.name}</p>
                    <p className="fs-7 text-muted mb-0">{rating.createdAt}</p>
                    <Rating className="text-primary" readonly initialValue={rating.rating} />
                    <p className="fs-7 text-muted mb-0">{rating.comment}</p>
                    <div className="d-flex align-items-center mt-2">
                        <button className="btn d-flex align-items-center p-0 border-0">
                            {isLiked ? <LikeFillIcon className="text-primary" /> : <LikeIcon />}
                            <p className="fs-7 text-muted mb-0 ms-1">Helpful ?</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeRating;
