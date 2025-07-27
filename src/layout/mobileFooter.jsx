import HomeIcon from "../assets/icons/homeIcon";
import RecipeIcon from "../assets/icons/recipeIcon";
import ArchiveIcon from "../assets/icons/archiveIcon";
import NotificationIcon from "../assets/icons/notificationIcon";
import UserIcon from "../assets/icons/userIcon";
import FooterIcon from "../components/footer/footerIcon";

function MobileFooter() {
    return (
        <nav className="navbar fixed-bottom navbar-light border-top">
            <div className="container-fluid">
                <div className="d-flex justify-content-evenly w-100">
                    <FooterIcon text="Home" Icon={HomeIcon} />
                    <FooterIcon text="Recipes" Icon={RecipeIcon} />
                    <FooterIcon text="Archives" Icon={ArchiveIcon} />
                    <FooterIcon text="Notifications" Icon={NotificationIcon} />
                    <FooterIcon text="Me" Icon={UserIcon} />
                </div>
            </div>
        </nav>
    );
}

export default MobileFooter;
