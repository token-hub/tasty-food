function Profile() {
    return (
        <form action="" method="POST">
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input type="password" required className="form-control" placeholder="johndoe@gmail.com" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                    First name
                </label>
                <input type="text" required className="form-control" placeholder="John" id="firstName" />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                    Last Name
                </label>
                <input type="text" required className="form-control" placeholder="Doe" id="lastName" />
            </div>

            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary text-light">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Profile;
