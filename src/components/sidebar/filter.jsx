import FilterIcon from '../../assets/icons/filterIcon';
import { RECIPE_CATEGORIES } from '../../lib/constants';
import { useRecipeStore } from '../../stores/useRecipeStore';

function Filter() {
    const categories = Object.values(RECIPE_CATEGORIES);
    const filters = useRecipeStore((state) => state.filters);
    const handleFilters = useRecipeStore((state) => state.handleFilters);

    function handleChange(e) {
        const id = e.target.id;
        handleFilters(id);
    }

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
                        checked={filters.includes(category) ? true : false}
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
