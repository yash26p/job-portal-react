function JobCard({ job, onSave, isSaved }) {
    return (
        <div className="job-card">
            <div className="job-card-top">
                <div className="company-logo">
                    {job.company.charAt(0)}
                </div>

                <button
                    className={`save-btn ${isSaved ? "saved" : ""}`}
                    onClick={() => onSave(job.id)}
                >
                    {isSaved ? "♥ Saved" : "♡ Save"}
                </button>
            </div>

            <div className="job-card-content">
                <span className="job-category">
                    {job.category}
                </span>

                <h3>{job.title}</h3>

                <p className="company-name">
                    {job.company}
                </p>

                <div className="job-meta">
                    <span>📍 {job.location}</span>
                    <span>◷ {job.type}</span>
                </div>

                <div className="job-bottom">
                    <strong>{job.salary}</strong>

                    <a href={`/jobs/${job.id}`}>
                        View Job →
                    </a>
                </div>
            </div>
        </div>
    );
}

export default JobCard;