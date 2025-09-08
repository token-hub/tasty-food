import { Link, useLocation } from "react-router";
import { removeSpacesFromText } from "../../../lib/utilities";
import { DEFAULT_IMAGE } from "../../../lib/constants";
import UnarchiveIcon from "../../../assets/icons/unarchiveIcon";

function Recipe({ recipe, isArchived = false }) {
    const { image, name } = recipe;
    const { pathname } = useLocation();
    const linkPreFix = pathname.includes("me") ? "me" : removeSpacesFromText(recipe.author.name);
    const recipeLinkToUse = `/${linkPreFix}/recipes/${recipe._id}`;
    const imageSource = image ?? DEFAULT_IMAGE;

    let classes = "card recipe bg-white shadow ";
    if (isArchived) {
        classes += "archived";
    }

    return (
        <div className={classes}>
            <Link to={recipeLinkToUse} className="text-muted link-underline link-underline-opacity-0">
                <div className="recipe_img">
                    <img src={imageSource} className="card-img-top " alt="test image" />
                </div>
                <div className="card-body">
                    <div className="row pe-2">
                        <div className="col-11">
                            <h5 className="card-title mb-3">{name}</h5>
                        </div>
                        <div className="col-1">
                            <button className="btn border-0 p-0">
                                <UnarchiveIcon className="text-primary" height="16" width="16" />
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Recipe;
