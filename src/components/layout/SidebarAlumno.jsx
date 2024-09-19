import {useState} from 'react';
import React from "react";
import { itemsAlumno} from "./nav-items";
import { Link } from "react-router-dom";

export default function SidebarAlumno() {
    return (
        <div className="w-64 h-full bg-[#0670B7] text-[#ecf0f1] h-100vh p-5 fixed top-0 left-0 flex flex-col shadow-[2px_0_5px_rgba(0, 0, 0, 0.1)]">
            <div className="flex flex-col items-center mb-20">
                <h3 className="m-0 text-lg text-[#ecf0f1] text-center">Alumno</h3>
            </div>
            <nav className="grow">
                <ul className="p-0 list-none">
                    {
                    itemsAlumno.map((item) => (
                            <li className="my-2.5" key={item.id}>
                            <Link to={item.url} className="text-base no-underline text-[#ecf0f1] flex items-center p-3 rounded hover:bg-[#06B78B]">
                                <i className="flex m-1 text-2xl">{item.icon}</i>
                                {item.nom}
                                </Link>
                            </li>
                    ))    
                    }
                </ul>
            </nav>
        </div> 
    );
}