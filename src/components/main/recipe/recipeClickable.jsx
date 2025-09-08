import { Link, useLocation } from "react-router";
import { removeSpacesFromText } from "../../../lib/utilities";
import { DEFAULT_IMAGE } from "../../../lib/constants";

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
                    <h5 className="card-title mb-3">{name}</h5>
                </div>
            </Link>
        </div>
    );
}

export default Recipe;
