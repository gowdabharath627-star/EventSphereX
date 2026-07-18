import { useEffect, useState } from "react";
import api from "../api";
import "./Payments.css";

function Payments() {

    const [payments, setPayments] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        api.get("/payments")

            .then((res) => {

                setPayments(res.data);

            })

            .catch((err) => console.log(err));

    }, []);

    const filteredPayments = payments.filter((payment) =>

        payment.transaction_id
            .toString()
            .includes(search)

    );

    return (

        <div className="payments-page">

            <div className="payments-header">

                <div>

                    <h1>💳 Payments Management</h1>

                    <p>Monitor all payment transactions</p>

                </div>

            </div>

            <div className="payments-toolbar">

                <input

                    type="text"

                    placeholder="🔍 Search Transaction ID..."

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                />

            </div>

            <div className="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>Transaction</th>
                            <th>Booking</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Response Time</th>
                            <th>Failure Code</th>
                            <th>Date</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredPayments.map((payment)=>(

                            <tr key={payment.transaction_id}>

                                <td>{payment.transaction_id}</td>

                                <td>{payment.booking_id}</td>

                                <td>

                                    ₹ {payment.transaction_amount.toLocaleString()}

                                </td>

                                <td>

                                    <span className="status">

                                        {payment.transaction_status}

                                    </span>

                                </td>

                                <td>

                                    {payment.gateway_response_time} ms

                                </td>

                                <td>

                                    {payment.failure_code || "-"}

                                </td>

                                <td>

                                    {payment.timestamp}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Payments;