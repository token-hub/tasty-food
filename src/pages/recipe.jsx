import { useState } from "react";
import RecipeHeaders from "../components/main/recipe/recipeHeaders";
import RecipeIngredients from "../components/main/recipe/recipeIngredients";
import RecipeInstructions from "../components/main/recipe/recipeInstructions";
import RecipeTabs from "../components/main/recipe/tabs/recipeTabs";
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
            <RecipeTabs activeTab={activeTab} handleTabs={handleActiveTab} />
        </div>
    );
}

export default Recipe;
