import { useState, useEffect } from "react";
import RecipeHeaders from "../components/main/recipe/recipeHeaders";
import RecipeIngredients from "../components/main/recipe/recipeIngredients";
import RecipeInstructions from "../components/main/recipe/recipeInstructions";
import RecipeTabs from "../components/main/recipe/recipeTabs";
import RecipeRatings from "../components/main/recipe/recipeRatings";
import RecipeReports from "../components/main/recipe/recipeReports";
import { sampleRecipes, TABS } from "../lib/constants";
import { useRecipeContext } from "../providers/recipeProvider";
import { useLocation } from "react-router";

function Recipe() {
    const { pathname } = useLocation();
    const selectedRecipe = sampleRecipes.find((res) => res.recipeLink === pathname);
    const [activeTab, setActiveTab] = useState("ratings");
    const {
        recipe: { currentRecipe },
        setCurrentRecipe
    } = useRecipeContext();

    useEffect(() => {
        if (!currentRecipe) {
            setCurrentRecipe(selectedRecipe);
        }
    }, [currentRecipe, selectedRecipe, setCurrentRecipe]);

    function handleActiveTab(tab) {
        setActiveTab(tab);
    }
    return (
        <div className="container">
            <RecipeHeaders recipe={selectedRecipe} />
            <hr />
            <RecipeIngredients recipe={selectedRecipe} />
            <hr />
            <RecipeInstructions recipe={selectedRecipe} />
            <hr />
            <RecipeTabs recipeAuthorId={selectedRecipe.authorId} activeTab={activeTab} handleTabs={handleActiveTab} />
            {activeTab === TABS[0] ? (
                <RecipeRatings ratings={selectedRecipe.topFiveRecentRatings} recipeAuthorId={selectedRecipe.authorId} />
            ) : (
                <RecipeReports recipe={selectedRecipe} />
            )}
        </div>
    );
}

export default Recipe;
