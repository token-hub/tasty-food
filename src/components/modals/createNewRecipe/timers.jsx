function Timers() {
    return (
        <>
            <span>Prepation Time:</span>
            <div className="d-flex w-100 my-2">
                <div className="form-floating w-100">
                    <input type="text" className="form-control mb-3" id="prepHours" placeholder="name" />
                    <label htmlFor="prepHours">hour/s</label>
                </div>
                <div className="form-floating w-100">
                    <input type="text" className="form-control mb-3" id="prepMinutes" placeholder="name" />
                    <label htmlFor="prepMinutes">minutes/s</label>
                </div>
            </div>

            <span>Cook Time:</span>
            <div className="d-flex w-100 my-2">
                <div className="form-floating w-100">
                    <input type="text" className="form-control mb-3" id="cookTime" placeholder="name" />
                    <label htmlFor="cookTime">hour/s</label>
                </div>
                <div className="form-floating w-100">
                    <input type="text" className="form-control mb-3" id="cookMinutes" placeholder="name" />
                    <label htmlFor="cookMinutes">minutes/s</label>
                </div>
            </div>
        </>
    );
}

export default Timers;
