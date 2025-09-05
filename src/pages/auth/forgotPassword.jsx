import { Form, useActionData, Link } from "react-router";
import AuthSubmitButton from "../../components/auth/authSubmitButton";
import { useToastContext } from "../../providers/toastProvider";
import { useEffect, useRef } from "react";

function ForgotPassword() {
    const actionData = useActionData();
    const { createToast } = useToastContext();
    const emailRef = useRef();

    useEffect(() => {
        if (actionData?.errors) {
            actionData.errors.forEach((error) => createToast({ headerText: "Invalid fields", bodyText: error, isSuccess: false }));
        }

        if (actionData?.result) {
            createToast({ headerText: "Email Sent", bodyText: "Reset password was sent to your email" });
            emailRef.current.value = "";
        }
    }, [actionData, createToast]);

    return (
        <div className="auth bg-secondary ">
            <div className="container h-100">
                <div className="d-flex justify-content-center align-items-center align-items-sm-baseline h-100 pt-sm-7">
                    <div className="card" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h6 className="card-title mb-4">Forgot Password</h6>

                            <Form method="POST">
                                <div className="form-floating w-100">
                                    <input
                                        ref={emailRef}
                                        type="email"
                                        className="form-control mb-3"
                                        id="email"
                                        name="email"
                                        placeholder="name@example.com"
                                        required
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <p className="fs-7 text-center my-3 text-muted">We'll send you an email for you to reset your password</p>

                                <AuthSubmitButton />
                            </Form>
                            <div className="d-flex justify-content-center">
                                <Link to="/auth" className="link-underline link-underline-opacity-0">
                                    Sign In instead
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
