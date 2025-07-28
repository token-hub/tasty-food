import HomeIcon from "../assets/icons/homeIcon";
import RecipeIcon from "../assets/icons/recipeIcon";
import ArchiveIcon from "../assets/icons/archiveIcon";
import NotificationIcon from "../assets/icons/notificationIcon";
import UserIcon from "../assets/icons/userIcon";
import FooterIcon from "../components/footer/footerIcon";

function MobileFooter() {
    return (
        <nav className="navbar fixed-bottom navbar-light bg-light border-top">
            <div className="container-fluid">
                <div className="d-flex justify-content-evenly w-100">
                    <FooterIcon to="/" text="Home" Icon={HomeIcon} />
                    <FooterIcon to="/me/myRecipes" text="Recipes" Icon={RecipeIcon} />
                    <FooterIcon to="/me/archives" text="Archives" Icon={ArchiveIcon} />
                    <FooterIcon to="/me/notifications" text="Notifications" Icon={NotificationIcon} />
                    <FooterIcon to="/me" text="Me" Icon={UserIcon} />
                </div>
            </div>
        </nav>
    );
}

export default MobileFooter;
