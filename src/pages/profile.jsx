import { useSubmit, Form, useActionData } from "react-router";
import { useUserContext } from "../providers/userProvider";
import { useEffect } from "react";
import { useToastContext } from "../providers/toastProvider";

function Profile() {
    const submit = useSubmit();
    const actionData = useActionData();
    const { createToast } = useToastContext();
    const { user } = useUserContext();

    function handleEmailVerification() {
        submit({ email: user.email }, { method: "POST", action: "/emailVerification" });
    }

    useEffect(() => {
        if (actionData?.error) {
            createToast({ headerText: "Server Error", bodyText: actionData?.error, isSuccess: false });
        }

        if (actionData?.result) {
            createToast({ headerText: "Update user information", bodyText: "User information was successfully updated" });
        }
    }, [actionData, createToast]);

    return (
        <Form className="form-floating p-3 p-md-0" method="POST">
            <div className="form-floating w-100">
                <input
                    type="text"
                    required
                    className="form-control bg-gray-light mb-3"
                    id="email"
                    defaultValue={user.email ?? ""}
                    placeholder="johndoe@gmail.com"
                    disabled={user.email ?? false}
                />
                <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating w-100">
                <input
                    type="text"
                    required
                    name="name"
                    className="form-control bg-light mb-3"
                    id="name"
                    defaultValue={user.name ?? ""}
                    placeholder="John"
                />
                <label htmlFor="name">Name</label>
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
        </Form>
    );
}

export default Profile;
