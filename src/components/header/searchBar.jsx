import SearchIcon from "../../assets/icons/searchIcon";

function SearchBar({ inputWidth = "vw-40", maxWidth = "mw-65" }) {
    return (
        <form className="d-flex justify-content-center w-100  " role="search">
            <input
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
