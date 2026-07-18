import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaCalendarAlt,
    FaChartLine,
    FaUsers,
    FaCreditCard,
    FaShieldAlt,
    FaDatabase,
    FaBuilding
} from "react-icons/fa";

import "./Home.css";

function Home() {

    return (

        <div className="home">

            {/* HERO */}

            <section className="hero">

                <div className="hero-left">

                    <span className="tag">

                        Enterprise Analytics Platform

                    </span>

                    <h1>

                        Welcome to

                        <br />

                        <span>EventSphereX</span>

                    </h1>

                    <p>

                        An enterprise event management and business intelligence
                        platform designed to help organizations monitor events,
                        bookings, payments, food sales and analytics.

                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/login"
                            className="primary-btn"
                        >

                            Enter Dashboard

                            <FaArrowRight />

                        </Link>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="stats-card">

                        <h2>Business Intelligence</h2>

                        <p>

                            Real-Time Analytics Platform

                        </p>

                    </div>

                </div>

            </section>

            {/* STATISTICS */}

            <section className="statistics">

                <div className="stat-card">

                    <FaCalendarAlt />

                    <h2>250+</h2>

                    <p>Events Hosted</p>

                </div>

                <div className="stat-card">

                    <FaUsers />

                    <h2>12,500+</h2>

                    <p>Total Bookings</p>

                </div>

                <div className="stat-card">

                    <FaChartLine />

                    <h2>₹8.5 Cr</h2>

                    <p>Revenue Processed</p>

                </div>

                <div className="stat-card">

                    <FaBuilding />

                    <h2>45+</h2>

                    <p>Enterprise Clients</p>

                </div>

            </section>

            {/* ABOUT */}

            <section className="about">

                <div className="about-left">

                    <h2>

                        Why Choose EventSphereX?

                    </h2>

                    <p>

                        EventSphereX combines Event Management,
                        Business Intelligence,
                        Data Warehousing,
                        Reporting and Analytics into one enterprise solution.

                    </p>

                    <ul>

                        <li>✔ Enterprise Dashboard</li>
                        <li>✔ KPI Monitoring</li>
                        <li>✔ PostgreSQL Warehouse</li>
                        <li>✔ Business Reports</li>
                        <li>✔ Live Analytics</li>
                        <li>✔ Modern UI</li>

                    </ul>

                </div>

                <div className="about-right">

                    <div className="about-card">

                        <h1>2026</h1>

                        <p>

                            Enterprise Business Intelligence Platform

                        </p>

                    </div>

                </div>

            </section>

            {/* FEATURES */}

            <section className="features">

                <div className="feature-card">

                    <FaChartLine />

                    <h3>Business Analytics</h3>

                    <p>

                        Interactive dashboards and KPI reports.

                    </p>

                </div>

                <div className="feature-card">

                    <FaCalendarAlt />

                    <h3>Event Management</h3>

                    <p>

                        Manage exhibitions, conferences and concerts.

                    </p>

                </div>

                <div className="feature-card">

                    <FaUsers />

                    <h3>Customer Insights</h3>

                    <p>

                        Understand customer behaviour.

                    </p>

                </div>

                <div className="feature-card">

                    <FaCreditCard />

                    <h3>Payments</h3>

                    <p>

                        Monitor revenue and transactions.

                    </p>

                </div>

                <div className="feature-card">

                    <FaShieldAlt />

                    <h3>Incident Monitoring</h3>

                    <p>

                        Track operational incidents.

                    </p>

                </div>

                <div className="feature-card">

                    <FaDatabase />

                    <h3>Data Warehouse</h3>

                    <p>

                        PostgreSQL powered analytics warehouse.

                    </p>

                </div>

            </section>

            {/* FOOTER */}

            <footer className="footer">

                © 2026 EventSphereX Enterprise Analytics Platform

            </footer>

        </div>

    );

}

export default Home;