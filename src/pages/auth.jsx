import { memo } from "react";
import { Link, useActionData, useNavigate, useSearchParams } from "react-router";
import FacebookIcon from "../assets/icons/facebookIcon";
import GoogleIcon from "../assets/icons/googleIcon";
import AuthSubmitButton from "../components/auth/authSubmitButton";
import { useToastContext } from "../providers/toastProvider";
import { useEffect } from "react";
import { Form } from "react-router";

function Auth() {
    const { createToast } = useToastContext();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const data = useActionData();

    const page = searchParams.get("page");
    let isLoginPage = page === "login";
    let cardTitle = isLoginPage ? "Log In" : "Sign Up";
    let linkMessage = isLoginPage ? "Sign Up" : "Log in";
    let textBeforeLink = isLoginPage ? "New to Tasty Food?" : "Already have an account?";

    useEffect(() => {
        if (data?.error) {
            createToast({ headerText: "Server Error", bodyText: data.error, isSuccess: false });
        }

        if (data?.result) {
            let name = data?.result?.details?.user?.name;
            if (name) {
                name = name[0].toUpperCase() + name.slice(1);
            }
            createToast({ headerText: "Authentication Success", bodyText: `Welcome ${name}` });
            navigate("/");
        }
    }, [data, createToast, navigate]);

    useEffect(() => {
        if (!page) {
            setSearchParams("?page=login");
        }
    }, [page, setSearchParams]);

    function handleLink() {
        if (isLoginPage) {
            setSearchParams("?page=signUp");
            return;
        }
        setSearchParams("?page=login");
    }

    return (
        <div className="auth bg-secondary ">
            <div className="container h-100">
                <div className="d-flex justify-content-center align-items-center align-items-sm-baseline h-100 pt-sm-7">
                    <div className="card" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h6 className="card-title mb-4">{cardTitle} </h6>

                            <Form method="POST">
                                {!isLoginPage && (
                                    <div className="form-floating w-100">
                                        <input type="text" className="form-control mb-3" id="name" name="name" placeholder="joe doe" required />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                )}

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

                                <div className="form-floating w-100">
                                    <input
                                        type="password"
                                        className="form-control text-muted mb-3"
                                        id="password"
                                        name="password"
                                        placeholder="*******"
                                        required
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>

                                {!isLoginPage && (
                                    <div className="form-floating w-100">
                                        <input
                                            type="password"
                                            className="form-control text-muted mb-3"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            placeholder="*******"
                                            required
                                        />
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                    </div>
                                )}

                                <AuthSubmitButton />

                                {isLoginPage && (
                                    <Link to="/auth/forgot-password" className="fs-6 mb-3 link-underline link-underline-opacity-0">
                                        <small> Forgot password</small>
                                    </Link>
                                )}

                                <div className="d-flex justify-content-center">
                                    <div className="my-2 small text-muted">
                                        <small>OR</small>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <button className="btn btn-sm w-50 border text-muted mx-1 d-flex justify-content-center align-items-center">
                                        <GoogleIcon /> <span className="ms-1">Google</span>
                                    </button>
                                    <button className="btn btn-sm w-50 border text-muted mx-1 d-flex justify-content-center align-items-center">
                                        <FacebookIcon /> <span className="ms-1">Facebook</span>
                                    </button>
                                </div>
                                <Link onClick={handleLink} className="fs-6 d-flex justify-content-center link-underline link-underline-opacity-0">
                                    <small>
                                        <span className="text-muted">{textBeforeLink}</span>
                                        <span className="ms-2 text-secondary">{linkMessage}</span>
                                    </small>
                                </Link>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Auth);
