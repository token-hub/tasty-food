import SidebarGroup from "./sidebarGroup";
import SidebarItem from "./sidebarItem";
import UserIcon from "../../assets/icons/userIcon";
import RecipeIcon from "../../assets/icons/recipeIcon";
import NotificationIcon from "../../assets/icons/notificationIcon";

function Sidebar() {
    return (
        <>
            <SidebarGroup>
                <SidebarItem isHeader={true}>
                    <UserIcon className="text-primary" />
                    <span className="ms-2"> My account</span>
                </SidebarItem>

                <SidebarItem isActive={true}>Profile</SidebarItem>
                <SidebarItem>Password</SidebarItem>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarItem isHeader={true}>
                    <RecipeIcon className="text-primary" />
                    <span className="ms-2">My Recipes</span>
                </SidebarItem>

                <SidebarItem>Archives</SidebarItem>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarItem isHeader={true}>
                    <NotificationIcon className="text-primary" />
                    <span className="ms-2">Notifications</span>
                </SidebarItem>
            </SidebarGroup>
        </>
    );
}

export default Sidebar;
