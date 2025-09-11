import FilterIcon from "../../assets/icons/filterIcon";
import { RECIPE_CATEGORIES } from "../../lib/constants";
import { useRecipeFilterContext } from "../../providers/recipeFilterProvider";

function Filter() {
    const categories = Object.values(RECIPE_CATEGORIES);
    const { filter, handlefilter } = useRecipeFilterContext();

    function handleChange(e) {
        const id = e.target.id;
        handlefilter(id);
    }
    console.log(filter);
    return (
        <aside className="d-none d-md-block">
            <div className="d-flex align-items-center py-2">
                <FilterIcon />
                <h6 className="m-0 ms-1 fw-semibold">Search Filter</h6>
            </div>
            {categories.map((category) => (
                <div className="form-check my-1" key={category}>
                    <input
                        className="form-check-input border-gray-dark"
                        type="checkbox"
                        defaultValue=""
                        id={category}
                        checked={filter.includes(category) ? true : false}
                        onChange={handleChange}
                    />
                    <label className="form-check-label fs-7 text-capitalize" htmlFor="checkDefault">
                        {category}
                    </label>
                </div>
            ))}
        </aside>
    );
}

export default Filter;
