import { Link } from "react-router-dom";
import jobs from "../data/jobs";

function Home() {
    const featuredJobs = jobs.slice(0, 4);

    const categories = [
        {
            icon: "💻",
            name: "Web Development",
            jobs: "120+ Jobs"
        },
        {
            icon: "🛡️",
            name: "Cybersecurity",
            jobs: "65+ Jobs"
        },
        {
            icon: "📊",
            name: "Data Science",
            jobs: "80+ Jobs"
        },
        {
            icon: "⚙️",
            name: "Software Development",
            jobs: "150+ Jobs"
        }
    ];

    return (
        <main className="home-page">

            {/* HERO */}

            <section className="hero">
                <div className="hero-background"></div>

                <div className="hero-content">
                    <div className="hero-badge">
                        <span>●</span> 500+ JOBS AVAILABLE
                    </div>

                    <h1>
                        Find your
                        <span> dream job.</span>
                    </h1>

                    <p>
                        Discover the right opportunity from hundreds of
                        companies and take the next step in your career.
                    </p>

                    <div className="hero-search">
                        <div className="hero-search-field">
                            <span>⌕</span>

                            <input
                                type="text"
                                placeholder="Job title, skills or company"
                            />
                        </div>

                        <div className="hero-search-field location-field">
                            <span>⌖</span>

                            <input
                                type="text"
                                placeholder="Location"
                            />
                        </div>

                        <Link
                            to="/jobs"
                            className="hero-search-button"
                        >
                            Search Jobs
                        </Link>
                    </div>

                    <div className="popular-searches">
                        <span>Popular:</span>

                        <Link to="/jobs">
                            Software Engineer
                        </Link>

                        <Link to="/jobs">
                            React Developer
                        </Link>

                        <Link to="/jobs">
                            Cybersecurity
                        </Link>

                        <Link to="/jobs">
                            Data Analyst
                        </Link>
                    </div>
                </div>
            </section>

            {/* TRUSTED COMPANIES */}

            <section className="trusted-section">
                <p>TRUSTED BY JOB SEEKERS ACROSS INDIA</p>

                <div className="company-strip">
                    <span>TECHNOVA</span>
                    <span>CODESPHERE</span>
                    <span>SECURENET</span>
                    <span>PIXELCRAFT</span>
                    <span>INNOVATEX</span>
                </div>
            </section>

            {/* CATEGORIES */}

            <section className="content-section">
                <div className="section-title-row">
                    <div>
                        <span className="section-label">
                            EXPLORE OPPORTUNITIES
                        </span>

                        <h2>
                            Browse by category
                        </h2>
                    </div>

                    <Link
                        to="/jobs"
                        className="view-all-link"
                    >
                        View all categories →
                    </Link>
                </div>

                <div className="category-grid">
                    {categories.map((category) => (
                        <Link
                            to="/jobs"
                            className="category-card"
                            key={category.name}
                        >
                            <div className="category-icon">
                                {category.icon}
                            </div>

                            <div>
                                <h3>{category.name}</h3>

                                <p>{category.jobs}</p>
                            </div>

                            <span className="category-arrow">
                                →
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* FEATURED JOBS */}

            <section className="content-section featured-section">
                <div className="section-title-row">
                    <div>
                        <span className="section-label">
                            NEW OPPORTUNITIES
                        </span>

                        <h2>
                            Featured jobs
                        </h2>
                    </div>

                    <Link
                        to="/jobs"
                        className="view-all-link"
                    >
                        View all jobs →
                    </Link>
                </div>

                <div className="featured-jobs">
                    {featuredJobs.map((job) => (
                        <div
                            className="featured-job-card"
                            key={job.id}
                        >
                            <div className="featured-job-top">
                                <div className="company-logo">
                                    {job.company.charAt(0)}
                                </div>

                                <span className="job-type-badge">
                                    {job.type}
                                </span>
                            </div>

                            <div className="featured-job-info">
                                <span className="featured-category">
                                    {job.category}
                                </span>

                                <h3>{job.title}</h3>

                                <p className="featured-company">
                                    {job.company}
                                </p>

                                <div className="featured-meta">
                                    <span>
                                        📍 {job.location}
                                    </span>

                                    <span>
                                        💰 {job.salary}
                                    </span>
                                </div>
                            </div>

                            <div className="featured-job-footer">
                                <span>
                                    {job.experience}
                                </span>

                                <Link to={`/jobs/${job.id}`}>
                                    View Job →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* STATS */}

            <section className="stats-section">
                <div className="stats-content">
                    <div>
                        <strong>500+</strong>
                        <span>Active Jobs</span>
                    </div>

                    <div>
                        <strong>120+</strong>
                        <span>Companies</span>
                    </div>

                    <div>
                        <strong>25+</strong>
                        <span>Job Categories</span>
                    </div>

                    <div>
                        <strong>10K+</strong>
                        <span>Job Seekers</span>
                    </div>
                </div>
            </section>

            {/* CTA */}

            <section className="home-cta">
                <div>
                    <span>YOUR NEXT OPPORTUNITY IS WAITING</span>

                    <h2>
                        Ready to find
                        <br />
                        your next job?
                    </h2>
                </div>

                <Link
                    to="/jobs"
                    className="cta-button"
                >
                    Explore Jobs →
                </Link>
            </section>

        </main>
    );
}

export default Home;