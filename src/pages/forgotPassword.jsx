import { Form } from "react-router";
import AuthSubmitButton from "../components/auth/authSubmitButton";

function ForgotPassword() {
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
