import React, { useEffect, useState } from "react";

function KPICards() {
  const [kpis, setKpis] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/dashboard")
      .then(res => res.json())
      .then(json => setKpis(json))
      .catch(err => console.error("Error fetching KPIs:", err));
  }, []);

  return (
    <div className="kpi-row">
      <div className="kpi-card">
        <h3>Total Bookings</h3>
        <p>{kpis.total_bookings}</p>
      </div>
      <div className="kpi-card">
        <h3>Total Revenue</h3>
        <p>₹{kpis.total_revenue}</p>
      </div>
      <div className="kpi-card">
        <h3>Active Users</h3>
        <p>{kpis.active_users}</p>
      </div>
    </div>
  );
}

export default KPICards;
