import { useEffect, useState } from "react";
import api from "../api";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip
} from "recharts";

import { FaHamburger } from "react-icons/fa";

const COLORS = [

    "#2563eb",
    "#16a34a",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6"

];

function FoodChart({ category }) {

    const [data, setData] = useState([]);

    useEffect(() => {

        api.get(`/food-chart?category=${category}`)

            .then((res)=>{

                setData(res.data);

            })

            .catch((err)=>console.log(err));

    },[category]);

    return(

        <div className="chart-card">

            <div className="chart-header">

                <div>

                    <h2>

                        <FaHamburger />

                        Food Sales

                    </h2>

                    <p>

                        Product Category Distribution

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

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="sales"

                        nameKey="category"

                        outerRadius={110}

                        label

                    >

                        {

                            data.map((entry,index)=>(

                                <Cell

                                    key={index}

                                    fill={COLORS[index % COLORS.length]}

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default FoodChart;