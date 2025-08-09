import RightIcon from "../../assets/icons/rightIcon";

function Submenu({ clickHandler, text = "" }) {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center border-bottom mb-2">
                <span className="text-muted text-capitalize"> {text}</span>
                <button onClick={clickHandler} className="btn text-tertiary border-0">
                    <RightIcon height="20" width="20" />
                </button>
            </div>
        </>
    );
}

export default Submenu;
