function NameAndDiscription({ recipe }) {
    return (
        <>
            <div className="form-floating">
                <input type="text" defaultValue={recipe.name} className="form-control mb-3" id="name" placeholder="name" />
                <label htmlFor="name">Recipe name</label>
            </div>

            <div className="form-floating">
                <textarea
                    className="form-control mb-3"
                    style={{ height: "10rem" }}
                    placeholder="Leave a comment here"
                    id="desciption"
                    defaultValue={recipe.description}
                />
                <label htmlFor="desciption">Description</label>
            </div>
        </>
    );
}

export default NameAndDiscription;
