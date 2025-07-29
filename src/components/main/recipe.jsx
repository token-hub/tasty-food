import { Link } from "react-router";

function Recipe({ imgSource, name, recipeLink }) {
    return (
        <div className="card recipe">
            <Link to={recipeLink} className="text-muted link-underline link-underline-opacity-0">
                <div className="recipe_img">
                    <img src={imgSource} className="card-img-top " alt="test image" />
                </div>
                <div className="card-body">
                    <h5 className="card-title mb-0">{name}</h5>
                </div>
            </Link>
        </div>
    );
}

export default Recipe;
