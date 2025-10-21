import UserIcon from '../../../assets/icons/userIcon';

function RecipeReport({ report }) {
    return (
        <div className="row mt-2">
            <hr className="mt-3" />
            <div className="col-2 col-md-2 col-lg-1">
                <div className="d-flex justify-content-center">
                    <UserIcon className="text-muted" height="32" width="32" />
                </div>
            </div>
            <div className="col-9 col-md-9 col-lg-8 p-0">
                <div className="d-flex flex-column h-100">
                    <p className="fs-7 text-dark mb-0">{report.reporter.name}</p>
                    <p className="fs-7 text-muted mb-0">{report.createdAt}</p>
                    <p className="fs-7 text-muted mb-0">{report.report}</p>
                </div>
            </div>
        </div>
    );
}

export default RecipeReport;
