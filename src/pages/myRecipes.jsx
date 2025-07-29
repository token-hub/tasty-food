import Recipe from "../components/main/recipe";

const sampleRecipes = [
    {
        name: "Sinigang na baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/Ginisang-munggo-with-squash-in-a-pot-257x257.jpg"
    },
    {
        name: "Sinigang na baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/Ginisang-munggo-with-squash-in-a-pot-257x257.jpg"
    },
    {
        name: "Sinigang na baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/fried-pork-recipe-257x257.jpg"
    },
    {
        name: "Sinigang na baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/fried-pork-recipe-257x257.jpg"
    },
    {
        name: "Sinigang na baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/Vietnamese-Fried-Rice-Recipe-with-Sausage-257x257.jpg"
    },
    {
        name: "Sinigang na baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/Vietnamese-Fried-Rice-Recipe-with-Sausage-257x257.jpg"
    }
];

function MyRecipes() {
    return (
        <div className="container">
            <div className="row">
                {sampleRecipes &&
                    sampleRecipes.map(({ name, imageSource }) => {
                        return (
                            <div index={name} className=" col-md-6 col-xl-4 mb-3">
                                <Recipe imgSource={imageSource} name={name} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default MyRecipes;
