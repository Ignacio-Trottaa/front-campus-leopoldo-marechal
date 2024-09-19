import { useState } from "react";
import React from "react";
import SidebarAlumno from "../layout/SidebarAlumno.jsx";
import { Outlet } from "react-router-dom";

export default function EstudianteDashboard() {
    return (
        <div className="flex">
            <SidebarAlumno />
            <div className="ml-64 w-full">
                <Outlet />
            </div>
        </div>
    );
}
