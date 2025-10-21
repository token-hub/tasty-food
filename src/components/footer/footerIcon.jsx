import { NavLink } from 'react-router';

function FooterIcon({ text, Icon, to }) {
    const isNotification = text.toLowerCase().includes('notification');
    return (
        <NavLink
            to={to}
            end
            className={({ isActive }) => {
                let classes = 'link-underline link-underline-opacity-0 ';

                if (isActive) {
                    classes += 'text-tertiary';
                } else {
                    classes += 'text-muted';
                }

                return classes;
            }}
        >
            <div className="position-relative d-flex flex-column align-items-center">
                <Icon height="20" width="20" />
                <span className="small-text ">{text}</span>
                {isNotification && <span className="notificationIcon_text">2</span>}
            </div>
        </NavLink>
    );
}

export default FooterIcon;
