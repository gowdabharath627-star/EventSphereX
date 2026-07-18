import { useEffect, useState } from "react";
import api from "../api";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

import { FaChartLine } from "react-icons/fa";

function RevenueChart({ category }) {

    const [data, setData] = useState([]);

    useEffect(() => {

        api.get(`/revenue-chart?category=${category}`)

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

                        <FaChartLine />

                        Revenue Trend

                    </h2>

                    <p>

                        Monthly Revenue Overview

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

                <AreaChart data={data}>

                    <defs>

                        <linearGradient
                            id="colorRevenue"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >

                            <stop
                                offset="5%"
                                stopColor="#2563eb"
                                stopOpacity={0.8}
                            />

                            <stop
                                offset="95%"
                                stopColor="#2563eb"
                                stopOpacity={0}
                            />

                        </linearGradient>

                    </defs>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#2563eb"
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                    />

                </AreaChart>

            </ResponsiveContainer>

        </div>

    );

}

export default RevenueChart;