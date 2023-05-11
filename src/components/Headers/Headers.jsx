import { Link, NavLink } from "react-router-dom";
import './Headers.css';

const Headers = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content ps-8 mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <NavLink
                            to="/"
                            aria-label="Home"
                            title="Home"
                            className={({ isActive }) => (isActive ? "active" : "default")}
                        >
                            Home
                        </NavLink>


                        <NavLink
                            to="/statistics"
                            aria-label="Statistics"
                            title="Statistics"
                            className={({ isActive }) => (isActive ? "active" : "default")}
                        >
                            Statistics
                        </NavLink>

                        <NavLink
                            to="/appliedjob"
                            aria-label="Applied Jobs"
                            title="Applied Jobs"
                            className={({ isActive }) => (isActive ? "active" : "default")}
                        >
                            Applied Jobs
                        </NavLink>

                        <NavLink
                            to="/blog"
                            aria-label="Blog"
                            title="Blog"
                            className={({ isActive }) => (isActive ? "active" : "default")}
                        >
                            Blog
                        </NavLink>


                    </ul>
                </div>
                <Link
                    to="/"
                    aria-label="JobHunter"
                    title="JobHunter"
                    className="inline-flex items-center"
                >
                    <span className="md:ml-2 ml-4 text-2xl font-bold tracking-wide text-purple-800 ">
                        JobHunter
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className={({ isActive }) => (isActive ? "active" : "default")}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/statistics"
                        aria-label="Statistics"
                        title="Statistics"
                        className={({ isActive }) => (isActive ? "active" : "default")}
                    >
                        Statistics
                    </NavLink>
                    <NavLink
                        to="/appliedjob"
                        aria-label="Applied Jobs"
                        title="Applied Jobs"
                        className={({ isActive }) => (isActive ? "active" : "default")}
                    >
                        Applied Jobs
                    </NavLink>
                    <NavLink
                        to="/blog"
                        aria-label="Blog"
                        title="Blog"
                        className={({ isActive }) => (isActive ? "active" : "default")}
                    >
                        Blog
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="rounded bg-purple-500 md:px-4 md:py-3 px-1 py-1 text-white font-bold">
                    <Link to="/" aria-label="Blog" title="Blog">
                        Start Applying
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Headers;
