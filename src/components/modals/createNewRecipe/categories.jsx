function Categories() {
    return (
        <>
            <span>Categories:</span>
            <div className="d-flex flex-wrap">
                <div className="my-2 mx-1">
                    <input type="checkbox" className="btn-check" id="chicken" autoComplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="chicken">
                        Chicken
                    </label>
                </div>
                <div className="my-2 mx-1">
                    <input type="checkbox" className="btn-check" id="Pork" autoComplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="Pork">
                        Pork
                    </label>
                </div>
                <div className="my-2 mx-1">
                    <input type="checkbox" className="btn-check" id="fish" autoComplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="fish">
                        Fish
                    </label>
                </div>
                <div className="my-2 mx-1">
                    <input type="checkbox" className="btn-check" id="beef" autoComplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="beef">
                        Beef
                    </label>
                </div>
                <div className="my-2 mx-1">
                    <input type="checkbox" className="btn-check" id="vegetable" autoComplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="vegetable">
                        Vegetable
                    </label>
                </div>
            </div>
        </>
    );
}

export default Categories;
