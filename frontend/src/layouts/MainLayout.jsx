import { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "./MainLayout.css";

function MainLayout() {

    const [collapsed, setCollapsed] = useState(false);

    return (

        <div className="layout">

            <Sidebar

                collapsed={collapsed}

            />

            <main

                className={

                    collapsed

                        ? "main-content collapsed"

                        : "main-content"

                }

            >

                <Topbar

                    collapsed={collapsed}

                    setCollapsed={setCollapsed}

                />

                <Outlet />

            </main>

        </div>

    );

}

export default MainLayout;