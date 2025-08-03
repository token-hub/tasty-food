import { isAuthor } from "../../../lib/constants";
import { Link } from "react-router";

function RecipeTabs({ activeTab = "ratings", handleTabs }) {
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link onClick={handleTabs} className={`nav-link ${activeTab === "ratings" && "active"}`} aria-current="page">
                        Recipe Ratings
                    </Link>
                </li>

                {isAuthor && (
                    <li className="nav-item">
                        <Link onClick={handleTabs} className={`nav-link ${activeTab === "reports" && "active"}`}>
                            Reports
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default RecipeTabs;
