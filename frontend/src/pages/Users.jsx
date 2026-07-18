import { useEffect, useState } from "react";
import api from "../api";
import "./Users.css";

function Users() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        api.get("/users")

            .then((res) => {

                setUsers(res.data);

            })

            .catch((err) => console.log(err));

    }, []);

    const filteredUsers = users.filter((user) =>
        user.full_name.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="users-page">

            <div className="users-header">

                <div>

                    <h1>👥 Users Management</h1>

                    <p>Manage all registered users</p>

                </div>

            </div>

            <div className="users-toolbar">

                <input
                    type="text"
                    placeholder="🔍 Search User..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="table-container">

                <table>

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

                        {filteredUsers.map((user) => (

                            <tr key={user.user_id}>

                                <td>{user.user_id}</td>
                                <td>{user.full_name}</td>
                                <td>{user.gender}</td>
                                <td>{user.age}</td>
                                <td>{user.city}</td>

                                <td>

                                    <span className="member">

                                        {user.membership}

                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Users;