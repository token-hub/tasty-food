import { RECIPE_CATEGORIES } from '../../../lib/constants';

function Categories({ recipe, onChange }) {
    return (
        <>
            <span>Categories:</span>
            <div className="d-flex flex-wrap">
                {Object.values(RECIPE_CATEGORIES).map((category) => {
                    return (
                        <div className="my-2 mx-1">
                            <input
                                type="checkbox"
                                checked={recipe ? recipe?.categories?.includes(category) : false}
                                className="btn-check"
                                id={category}
                                onChange={onChange}
                                name="categories"
                                autoComplete="off"
                            />
                            <label className="btn btn-outline-primary" htmlFor={category}>
                                <span className="text-capitalize">{category}</span>
                            </label>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Categories;
