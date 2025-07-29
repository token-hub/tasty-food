import SidebarGroup from "./sidebarGroup";
import SidebarItem from "./sidebarItem";
import UserIcon from "../../assets/icons/userIcon";
import RecipeIcon from "../../assets/icons/recipeIcon";
import NotificationIcon from "../../assets/icons/notificationIcon";

function Sidebar() {
    return (
        <aside className="py-2">
            <SidebarGroup>
                <SidebarItem isHeader={true}>
                    <UserIcon />
                    <span className="ms-2"> My account</span>
                </SidebarItem>

                <SidebarItem to="/me/profile">Profile</SidebarItem>
                <SidebarItem to="/me/password">Password</SidebarItem>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarItem isHeader={true} to="/me/myRecipes">
                    <RecipeIcon />
                    <span className="ms-2">My Recipes</span>
                </SidebarItem>

                <SidebarItem to="/me/archives">Archives</SidebarItem>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarItem isHeader={true} to="/me/notifications">
                    <NotificationIcon />
                    <span className="ms-2">Notifications</span>
                </SidebarItem>
            </SidebarGroup>
        </aside>
    );
}

export default Sidebar;
