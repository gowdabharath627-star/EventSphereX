import { useEffect, useState } from "react";
import api from "../api";

import {
    FaUsers,
    FaCalendar,
    FaTicketAlt,
    FaCreditCard,
    FaHamburger,
    FaRupeeSign
} from "react-icons/fa";

import "./DashboardCards.css";

function DashboardCards({ category }) {

    const [dashboard, setDashboard] = useState({});

    useEffect(() => {

        api.get(`/dashboard?category=${category}`)

            .then((res) => {

                setDashboard(res.data);

            })

            .catch((err) => console.log(err));

    }, [category]);

    const cards = [

        {
            title: "Total Users",
            value: dashboard.total_users || 0,
            icon: <FaUsers />,
            color: "#2563eb",
            growth: "+12%"
        },

        {
            title: "Total Events",
            value: dashboard.total_events || 0,
            icon: <FaCalendar />,
            color: "#7c3aed",
            growth: "+8%"
        },

        {
            title: "Bookings",
            value: dashboard.total_bookings || 0,
            icon: <FaTicketAlt />,
            color: "#16a34a",
            growth: "+15%"
        },

        {
            title: "Payments",
            value: dashboard.total_payments || 0,
            icon: <FaCreditCard />,
            color: "#ea580c",
            growth: "+10%"
        },

        {
            title: "Food Sales",
            value: dashboard.total_food_sales || 0,
            icon: <FaHamburger />,
            color: "#dc2626",
            growth: "+6%"
        },

        {
            title: "Revenue",
            value: `₹ ${Number(
                dashboard.total_revenue || 0
            ).toLocaleString()}`,
            icon: <FaRupeeSign />,
            color: "#0891b2",
            growth: "+18%"
        }

    ];

    return (

        <div className="cards">

            {

                cards.map((card, index) => (

                    <div
                        className="card"
                        key={index}
                    >

                        <div className="card-top">

                            <div>

                                <p className="card-title">

                                    {card.title}

                                </p>

                                <h2>

                                    {card.value}

                                </h2>

                            </div>

                            <div
                                className="card-icon"
                                style={{
                                    background: card.color
                                }}
                            >

                                {card.icon}

                            </div>

                        </div>

                        <div className="card-bottom">

                            <span className="growth">

                                {card.growth}

                            </span>

                            <span>

                                Compared to last month

                            </span>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default DashboardCards;