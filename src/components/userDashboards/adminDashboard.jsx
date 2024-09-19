import {useState} from 'react';
import React from "react";
import SidebarAdmin from '../layout/SidebarAdmin.jsx';
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
    return (
        <div className="flex">
            <SidebarAdmin />
                <div className="ml-64 w-full">
                <Outlet />
                </div>
        </div>
    );
}