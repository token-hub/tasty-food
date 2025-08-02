function RecipeTabs({ activeTab = "reports" }) {
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === "ratings" && "active"}`} aria-current="page" href="#">
                        Recipe Ratings
                    </a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === "reports" && "active"}`} href="#">
                        Reports
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default RecipeTabs;
