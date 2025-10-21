import RecipeReport from '../recipe/recipeReport';
import Pagination from '../pagination';
import { sampleReports } from '../../../lib/constants';

function RecipeReports({ recipe }) {
    // fetch the report using the recipe props

    // temporary;
    let reports = sampleReports;
    return (
        <div className="container">
            {reports.length ? (
                reports.map((report) => <RecipeReport report={report} key={report.id} />)
            ) : (
                <div
                    style={{ height: '15rem' }}
                    className="d-flex w-100 justify-content-center align-items-center text-muted"
                >
                    No reports found
                </div>
            )}

            <div className="mt-3">
                <Pagination pageSize={5} total={10} />
            </div>
        </div>
    );
}

export default RecipeReports;
