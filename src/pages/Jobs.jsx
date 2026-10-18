import { useMemo, useState } from "react";
import JobCard from "../components/JobCard";
import jobs from "../data/jobs";

function Jobs() {
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("All Locations");
    const [category, setCategory] = useState("All Categories");
    const [savedJobs, setSavedJobs] = useState([]);

    const categories = [
        "All Categories",
        ...new Set(jobs.map((job) => job.category))
    ];

    const locations = [
        "All Locations",
        ...new Set(jobs.map((job) => job.location))
    ];

    const filteredJobs = useMemo(() => {
        return jobs.filter((job) => {
            const matchesSearch =
                job.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                job.company
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                job.skills.some((skill) =>
                    skill
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                );

            const matchesLocation =
                location === "All Locations" ||
                job.location === location;

            const matchesCategory =
                category === "All Categories" ||
                job.category === category;

            return (
                matchesSearch &&
                matchesLocation &&
                matchesCategory
            );
        });
    }, [searchTerm, location, category]);

    function handleSave(jobId) {
        setSavedJobs((currentSaved) => {
            if (currentSaved.includes(jobId)) {
                return currentSaved.filter(
                    (id) => id !== jobId
                );
            }

            return [...currentSaved, jobId];
        });
    }

    function clearFilters() {
        setSearchTerm("");
        setLocation("All Locations");
        setCategory("All Categories");
    }

    return (
        <main className="jobs-page">
            <section className="page-header">
                <div>
                    <span>02 / JOB OPPORTUNITIES</span>

                    <h1>
                        FIND YOUR
                        <br />
                        <strong>NEXT ROLE.</strong>
                    </h1>
                </div>

                <p>
                    Search through available opportunities and find
                    a role that matches your skills and career goals.
                </p>
            </section>

            <section className="jobs-section">
                <div className="filter-panel">
                    <div className="search-box">
                        <label>SEARCH</label>

                        <input
                            type="text"
                            placeholder="Job title, company or skill..."
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                        />
                    </div>

                    <div className="filter-group">
                        <label>LOCATION</label>

                        <select
                            value={location}
                            onChange={(event) =>
                                setLocation(event.target.value)
                            }
                        >
                            {locations.map((item) => (
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>CATEGORY</label>

                        <select
                            value={category}
                            onChange={(event) =>
                                setCategory(event.target.value)
                            }
                        >
                            {categories.map((item) => (
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        className="clear-btn"
                        onClick={clearFilters}
                    >
                        CLEAR
                    </button>
                </div>

                <div className="jobs-header">
                    <span>
                        {filteredJobs.length} JOBS FOUND
                    </span>

                    <span>
                        {savedJobs.length} SAVED
                    </span>
                </div>

                <div className="jobs-grid">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <JobCard
                                key={job.id}
                                job={job}
                                onSave={handleSave}
                                isSaved={savedJobs.includes(job.id)}
                            />
                        ))
                    ) : (
                        <div className="no-results">
                            <h3>No jobs found.</h3>

                            <p>
                                Try changing your search or filters.
                            </p>

                            <button
                                className="primary-btn"
                                onClick={clearFilters}
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Jobs;