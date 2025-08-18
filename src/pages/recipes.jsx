import Recipe from "../components/main/recipe/recipeClickable";
import Pagination from "../components/main/pagination";
import { sampleRecipes } from "../lib/constants";
import { useParams } from "react-router";

function Recipes() {
    const params = useParams();
    const author = params?.author;
    const recipesOfTheAuthor = sampleRecipes; // temporary
    const recipes = author ? recipesOfTheAuthor : sampleRecipes;
    return (
        <div className="container">
            <div className="row">
                {recipes &&
                    recipes.map((recipe) => {
                        return (
                            <div key={recipe.name} className=" col-md-6 col-xl-4 mb-3">
                                <Recipe recipe={recipe} />
                            </div>
                        );
                    })}
            </div>
            <Pagination pageSize={6} total={12} />
        </div>
    );
}

export default Recipes;
