import { currentUser, TABS } from "../../../lib/constants";
import { Link } from "react-router";

function RecipeTabs({ activeTab = "ratings", handleTabs, recipeAuthorId }) {
    const isAuthor = currentUser.id === recipeAuthorId;
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link onClick={() => handleTabs(TABS[0])} className={`nav-link ${activeTab === "ratings" && "active"}`} aria-current="page">
                        Recipe Ratings
                    </Link>
                </li>

                {isAuthor && (
                    <li className="nav-item">
                        <Link onClick={() => handleTabs(TABS[1])} className={`nav-link ${activeTab === "reports" && "active"}`}>
                            Reports
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default RecipeTabs;
