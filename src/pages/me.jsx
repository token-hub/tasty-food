import SubmenuLink from "../components/main/submenuLink";

function Me() {
    return (
        <div className="d-md-none">
            <SubmenuLink to="profile" text="profile" />
            <SubmenuLink to="password" text="password" />
        </div>
    );
}

export default Me;
