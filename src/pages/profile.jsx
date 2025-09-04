import { useSubmit } from "react-router";
import { useUserContext } from "../providers/userProvider";

function Profile() {
    const submit = useSubmit();
    const { user } = useUserContext();

    function handleEmailVerification() {
        submit({ email: user.email }, { method: "POST", action: "/emailVerification" });
    }

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

            <div className={`d-flex ${user?.emailVerified ? "justify-content-end" : "justify-content-between"} `}>
                {!user?.emailVerified && (
                    <button className="btn btn-primary text-white" type="button" onClick={handleEmailVerification}>
                        Verify your email
                    </button>
                )}

                <button type="submit" className="btn btn-primary text-light">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Profile;
