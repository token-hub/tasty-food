function NameAndDiscription({ recipe, onChange }) {
    return (
        <>
            <div className="form-floating">
                <input
                    type="text"
                    onChange={onChange}
                    defaultValue={recipe.name}
                    className="form-control mb-3"
                    id="name"
                    placeholder="name"
                    name="name"
                />
                <label htmlFor="name">Recipe name</label>
            </div>

            <div className="form-floating">
                <textarea
                    onChange={onChange}
                    className="form-control mb-3"
                    style={{ height: "10rem" }}
                    placeholder="Leave a comment here"
                    id="desciption"
                    name="description"
                    defaultValue={recipe.description}
                />
                <label htmlFor="desciption">Description</label>
            </div>
        </>
    );
}

export default NameAndDiscription;
