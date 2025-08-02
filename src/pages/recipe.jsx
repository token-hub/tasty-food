import RecipeHeaders from "../components/main/recipe/recipeHeaders";
import RecipeIngredients from "../components/main/recipe/recipeIngredients";
import RecipeInstructions from "../components/main/recipe/recipeInstructions";
import { sampleRecipes } from "../lib/constants";

function Recipe() {
    const recipe = sampleRecipes[0];

    return (
        <div className="container">
            <RecipeHeaders recipe={recipe} />
            <hr />
            <RecipeIngredients recipe={recipe} />
            <hr />
            <RecipeInstructions recipe={recipe} />
            <hr />
        </div>
    );
}

export default Recipe;
