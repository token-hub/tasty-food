function Timers({ recipe }) {
    return (
        <>
            <span>Prepation Time:</span>
            <div className="d-flex w-100 my-2">
                <div className="form-floating w-100">
                    <input
                        type="number"
                        className="form-control mb-3"
                        id="prepHours"
                        defaultValue={recipe ? recipe.prepTime?.hours : 0}
                        name="prepHours"
                        min="0"
                        placeholder="name"
                    />
                    <label htmlFor="prepHours">hour/s</label>
                </div>
                <div className="form-floating w-100">
                    <input
                        type="number"
                        className="form-control mb-3"
                        id="prepMinutes"
                        defaultValue={recipe ? recipe.prepTime?.minutes : 0}
                        name="prepMinutes"
                        min="0"
                        max="60"
                        placeholder="name"
                    />
                    <label htmlFor="prepMinutes">minutes/s</label>
                </div>
            </div>

            <span>Cook Time:</span>
            <div className="d-flex w-100 my-2">
                <div className="form-floating w-100">
                    <input
                        type="number"
                        className="form-control mb-3"
                        id="cookTime"
                        defaultValue={recipe ? recipe.cookTime?.hours : 0}
                        name="cookHours"
                        min="0"
                        placeholder="name"
                    />
                    <label htmlFor="cookTime">hour/s</label>
                </div>
                <div className="form-floating w-100">
                    <input
                        type="number"
                        className="form-control mb-3"
                        id="cookMinutes"
                        defaultValue={recipe ? recipe.cookTime?.minutes : 0}
                        name="cookMinutes"
                        min="0"
                        max="60"
                        placeholder="name"
                    />
                    <label htmlFor="cookMinutes">minutes/s</label>
                </div>
            </div>
        </>
    );
}

export default Timers;
