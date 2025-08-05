import Recipe from "../components/main/recipe/recipeClickable";
import Pagination from "../components/main/pagination";
import { sampleRecipes } from "../lib/constants";

function MyRecipes() {
    return (
        <div className="container">
            <div className="row">
                {sampleRecipes &&
                    sampleRecipes.map((recipe) => {
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

export default MyRecipes;
