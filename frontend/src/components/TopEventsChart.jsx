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

import { FaChartLine } from "react-icons/fa";

function TopEventsChart({ category }) {

    const [data, setData] = useState([]);

    useEffect(() => {

        api.get(`/top-events?category=${category}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));

    }, [category]);

    return (

        <div className="chart-card">

            <div className="chart-header">

                <div>

                    <h2>

                        <FaChartLine />

                        Top Performing Events

                    </h2>

                    <p>

                        Highest Revenue Events

                    </p>

                </div>

                <span className="updated">

                    Updated Just Now

                </span>

            </div>

            <ResponsiveContainer width="100%" height={330}>

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3"/>

                    <XAxis dataKey="event"/>

                    <YAxis/>

                    <Tooltip/>

                    <Bar
                        dataKey="revenue"
                        fill="#2563eb"
                        radius={[8,8,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default TopEventsChart;