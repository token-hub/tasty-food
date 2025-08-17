import DownChevronIcon from "../../assets/icons/downChevronIcon";
import { RECIPE_CATEGORIES } from "../../lib/constants";

function FilterMobile() {
    const categories = Object.values(RECIPE_CATEGORIES);
    return (
        <aside className="d-block d-md-none position-relative">
            <button
                className="btn btn-primary text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#categories"
                aria-expanded="false"
                aria-controls="categories"
            >
                <span className="me-2">Categories</span>
                <DownChevronIcon width="14" />
            </button>
            <div className="collapse mt-2" id="categories">
                <div className="card card-body">
                    <div className="row">
                        {categories.map((category) => (
                            <div className="col-6 p-1" key={category}>
                                <input type="checkbox" className="btn-check" id={category} autoComplete="off" />
                                <label className="btn btn-outline-primary fs-7  py-1 w-100 text-capitalize" htmlFor={category}>
                                    {category}
                                </label>
                            </div>
                        ))}
                        <div className="col-6 p-1">
                            <button className="btn w-100 btn-sm btn-gray-dark text-white">Reset</button>
                        </div>
                        <div className="col-6 p-1">
                            <button className="btn w-100 btn-sm btn-gray-dark text-white">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default FilterMobile;
