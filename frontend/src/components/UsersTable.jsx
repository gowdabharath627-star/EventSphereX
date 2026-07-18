import { useEffect, useState } from "react";
import api from "../api";

function UsersTable() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        api.get("/users")

            .then((res) => {

                setUsers(res.data);

            })

            .catch((err) => {

                console.log(err);

            });

    }, []);

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

                <h2>👥 Active Users</h2>

                <span
                    style={{
                        color: "#64748b",
                        fontWeight: "600"
                    }}
                >

                    {users.length} Users

                </span>

            </div>

            <table className="dashboard-table">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Gender</th>

                        <th>Age</th>

                        <th>City</th>

                        <th>Membership</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.map((user) => (

                            <tr key={user.user_id}>

                                <td>{user.user_id}</td>

                                <td>{user.full_name}</td>

                                <td>{user.gender}</td>

                                <td>{user.age}</td>

                                <td>{user.city}</td>

                                <td>

                                    <span
                                        className={
                                            user.membership === "Premium"
                                                ? "premium-badge"
                                                : "normal-badge"
                                        }
                                    >

                                        {user.membership}

                                    </span>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default UsersTable;