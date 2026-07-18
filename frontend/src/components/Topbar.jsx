import {
    FaBars,
    FaBell,
    FaSearch,
    FaUserCircle
} from "react-icons/fa";

import "./Topbar.css";

function Topbar({ collapsed, setCollapsed }) {

    const today = new Date();

    return (

        <div className="topbar">

            <div className="topbar-left">

                <button

                    className="menu-btn"

                    onClick={() => setCollapsed(!collapsed)}

                >

                    <FaBars />

                </button>

                <div>

                    <h2>Dashboard</h2>

                    <p>

                        {today.toLocaleDateString("en-IN",{

                            weekday:"long",

                            day:"numeric",

                            month:"long",

                            year:"numeric"

                        })}

                    </p>

                </div>

            </div>

            <div className="topbar-right">

                <div className="search-box">

                    <FaSearch />

                    <input

                        type="text"

                        placeholder="Search dashboard..."

                    />

                </div>

                <div className="notification">

                    <FaBell />

                    <span className="badge">3</span>

                </div>

                <div className="profile">

                    <FaUserCircle />

                    <div>

                        <h4>Administrator</h4>

                        <span>admin@eventspherex.com</span>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Topbar;