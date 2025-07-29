import { NavLink } from "react-router";

function FooterIcon({ text, Icon, to }) {
    return (
        <NavLink
            to={to}
            end
            className={({ isActive }) => {
                let classes = "link-underline link-underline-opacity-0 d-flex justify-content-center flex-column align-items-center ";

                if (isActive) {
                    classes += "text-tertiary";
                } else {
                    classes += "text-muted";
                }

                return classes;
            }}
        >
            <Icon height="20" width="20" />
            <span className="small-text ">{text}</span>
        </NavLink>
    );
}

export default FooterIcon;
