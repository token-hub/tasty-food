import { useState } from "react";
import RecipeHeaders from "../components/main/recipe/recipeHeaders";
import RecipeIngredients from "../components/main/recipe/recipeIngredients";
import RecipeInstructions from "../components/main/recipe/recipeInstructions";
import RecipeTabs from "../components/main/recipe/recipeTabs";
import RecipeRatings from "../components/main/recipe/recipeRatings";
import RecipeReports from "../components/main/recipe/recipeReports";
import { TABS } from "../lib/constants";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../queries/getRecipe";
function Recipe() {
    const [activeTab, setActiveTab] = useState("ratings");
    const { recipeId } = useParams();
    const { data } = useQuery({
        queryKey: ["recipes", "single"],
        queryFn: ({ signal }) => getRecipe({ signal, recipeId })
    });

    function handleActiveTab(tab) {
        setActiveTab(tab);
    }

    const currentRecipe = data?.details;
    return (
        currentRecipe &&
        Object.values(currentRecipe).length > 0 && (
            <div className="container">
                <RecipeHeaders recipe={currentRecipe} />
                <hr />
                <RecipeIngredients recipe={currentRecipe} />
                <hr />
                <RecipeInstructions recipe={currentRecipe} />
                <hr />
                <RecipeTabs recipeAuthorId={currentRecipe.author.userId} activeTab={activeTab} handleTabs={handleActiveTab} />
                {activeTab === TABS[0] ? (
                    <RecipeRatings recipe={currentRecipe} ratings={currentRecipe.topFiveRecentRatings} recipeAuthorId={currentRecipe.author.userId} />
                ) : (
                    <RecipeReports recipe={currentRecipe} />
                )}
            </div>
        )
    );
}

export default Recipe;
