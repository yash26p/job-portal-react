import { Link, useParams } from "react-router-dom";
import jobs from "../data/jobs";

function JobDetails() {
    const { id } = useParams();

    const job = jobs.find(
        (item) => item.id === Number(id)
    );

    if (!job) {
        return (
            <main className="not-found">
                <h1>JOB NOT FOUND</h1>

                <p>
                    The job you are looking for does not exist.
                </p>

                <Link to="/jobs" className="primary-btn">
                    ← Back to Jobs
                </Link>
            </main>
        );
    }

    return (
        <main className="job-details-page">
            <section className="job-details-header">
                <div>
                    <span>{job.category}</span>

                    <h1>{job.title}</h1>

                    <p className="details-company">
                        {job.company}
                    </p>
                </div>

                <Link to="/jobs" className="secondary-btn">
                    ← Back to Jobs
                </Link>
            </section>

            <section className="job-details-content">
                <div className="job-main-info">
                    <div className="info-block">
                        <span>LOCATION</span>
                        <strong>{job.location}</strong>
                    </div>

                    <div className="info-block">
                        <span>EMPLOYMENT TYPE</span>
                        <strong>{job.type}</strong>
                    </div>

                    <div className="info-block">
                        <span>SALARY</span>
                        <strong>{job.salary}</strong>
                    </div>

                    <div className="info-block">
                        <span>EXPERIENCE</span>
                        <strong>{job.experience}</strong>
                    </div>

                    <div className="details-description">
                        <span>JOB DESCRIPTION</span>

                        <h2>ABOUT THE ROLE</h2>

                        <p>{job.description}</p>
                    </div>

                    <div className="skills-section">
                        <span>REQUIRED SKILLS</span>

                        <div className="skills-list">
                            {job.skills.map((skill) => (
                                <span key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="apply-card">
                    <span>INTERESTED?</span>

                    <h2>TAKE THE NEXT STEP.</h2>

                    <p>
                        Review the job requirements and apply
                        for this opportunity.
                    </p>

                    <button
                        className="primary-btn"
                        onClick={() =>
                            alert(
                                `Application started for ${job.title} at ${job.company}.`
                            )
                        }
                    >
                        Apply Now →
                    </button>
                </aside>
            </section>
        </main>
    );
}

export default JobDetails;