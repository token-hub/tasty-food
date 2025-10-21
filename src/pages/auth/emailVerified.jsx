function EmailVerified() {
    return (
        <div className="auth bg-secondary ">
            <div className="container h-100">
                <div className="d-flex justify-content-center align-items-center align-items-sm-baseline h-100 pt-sm-7">
                    <div className="card" style={{ width: '25rem' }}>
                        <div className="card-body">
                            <h6 className="card-title mb-4">Email Verified</h6>
                            <hr className="mt-0" />
                            <p className="lead text-center">Email successfully verified, you may close this page</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailVerified;
