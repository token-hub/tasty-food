function Password() {
    return (
        <form action="" method="POST">
            <div className="mb-3">
                <label htmlFor="oldPassword" className="form-label">
                    Old Password
                </label>
                <input type="password" required autofocus className="form-control" placeholder="..." id="oldPassword" />
            </div>
            <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                    New password
                </label>
                <input type="password" required className="form-control" placeholder="..." id="newPassword" />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                    Confirm password
                </label>
                <input type="password" required className="form-control" placeholder="..." id="confirmPassword" />
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
