import { useState } from "react";
import React from "react";

export default function Peticiones() {
    return (
        <div className="p-10"> 
            <div className="w-full ">
                <h2 className="text-2xl">Peticiones</h2>
                <div className="w-full bg-blue-300 m-2 p-4">
                    <p>Emisor - Asunto<button className="rounded-full w-7 h-7 float-right bg-blue-400 p-1"><ion-icon name="close"></ion-icon></button></p>
                </div>
            </div>
        </div>
    );
}