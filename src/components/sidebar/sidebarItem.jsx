function SidebarItem({ children, isActive, isHeader }) {
    let className = `list-group-item border-0`;
    let headerClass = " border-bottom fs-6 fw-bold d-flex align-items-center";
    let active = " text-tertiary";

    if (isHeader) {
        className += headerClass;
    } else {
        className += " ms-4";
    }

    if (isActive) {
        className += active;
    }

    return <li className={className}>{children}</li>;
}

export default SidebarItem;
