import { Link } from "react-router";

function Recipe({ imgSource, name }) {
    return (
        <div className="card recipe">
            <div className="recipe_img">
                <img src={imgSource} className="card-img-top " alt="test image" />
            </div>
            <div className="card-body">
                <Link to="" className="text-muted link-underline link-underline-opacity-0">
                    <h5 className="card-title mb-0">{name}</h5>
                </Link>
            </div>
        </div>
    );
}

export default Recipe;
