import { useEffect, useState } from "react";
import api from "../api";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

import { FaUsers } from "react-icons/fa";

function CrowdChart({ category }) {

    const [data, setData] = useState([]);

    useEffect(() => {

        api.get(`/crowd-chart?category=${category}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));

    }, [category]);

    return (

        <div className="chart-card">

            <div className="chart-header">

                <div>

                    <h2>
                        <FaUsers />
                        Crowd Analytics
                    </h2>

                    <p>Average Crowd Attendance</p>

                </div>

                <span className="updated">
                    Updated Just Now
                </span>

            </div>

            <ResponsiveContainer width="100%" height={330}>

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3"/>

                    <XAxis dataKey="month"/>

                    <YAxis/>

                    <Tooltip/>

                    <Line
                        type="monotone"
                        dataKey="crowd"
                        stroke="#7c3aed"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default CrowdChart;