import { useState, useEffect } from "react";
import React from "react";
import EstudianteService from "../../../services/estudianteServices.js";
export default function Estudiantes() {
   
    const [estudiantes, setEstudiantes] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] =useState(null);
    // Hacer la solicitud a la API para obtener los datos de los estudiantes
    useEffect(() => {
        EstudianteService.getAllEstudiantes().then(response=>{
            setEstudiantes(response.data);
            console.log(response.data);
            setLoading(false);
        }).catch(error=>{
            console.log(error);
            setError("Error al obtener los estudiantes");
            setLoading(false);
        })
    }, []);

    return (
        <div className="p-5">
            <table className="w-full">
                <thead className="text-center text-white bg-blue-500">
                    <tr>
                        <th className="p-2">N°</th>
                        <th className="p-2">Apellidos y Nombres</th>
                        <th className="p-2">DNI</th>
                        <th className="p-2">Curso</th>
                        <th className="p-2">Teléfono</th>
                        <th className="p-2">Localidad</th>
                        <th className="p-2">Correo Electrónico</th>
                        <th className="p-2">Estado</th>
                        <th className="p-2"></th>
                    </tr>
                </thead>    
                {loading ? (
                    <p className="text-center">Cargando estudiantes...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p> // Mostrar mensaje de error
                ) : (    
                <tbody className="text-center">
                    {estudiantes.length > 0 ? (
                        estudiantes.map((estudiante) => (
                            <tr className="" key={estudiante.id}>
                                <td className="text-white bg-blue-400">{estudiante.id}</td>
                                <td className="bg-slate-200">{estudiante.apellido} {estudiante.nombre} </td>
                                <td className="bg-slate-200">{estudiante.dni}</td>
                                <td className="bg-slate-200">Desarrollador</td>
                                <td className="bg-slate-200">{estudiante.tel_personal}</td>
                                <td className="bg-slate-200">{estudiante.localidad}</td>
                                <td className="bg-slate-200">{estudiante.correo_electronico}</td>
                                <td className="bg-slate-200">{estudiante.estado_estudiante === true ? "Activo" : "Inactivo"}</td>
                                <td className="bg-slate-200">
                                    <a href={`/admin/formulario_estudiante/${estudiante.id}`}>
                                        <i className="hover:text-blue-500">
                                            <ion-icon name="create"></ion-icon>
                                        </i>
                                    </a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" className="text-center">No hay estudiantes</td>
                        </tr>
                    )}
                </tbody>)}
            </table>
        </div>
    );
}
