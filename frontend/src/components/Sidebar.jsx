import {
    FaTachometerAlt,
    FaCalendarAlt,
    FaUsers,
    FaTicketAlt,
    FaCreditCard,
    FaHamburger,
    FaExclamationTriangle,
    FaChartLine,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

import "./Sidebar.css";

function Sidebar({ collapsed }) {

    const navigate = useNavigate();

    function handleLogout() {

        navigate("/");

    }

    return (

        <aside className={collapsed ? "sidebar collapsed" : "sidebar"}>

            <div>

                <div className="logo">

                    <h2>🎉 EventSphereX</h2>

                    <p>Enterprise Analytics</p>

                </div>

                <nav>

                    <ul>

                        <NavLink to="/dashboard">
                            <li>
                                <FaTachometerAlt />
                                {!collapsed && <span>Dashboard</span>}
                            </li>
                        </NavLink>

                        <NavLink to="/events">
                            <li>
                                <FaCalendarAlt />
                                {!collapsed && <span>Events</span>}
                            </li>
                        </NavLink>

                        <NavLink to="/users">
                            <li>
                                <FaUsers />
                                {!collapsed && <span>Users</span>}
                            </li>
                        </NavLink>

                        <NavLink to="/bookings">
                            <li>
                                <FaTicketAlt />
                                {!collapsed && <span>Bookings</span>}
                            </li>
                        </NavLink>

                        <NavLink to="/payments">
                            <li>
                                <FaCreditCard />
                                {!collapsed && <span>Payments</span>}
                            </li>
                        </NavLink>

                        <NavLink to="/foodsales">
                            <li>
                                <FaHamburger />
                                {!collapsed && <span>Food Sales</span>}
                            </li>
                        </NavLink>

                        <NavLink to="/incidents">
                            <li>
                                <FaExclamationTriangle />
                                {!collapsed && <span>Incidents</span>}
                            </li>
                        </NavLink>

                        <NavLink to="/reports">
                            <li>
                                <FaChartLine />
                                {!collapsed && <span>Reports</span>}
                            </li>
                        </NavLink>

                        <NavLink to="/settings">
                            <li>
                                <FaCog />
                                {!collapsed && <span>Settings</span>}
                            </li>
                        </NavLink>

                    </ul>

                </nav>

            </div>

            <div

                className="logout"

                onClick={handleLogout}

            >

                <FaSignOutAlt />

                {!collapsed && <span>Logout</span>}

            </div>

        </aside>

    );

}

export default Sidebar;