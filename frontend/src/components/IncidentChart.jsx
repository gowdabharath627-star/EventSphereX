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

import { FaExclamationTriangle } from "react-icons/fa";

function IncidentChart({ category }) {

    const [data, setData] = useState([]);

    useEffect(() => {

        api.get(`/incident-chart?category=${category}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));

    }, [category]);

    return (

        <div className="chart-card">

            <div className="chart-header">

                <div>

                    <h2>

                        <FaExclamationTriangle />

                        Incident Analytics

                    </h2>

                    <p>

                        Incidents by Event Category

                    </p>

                </div>

                <span className="updated">

                    Updated Just Now

                </span>

            </div>

            <ResponsiveContainer width="100%" height={330}>

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3"/>

                    <XAxis dataKey="category"/>

                    <YAxis/>

                    <Tooltip/>

                    <Bar
                        dataKey="incidents"
                        fill="#ef4444"
                        radius={[8,8,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default IncidentChart;