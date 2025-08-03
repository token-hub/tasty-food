import { useState } from "react";
import RecipeHeaders from "../components/main/recipe/recipeHeaders";
import RecipeIngredients from "../components/main/recipe/recipeIngredients";
import RecipeInstructions from "../components/main/recipe/recipeInstructions";
import RecipeTabs from "../components/main/recipe/recipeTabs";
import RecipeRatings from "../components/main/recipe/recipeRatings";
import RecipeReports from "../components/main/recipe/recipeReports";
import { sampleRecipes, TABS } from "../lib/constants";

function Recipe() {
    const recipe = sampleRecipes[0];
    const [activeTab, setActiveTab] = useState("ratings");

    function handleActiveTab() {
        if (activeTab === TABS[0]) {
            setActiveTab(TABS[1]);
        } else {
            setActiveTab(TABS[0]);
        }
    }
    return (
        <div className="container">
            <RecipeHeaders recipe={recipe} />
            <hr />
            <RecipeIngredients recipe={recipe} />
            <hr />
            <RecipeInstructions recipe={recipe} />
            <hr />
            <RecipeTabs recipeAuthorId={recipe.authorId} activeTab={activeTab} handleTabs={handleActiveTab} />
            {activeTab === TABS[0] ? (
                <RecipeRatings ratings={recipe.topFiveRecentRatings} recipeAuthorId={recipe.authorId} />
            ) : (
                <RecipeReports recipe={recipe} />
            )}
        </div>
    );
}

export default Recipe;
