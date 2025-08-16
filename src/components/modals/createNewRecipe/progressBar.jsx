function ProgressBar({ now = 0, min = 0, max = 100 }) {
    return (
        <div
            className="progress mb-3"
            role="progressbar"
            aria-label="New recipe creation progress"
            aria-valuenow={now}
            aria-valuemin={min}
            aria-valuemax={max}
        >
            <div className={`progress-bar w-${now}`}> {now}%</div>
        </div>
    );
}

export default ProgressBar;
