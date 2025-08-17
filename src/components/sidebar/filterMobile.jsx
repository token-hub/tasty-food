import { useState, useRef } from "react";
import DownChevronIcon from "../../assets/icons/downChevronIcon";
import { RECIPE_CATEGORIES } from "../../lib/constants";

function FilterMobile() {
    const categoriesRef = useRef();
    const recipeCatogories = Object.values(RECIPE_CATEGORIES).map((category) => {
        return {
            name: category,
            isChecked: false
        };
    });
    const [categories, setCategories] = useState(recipeCatogories);

    function handleCategoryClick(selectedCategory) {
        setCategories((categories) => {
            return categories.map((category) => {
                if (category.name === selectedCategory) {
                    return { ...category, isChecked: true };
                } else {
                    return category;
                }
            });
        });
    }

    function handleReset() {
        setCategories((categories) => {
            return categories.map((category) => {
                return {
                    ...category,
                    isChecked: false
                };
            });
        });
    }

    function handleApply() {
        // do something here
        // add selected filter to the localstorage and fetch it by default

        categoriesRef.current.click();
    }

    return (
        <aside className="d-block d-md-none position-relative">
            <button
                ref={categoriesRef}
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
                        {categories.map(({ name, isChecked }) => (
                            <div className="col-6 p-1" key={name}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCategoryClick(name)}
                                    checked={isChecked}
                                    className="btn-check"
                                    id={name}
                                    autoComplete="off"
                                />
                                <label className="btn btn-outline-primary fs-7  py-1 w-100 text-capitalize" htmlFor={name}>
                                    {name}
                                </label>
                            </div>
                        ))}
                        <div className="col-6 p-1">
                            <button className="btn w-100 btn-sm btn-gray-dark text-white" onClick={handleReset}>
                                Reset
                            </button>
                        </div>
                        <div className="col-6 p-1">
                            <button className="btn w-100 btn-sm btn-gray-dark text-white" onClick={handleApply}>
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default FilterMobile;
