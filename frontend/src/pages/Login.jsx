import { FaLock, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();

    function handleLogin(e) {

    e.preventDefault();

    // Temporary Credentials

    if (

        email === "admin@eventspherex.com" &&

        password === "admin123"

    ) {

        login();

        navigate("/dashboard");

    }

    else {

        alert("Invalid Email or Password");

    }

}

    return (

        <div className="login-container">

            <div className="login-left">

                <h1>EventSphereX</h1>

                <h2>Enterprise Analytics Platform</h2>

                <p>

                    Monitor Events, Payments, Bookings,
                    Food Sales and Business Intelligence
                    from one centralized dashboard.

                </p>

            </div>

            <div className="login-right">

                <form
                    className="login-card"
                    onSubmit={handleLogin}
                >

                    <h2>Welcome Back</h2>

                    <p>

                        Login to continue

                    </p>

                    <div className="input-group">

                        <FaUserAlt />

                        <input

                            type="email"

                            placeholder="Email"

                            value={email}

                            onChange={(e)=>setEmail(e.target.value)}

                            required

                        />

                    </div>

                    <div className="input-group">

                        <FaLock />

                        <input

                            type="password"

                            placeholder="Password"

                            value={password}

                            onChange={(e)=>setPassword(e.target.value)}

                            required

                        />

                    </div>

                    <div className="login-options">

                        <label>

                            <input type="checkbox"/>

                            Remember Me

                        </label>

                        <a href="#">

                            Forgot Password?

                        </a>

                    </div>

                    <button>

                        Login

                    </button>

                    <p className="bottom-text">

                        © 2026 EventSphereX

                    </p>

                </form>

            </div>

        </div>

    );

}

export default Login;