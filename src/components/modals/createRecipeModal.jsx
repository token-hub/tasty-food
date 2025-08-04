import XIcon from "../../assets/icons/xIcon";

function CreateRecipeModal() {
    return (
        <>
            <div className="modal modal-lg fade" id="createRecipe" tabIndex={-1} aria-labelledby="createRecipe" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Create new Recipe
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form className="form-floating">
                                <div className="form-floating">
                                    <input type="text" className="form-control mb-3" id="name" placeholder="name" />
                                    <label htmlFor="name">Recipe name</label>
                                </div>

                                <div className="form-floating">
                                    <textarea
                                        className="form-control mb-3"
                                        style={{ height: "10rem" }}
                                        placeholder="Leave a comment here"
                                        id="desciption"
                                    />
                                    <label htmlFor="desciption">Description</label>
                                </div>
                                <span>Prepation Time:</span>
                                <div className="d-flex w-100 my-2">
                                    <div className="form-floating w-100">
                                        <input type="text" className="form-control mb-3" id="prepHours" placeholder="name" />
                                        <label htmlFor="prepHours">hour/s</label>
                                    </div>
                                    <div className="form-floating w-100">
                                        <input type="text" className="form-control mb-3" id="prepMinutes" placeholder="name" />
                                        <label htmlFor="prepMinutes">minutes/s</label>
                                    </div>
                                </div>

                                <span>Cook Time:</span>
                                <div className="d-flex w-100 my-2">
                                    <div className="form-floating w-100">
                                        <input type="text" className="form-control mb-3" id="cookTime" placeholder="name" />
                                        <label htmlFor="cookTime">hour/s</label>
                                    </div>
                                    <div className="form-floating w-100">
                                        <input type="text" className="form-control mb-3" id="cookMinutes" placeholder="name" />
                                        <label htmlFor="cookMinutes">minutes/s</label>
                                    </div>
                                </div>

                                <span>Categories:</span>
                                <div className="btn-group ms-2 d-inline-flex" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                                    <label className="btn btn-outline-primary" htmlFor="btncheck1">
                                        Chicken
                                    </label>
                                    <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                                    <label className="btn btn-outline-primary" htmlFor="btncheck2">
                                        Pork
                                    </label>
                                    <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                                    <label className="btn btn-outline-primary" htmlFor="btncheck3">
                                        Beef
                                    </label>
                                    <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" />
                                    <label className="btn btn-outline-primary" htmlFor="btncheck4">
                                        Fish
                                    </label>
                                    <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off" />
                                    <label className="btn btn-outline-primary" htmlFor="btncheck5">
                                        Vegetable
                                    </label>
                                </div>

                                <span className="d-block mb-3 mt-4">Ingredients:</span>

                                <div className="d-flex w-100 align-items-center h-100">
                                    <div className="form-floating w-100">
                                        <input type="number" min="0" className="form-control mb-3" id="quantity" placeholder="1" />
                                        <label htmlFor="quantity">Quantity</label>
                                    </div>
                                    <div className="form-floating w-100">
                                        <input type="text" className="form-control mb-3" id="unit" placeholder="1" />
                                        <label htmlFor="unit">Unit</label>
                                    </div>
                                    <div className="form-floating w-100">
                                        <input type="text" className="form-control mb-3" id="ingredient" placeholder="1" />
                                        <label htmlFor="ingredient">Ingredient</label>
                                    </div>
                                    <button className="btn text-secondary mb-3">
                                        <XIcon />
                                    </button>
                                </div>
                                <button type="button" className="btn border-0">
                                    <span className="fs-7 text-muted my-3">Add more Ingredients ?</span>
                                </button>

                                <span className="d-block mb-3 mt-4">Instructions:</span>
                                <div className="d-flex">
                                    <div className="form-floating w-100">
                                        <input type="text" className="form-control mb-3" id="unit" placeholder="1" />
                                        <label htmlFor="unit">{`instruction #1`}</label>
                                    </div>
                                    <button className="btn text-secondary mb-3">
                                        <XIcon />
                                    </button>
                                </div>
                                <button type="button" className="btn border-0">
                                    <span className="fs-7 text-muted my-3">Add more Instruction ?</span>
                                </button>

                                <div className="my-3">
                                    <label htmlFor="formFile" className="form-label">
                                        Upload Video Instructions
                                    </label>
                                    <input className="form-control" type="file" id="formFile" />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="formFile" className="form-label">
                                        Upload Image of the recipe
                                    </label>
                                    <input className="form-control" type="file" id="formFile" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateRecipeModal;
