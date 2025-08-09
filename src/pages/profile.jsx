function Profile() {
    return (
        <form className="form-floating p-3 p-md-0" action="" method="POST">
            <div className="form-floating w-100">
                <input
                    type="text"
                    required
                    className="form-control bg-light mb-3"
                    id="email"
                    defaultValue={"johndoe@gmail.com"}
                    placeholder="johndoe@gmail.com"
                    autoFocus
                />
                <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating w-100">
                <input type="text" required className="form-control bg-light mb-3" id="firstName" defaultValue={"john"} placeholder="John" />
                <label htmlFor="firstName">First name</label>
            </div>

            <div className="form-floating w-100">
                <input type="text" required className="form-control bg-light mb-3" id="lastName" defaultValue={"doe"} placeholder="Doe" />
                <label htmlFor="lastName">Last name</label>
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
