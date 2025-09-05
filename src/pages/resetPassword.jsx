import { Form, useActionData, useSearchParams } from "react-router";
import AuthSubmitButton from "../components/auth/authSubmitButton";
import { useToastContext } from "../providers/toastProvider";
import { useEffect } from "react";

function ResetPassword() {
    const actionData = useActionData();
    const { createToast } = useToastContext();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    useEffect(() => {
        if (!token) {
            createToast({ headerText: "Invalid or missing token", bodyText: "Kindly start with forgot password again", isSuccess: false });
        }
    }, [token, createToast]);

    useEffect(() => {
        if (actionData?.errors) {
            actionData.errors.forEact((error) => createToast({ headerText: "Invalid fields", bodyText: error, isSuccess: false }));
        }
    }, [actionData, createToast]);

    return (
        <div className="auth bg-secondary ">
            <div className="container h-100">
                <div className="d-flex justify-content-center align-items-center align-items-sm-baseline h-100 pt-sm-7">
                    <div className="card" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h6 className="card-title mb-4">Reset password</h6>

                            <Form method="POST" noValidate>
                                <input type="text" className="d-none" name="token" value={token} />
                                <div className="form-floating w-100">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="password"
                                        name="password"
                                        placeholder="name@example.com"
                                        required
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-floating w-100">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="confirm-password"
                                        name="confirm-password"
                                        placeholder="name@example.com"
                                        required
                                    />
                                    <label htmlFor="confirm-password">Confirm password</label>
                                </div>

                                <AuthSubmitButton text="Reset password" disabled={!token} />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
