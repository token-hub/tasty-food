function FooterIcon({ text, Icon }) {
    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
            <Icon className="text-primary" height="20" width="20" />
            <span className="small-text">{text}</span>
        </div>
    );
}

export default FooterIcon;
