import { useEffect, useState } from "react";
import api from "../api";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

import { FaTicketAlt } from "react-icons/fa";

function BookingChart({ category }) {

    const [data, setData] = useState([]);

    useEffect(() => {

        api.get(`/booking-chart?category=${category}`)

            .then((res) => {

                setData(res.data);

            })

            .catch((err) => console.log(err));

    }, [category]);

    return (

        <div className="chart-card">

            <div className="chart-header">

                <div>

                    <h2>

                        <FaTicketAlt />

                        Booking Trend

                    </h2>

                    <p>

                        Monthly Ticket Bookings

                    </p>

                </div>

                <span className="updated">

                    Updated Just Now

                </span>

            </div>

            <ResponsiveContainer
                width="100%"
                height={330}
            >

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="bookings"
                        fill="#16a34a"
                        radius={[8,8,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default BookingChart;