import { useEffect, useState } from "react";
import api from "../api";
import "./FoodSales.css";

function FoodSales() {

    const [sales, setSales] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        api.get("/food-sales")

            .then((res) => {

                setSales(res.data);

            })

            .catch((err) => console.log(err));

    }, []);

    const filteredSales = sales.filter((sale) =>

        sale.product_category
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <div className="food-page">

            <div className="food-header">

                <div>

                    <h1>🍔 Food Sales</h1>

                    <p>Monitor food stalls and sales performance</p>

                </div>

            </div>

            <div className="food-toolbar">

                <input

                    type="text"

                    placeholder="🔍 Search Product Category..."

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                />

            </div>

            <div className="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>Sale ID</th>
                            <th>Event</th>
                            <th>User</th>
                            <th>Stall</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Revenue</th>
                            <th>Wait Time</th>
                            <th>Date</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredSales.map((sale)=>(

                            <tr key={sale.sale_id}>

                                <td>{sale.sale_id}</td>

                                <td>{sale.event_id}</td>

                                <td>{sale.user_id}</td>

                                <td>{sale.stall_id}</td>

                                <td>{sale.product_category}</td>

                                <td>{sale.quantity}</td>

                                <td>

                                    ₹ {sale.revenue.toLocaleString()}

                                </td>

                                <td>{sale.wait_time} sec</td>

                                <td>{sale.timestamp}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default FoodSales;