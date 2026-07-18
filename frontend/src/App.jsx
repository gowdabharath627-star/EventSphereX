import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Users from "./pages/Users";
import Bookings from "./pages/Bookings";
import Payments from "./pages/Payments";
import FoodSales from "./pages/FoodSales";
import Incidents from "./pages/Incidents";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Landing Page */}

                <Route

                    path="/"

                    element={<Home />}

                />

                {/* Login */}

                <Route

                    path="/login"

                    element={<Login />}

                />

                {/* Protected Dashboard */}

                <Route

                    element={

                        <ProtectedRoute>

                            <MainLayout />

                        </ProtectedRoute>

                    }

                >

                    <Route

                        path="/dashboard"

                        element={<Dashboard />}

                    />

                    <Route

                        path="/events"

                        element={<Events />}

                    />

                    <Route

                        path="/users"

                        element={<Users />}

                    />

                    <Route

                        path="/bookings"

                        element={<Bookings />}

                    />

                    <Route

                        path="/payments"

                        element={<Payments />}

                    />

                    <Route

                        path="/foodsales"

                        element={<FoodSales />}

                    />

                    <Route

                        path="/incidents"

                        element={<Incidents />}

                    />

                    <Route

                        path="/reports"

                        element={<Reports />}

                    />

                    <Route

                        path="/settings"

                        element={<Settings />}

                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}

export default App;