import { Link } from "react-router-dom";

function About() {
    return (
        <main className="about-page">
            <section className="page-header">
                <div>
                    <span>03 / ABOUT JOBNEST</span>

                    <h1>
                        CONNECTING
                        <br />
                        <strong>PEOPLE & JOBS.</strong>
                    </h1>
                </div>

                <p>
                    JobNest is a simple job portal designed to help
                    candidates discover opportunities and explore
                    different career paths.
                </p>
            </section>

            <section className="about-content">
                <div className="about-block">
                    <span>OUR PURPOSE</span>

                    <h2>
                        MAKING JOB SEARCH
                        <br />
                        SIMPLE.
                    </h2>

                    <p>
                        Finding the right opportunity can be difficult
                        when job information is spread across different
                        platforms. JobNest brings job opportunities
                        together in one simple and easy-to-use interface.
                    </p>

                    <p>
                        Users can search for jobs, filter opportunities,
                        view detailed job information and save positions
                        they are interested in.
                    </p>
                </div>

                <div className="about-block">
                    <span>WHAT WE OFFER</span>

                    <div className="about-list">
                        <div>
                            <strong>01</strong>
                            <h3>Job Discovery</h3>
                            <p>
                                Explore opportunities across multiple
                                technology and professional categories.
                            </p>
                        </div>

                        <div>
                            <strong>02</strong>
                            <h3>Smart Filtering</h3>
                            <p>
                                Search jobs by title, company, skills,
                                location and category.
                            </p>
                        </div>

                        <div>
                            <strong>03</strong>
                            <h3>Detailed Information</h3>
                            <p>
                                View salary, experience, skills and
                                complete job descriptions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div>
                    <span>START EXPLORING</span>

                    <h2>
                        YOUR NEXT OPPORTUNITY
                        <br />
                        COULD BE HERE.
                    </h2>
                </div>

                <Link to="/jobs" className="primary-btn">
                    Explore Jobs →
                </Link>
            </section>
        </main>
    );
}

export default About;