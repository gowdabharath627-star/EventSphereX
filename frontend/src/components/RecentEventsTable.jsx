import React, { useEffect, useState } from "react";

function RecentEventsTable() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/events") // ✅ adjust if your backend endpoint differs
      .then(res => res.json())
      .then(json => {
        console.log("Recent events data:", json);
        setEvents(json);
      })
      .catch(err => console.error("Error fetching events:", err));
  }, []);

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Event Name</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Date</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Location</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, idx) => (
          <tr key={idx}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{event.event_name}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{event.date}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{event.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RecentEventsTable;
