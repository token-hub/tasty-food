import { Link } from "react-router";
import { useRecipeContext } from "../../../providers/recipeProvider";

function Recipe({ recipe, isArchived = false }) {
    const { recipeLink, imageSource, name } = recipe;
    const { setCurrentRecipe } = useRecipeContext();

    let classes = "card recipe bg-white shadow ";
    if (isArchived) {
        classes += "archived";
    }

    function setRecipe() {
        setCurrentRecipe(recipe);
    }

    return (
        <div className={classes}>
            <Link to={recipeLink} onClick={setRecipe} className="text-muted link-underline link-underline-opacity-0">
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
