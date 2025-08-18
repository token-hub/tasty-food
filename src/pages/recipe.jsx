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

    const [activeTab, setActiveTab] = useState("ratings");
    const { recipe: currentRecipe, setCurrentRecipe } = useRecipeContext();
    useEffect(() => {
        if (!Object.values(currentRecipe).length) {
            const noFirstChar = pathname.slice(1);
            const recipeLink = noFirstChar.slice(noFirstChar.indexOf("/"));
            const selectedRecipe = sampleRecipes.find((res) => res.recipeLink === recipeLink);
            setCurrentRecipe(selectedRecipe);
        }
    }, [pathname, currentRecipe, setCurrentRecipe]);

    function handleActiveTab(tab) {
        setActiveTab(tab);
    }

    return (
        Object.values(currentRecipe).length > 0 && (
            <div className="container">
                <RecipeHeaders recipe={currentRecipe} />
                <hr />
                <RecipeIngredients recipe={currentRecipe} />
                <hr />
                <RecipeInstructions recipe={currentRecipe} />
                <hr />
                <RecipeTabs recipeAuthorId={currentRecipe.author.authorId} activeTab={activeTab} handleTabs={handleActiveTab} />
                {activeTab === TABS[0] ? (
                    <RecipeRatings ratings={currentRecipe.topFiveRecentRatings} recipeAuthorId={currentRecipe.author.authorId} />
                ) : (
                    <RecipeReports recipe={currentRecipe} />
                )}
            </div>
        )
    );
}

export default Recipe;
