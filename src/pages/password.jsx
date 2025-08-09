function Password() {
    return (
        <form className="form-floating p-3 p-md-0" action="" method="POST">
            <div className="form-floating w-100">
                <input
                    type="password"
                    required
                    className="form-control bg-light mb-3"
                    id="oldPassword"
                    defaultValue={"********"}
                    placeholder="********"
                />
                <label htmlFor="oldPassword">Old password</label>
            </div>

            <div className="form-floating w-100">
                <input
                    type="password"
                    required
                    className="form-control bg-light mb-3"
                    id="newPassword"
                    defaultValue={"********"}
                    placeholder="********"
                />
                <label htmlFor="newPassword">New password</label>
            </div>

            <div className="form-floating w-100">
                <input
                    type="password"
                    required
                    className="form-control bg-light mb-3"
                    id="confirmPassword"
                    defaultValue={"********"}
                    placeholder="********"
                />
                <label htmlFor="confirmPassword">Confirm password</label>
            </div>

            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary text-light">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Password;
