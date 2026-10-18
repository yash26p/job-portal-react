import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <Link
                    to="/"
                    className="navbar-logo"
                >
                    Job<span>Nest</span>
                </Link>

                <div className="navbar-links">
                    <NavLink
                        to="/"
                        end
                    >
                        Home
                    </NavLink>

                    <NavLink to="/jobs">
                        Find Jobs
                    </NavLink>

                    <NavLink to="/about">
                        About
                    </NavLink>
                </div>

                <div className="navbar-actions">
                    <Link
                        to="/jobs"
                        className="navbar-login"
                    >
                        Sign In
                    </Link>

                    <Link
                        to="/jobs"
                        className="navbar-button"
                    >
                        Post a Job
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;