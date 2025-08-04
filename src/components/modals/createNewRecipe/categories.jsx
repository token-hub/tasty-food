function Categories() {
    return (
        <>
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
        </>
    );
}

export default Categories;
