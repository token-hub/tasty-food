import { NavLink } from 'react-router';

function SidebarItem({ children, isHeader, to }) {
    let className = `list-group-item border-0 text-muted`;
    let headerClass = ' border-bottom fs-6 fw-bold d-flex align-items-center';

    if (isHeader) {
        className += headerClass;
    } else {
        className += ' ms-4';
    }

    return (
        <li className={className}>
            {to ? (
                <NavLink
                    to={to}
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
                    {children}
                </NavLink>
            ) : (
                <>{children}</>
            )}
        </li>
    );
}

export default SidebarItem;
