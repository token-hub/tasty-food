import { Link } from "react-router";
import Header from "../layout/header";
import FacebookIcon from "../assets/icons/facebookIcon";
import GoogleIcon from "../assets/icons/googleIcon";

function Auth() {
    return (
        <>
            <Header />
            <div className="auth bg-secondary ">
                <div className="container h-100">
                    <div className="d-flex justify-content-center align-items-center align-items-sm-baseline h-100 pt-sm-7">
                        <div className="card" style={{ width: "25rem" }}>
                            <div className="card-body">
                                <h6 className="card-title mb-4">Log In </h6>

                                <form action="">
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            className="form-control text-muted"
                                            id="exampleFormControlInput1"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input type="password" className="form-control text-muted" placeholder="password" />
                                    </div>
                                    <button className="w-100 btn btn-sm btn-primary mb-2 text-white" disabled>
                                        SUBMIT
                                    </button>
                                    <Link to="/" className="fs-6 mb-3 link-underline link-underline-opacity-0">
                                        <small> Forgot password</small>
                                    </Link>
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
                                    <Link to="/" className="fs-6 d-flex justify-content-center link-underline link-underline-opacity-0">
                                        <small>
                                            <span className="text-muted">New to Tasty Food?</span>{" "}
                                            <span className="ms-2 text-secondary">Sign Up</span>
                                        </small>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth;
