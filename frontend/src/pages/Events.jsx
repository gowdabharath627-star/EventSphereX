import { useEffect, useState } from "react";
import api from "../api";
import "./Events.css";

function Events() {

    const [events, setEvents] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        api.get("/events")

            .then((res) => {

                setEvents(res.data);

            })

            .catch((err) => {

                console.log(err);

            });

    }, []);

    const filteredEvents = events.filter((event) =>

        event.event_name
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <div className="events-page">

            <div className="events-header">

                <div>

                    <h1>🎉 Events Management</h1>

                    <p>Manage all enterprise events</p>

                </div>

                <button className="add-btn">

                    + Add Event

                </button>

            </div>

      <div className="events-toolbar">

    <input
        type="text"
        placeholder="🔍 Search Event..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
    />

    <select>

        <option>All Categories</option>

        <option>Tech</option>

        <option>Food</option>

        <option>Exhibition</option>

        <option>Conference</option>

        <option>Comedy</option>

        <option>Gaming</option>

        <option>Sports</option>

    </select>

</div>

            <div className="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Event Name</th>

                            <th>Category</th>

                            <th>Organizer</th>

                            <th>Status</th>
<th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredEvents.map((event) => (

                            <tr key={event.event_id}>

                                <td>{event.event_id}</td>

                                <td>{event.event_name}</td>

                                <td>{event.category}</td>

                                <td>{event.organizer}</td>

                                <td>

    <span className="active">

        Active

    </span>

</td>

<td>

    <button className="view-btn">

        View

    </button>

</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Events;