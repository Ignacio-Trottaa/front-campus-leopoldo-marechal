import React , { useState } from "react";

export default function Materias() {

    return (
        <div className="justify-center text-center">
            <h1 className="p-2 bg-[#0670B7] text-white">Grilla de horarios - Desarrollo de Software 2°AÑO</h1>
            <div className="flex justify-center text-center m-3">
                <table className="border-black border bg-white">
                    <thead>
                    <tr className="border-black border">
                    <td></td>
                    <td className="border-black border">LUNES</td>
                    <td className="border-black border">MARTES</td>
                    <td className="border-black border">MIERCOLES</td>
                    <td className="border-black border">JUEVES</td>
                    <td className="border-black border">VIERNES</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border-black border">18:00 - 19:00</td>
                        <td className="" rowSpan={3} >Desarrollo de Sistemas <br /> Orientados a Objetos</td>
                        <td className="border-x border-black">Diseño Web</td>
                        <td className="">Inglés</td>
                        <td className="border-black border"></td>
                        <td className="border-black border"></td>
                    </tr>
                    <tr>
                        <td className="border-black border">19:00 - 20:00</td>
                        <td className="border-x border-black">profe</td>
                        <td className="">Elena Gonzalez</td>
                        <td className="border-black border-x" rowSpan={2}>Desarrollo de <br /> Aplicativos Moviles</td>
                        <td className="border-black border-x" rowSpan={2}>Prácticas <br /> Profesionalizantes</td>
                    </tr>
                    <tr >
                        <td className="border-black border">20:00 - 21:00</td>
                        <td className="border-x border-black border-t">Algebra y Logica</td>
                        <td className="border-t border-black">Probabilidad y Estadistica</td>
                    </tr>
                    <tr>
                        <td className="border-black border">21:00 - 22:00</td>
                        <td>Hernán Ledesma</td>
                        <td className="border-black border-x">Matias Cerdeira</td>
                        <td className="">Matias Cerdeira</td>
                        <td className="border-black border-x border-b">Cristina Arancibia</td>
                        <td className="border-black border-x border-b">Sergio Bonavento <br /> Guido</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}