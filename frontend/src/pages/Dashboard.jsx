import { useEffect, useState } from "react";
import api from "../api";

import DashboardCards from "../components/DashboardCards";
import RevenueChart from "../components/RevenueChart";
import BookingChart from "../components/BookingChart";
import FoodChart from "../components/FoodChart";
import CrowdChart from "../components/CrowdChart";
import IncidentChart from "../components/IncidentChart";
import TopEventsChart from "../components/TopEventsChart";
import EventsTable from "../components/EventsTable";
import UsersTable from "../components/UsersTable";

import "./Dashboard.css";

function Dashboard() {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("All");

    useEffect(() => {

        api.get("/categories")
            .then((res) => {

                setCategories(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);

    return (

        <div className="dashboard">

            {/* ================= Header ================= */}

            <div className="dashboard-header">

                <div>

                    <h1>🎉 EventSphereX Dashboard</h1>

                    <p>Real-Time Event Analytics</p>

                </div>

                <div className="header-right">

                    <button className="export-btn">

                        📥 Export Excel

                    </button>

                    <div className="admin-profile">

                        👤 Admin

                    </div>

                </div>

            </div>

            {/* ================= Filters ================= */}

            <div className="filters">

                <div className="filter-search">

                    <input
                        type="text"
                        placeholder="🔍 Search Events..."
                    />

                </div>

                <select>

                    <option>All Dates</option>

                </select>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >

                    <option value="All">

                        All Categories

                    </option>

                    {

                        categories.map((cat) => (

                            <option
                                key={cat}
                                value={cat}
                            >

                                {cat}

                            </option>

                        ))

                    }

                </select>

                <select>

                    <option>All Cities</option>

                </select>

                <select>

                    <option>All Memberships</option>

                </select>

                <select>

                    <option>All Organizers</option>

                </select>

            </div>

            {/* ================= KPI Cards ================= */}

            <DashboardCards category={category} />

            {/* ================= Charts Row 1 ================= */}

            <div className="grid-two">

                <RevenueChart category={category} />

                <BookingChart category={category} />

            </div>

            {/* ================= Charts Row 2 ================= */}

            <div className="grid-two">

                <TopEventsChart category={category} />

                <CrowdChart category={category} />

            </div>

            {/* ================= Charts Row 3 ================= */}

            <div className="grid-two">

                <IncidentChart category={category} />

                <FoodChart category={category} />

            </div>

            {/* ================= Tables ================= */}

            <EventsTable category={category} />

            <UsersTable />

        </div>

    );

}

export default Dashboard;