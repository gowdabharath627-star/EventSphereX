import { useEffect, useState } from "react";
import api from "../api";

function EventsTable({ category }) {

    const [events, setEvents] = useState([]);

    useEffect(() => {

        api.get(`/events?category=${category}`)

            .then((res) => {

                setEvents(res.data);

            })

            .catch((err) => {

                console.log(err);

            });

    }, [category]);

    return (

        <div className="chart-card">

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "18px"
                }}
            >

                <h2>🎉 Recent Events</h2>

                <span
                    style={{
                        color: "#64748b",
                        fontWeight: "600"
                    }}
                >
                    {events.length} Records
                </span>

            </div>

            <table className="dashboard-table">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Event Name</th>

                        <th>Category</th>

                        <th>Organizer</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        events.map((event) => (

                            <tr key={event.event_id}>

                                <td>{event.event_id}</td>

                                <td>{event.event_name}</td>

                                <td>

                                    <span className="badge">

                                        {event.category}

                                    </span>

                                </td>

                                <td>{event.organizer}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default EventsTable;