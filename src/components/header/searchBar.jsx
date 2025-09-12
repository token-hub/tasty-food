import { useRef } from "react";
import SearchIcon from "../../assets/icons/searchIcon";
import { useRecipeFilterContext } from "../../providers/recipeFilterProvider";
import { useNavigate } from "react-router";

function SearchBar({ inputWidth = "vw-40", maxWidth = "mw-65" }) {
    const searchRef = useRef();
    const { setQuery } = useRecipeFilterContext();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setQuery(searchRef.current.value);
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex justify-content-center w-100  " role="search">
            <input
                ref={searchRef}
                className={`form-control me-2 ${inputWidth} ${maxWidth} text-muted`}
                type="search"
                placeholder="Search"
                aria-label="Search recipes"
            />

            <button className="btn ms-n6 no-btn-outline search-btn">
                <SearchIcon className="text-primary " height="20" width="20" />
            </button>
        </form>
    );
}

export default SearchBar;
