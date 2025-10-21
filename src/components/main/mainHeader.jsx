function MainHeader({ text, button }) {
    return (
        <div className={`${text ? 'border-bottom  mb-3' : ''}`}>
            {text && (
                <>
                    <div className="d-flex align-items-center px-3">
                        <h5 className="text-muted fw-bold flex-grow-1">{text}</h5>
                        {button}
                    </div>
                </>
            )}
        </div>
    );
}

export default MainHeader;
