import FilterIcon from "../../assets/icons/filterIcon";
import { RECIPE_CATEGORIES } from "../../lib/constants";

function Filter() {
    const categories = Object.values(RECIPE_CATEGORIES);
    return (
        <aside className="d-none d-md-block">
            <div className="d-flex align-items-center py-2">
                <FilterIcon />
                <h6 className="m-0 ms-1 fw-semibold">Search Filter</h6>
            </div>
            {categories.map((category) => (
                <div className="form-check my-1" key={category}>
                    <input className="form-check-input border-gray-dark" type="checkbox" defaultValue="" id="checkDefault" />
                    <label className="form-check-label fs-7 text-capitalize" htmlFor="checkDefault">
                        {category}
                    </label>
                </div>
            ))}
        </aside>
    );
}

export default Filter;
