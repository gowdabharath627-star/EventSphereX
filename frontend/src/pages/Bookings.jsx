import { useEffect, useState } from "react";
import api from "../api";
import "./Bookings.css";

function Bookings() {

    const [bookings, setBookings] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        api.get("/bookings")

            .then((res) => {

                setBookings(res.data);

            })

            .catch((err) => console.log(err));

    }, []);

    const filteredBookings = bookings.filter((booking) =>

        booking.booking_id.toString().includes(search)

    );

    return (

        <div className="bookings-page">

            <div className="bookings-header">

                <div>

                    <h1>🎟 Bookings Management</h1>

                    <p>Monitor all event bookings</p>

                </div>

            </div>

            <div className="bookings-toolbar">

                <input

                    type="text"

                    placeholder="🔍 Search Booking ID..."

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                />

            </div>

            <div className="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>Booking ID</th>
                            <th>User ID</th>
                            <th>Event ID</th>
                            <th>Ticket</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Payment</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredBookings.map((booking)=>(

                            <tr key={booking.booking_id}>

                                <td>{booking.booking_id}</td>

                                <td>{booking.user_id}</td>

                                <td>{booking.event_id}</td>

                                <td>{booking.ticket_type}</td>

                                <td>{booking.quantity}</td>

                                <td>

                                    ₹ {booking.total_amount.toLocaleString()}

                                </td>

                                <td>

                                    <span className="status">

                                        {booking.booking_status}

                                    </span>

                                </td>

                                <td>{booking.payment_mode}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Bookings;