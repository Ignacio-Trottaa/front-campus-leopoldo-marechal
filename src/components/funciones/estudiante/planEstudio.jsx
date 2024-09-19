import { useState } from "react";
import React from "react";

export default function PlanEstudio() {
  return (
    <div className="justify-center text-center bg-sky-50">
      <div className="m-5">
        <h2>Centro Regional Universitario de Ituzaingó</h2>
        <h2>Instituto Superior de Formación Técnica Municipal “Leopoldo Marechal”</h2>
        <h3>Tecnicatura Superior en Desarrollo de Software</h3>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">
        <a href="/PROGRAMA_TEC_SUP_EN_DESARROLLO_DE_SOFTWARE.pdf"
          download="PROGRAMA TEC.SUP.EN DESARROLLO DE SOFTWARE.pdf">
          Descargar plan de estudio
        </a>
      </button>
      <div className="m-5">
      <h1>PROGRAMA 1°AÑO</h1>
      <table className="flex justify-center text-left">
        <tbody>
          <tr>
            <td><strong>Campo General</strong></td>
            <td><strong>Horas</strong></td>
          </tr>
          <tr>
            <td>Análisis Matemático</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td><strong>Campo Técnico Específico</strong></td>
            <td></td>
          </tr>
          <tr>
            <td className="pr-2">Administración y gestión de base de datos</td>
            <td>96 Hs.</td>
          </tr>
          <tr>
            <td>Introducción a la programación</td>
            <td>96 Hs.</td>
          </tr>
          <tr>
            <td><strong>Campo del Fundamento</strong></td>
            <td></td>
          </tr>
          <tr>
            <td>Introducción a las redes de datos</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td>Sistemas Digitales</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td>Sistemas operativos</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td>Laboratorio de Hardware</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td><strong>Campo de la Práctica</strong></td>
            <td></td>
          </tr>
          <tr>
            <td>Prácticas Profesionalizantes I</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td><strong>TOTAL HORAS:</strong></td>
            <td>576 Hs.</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="m-5">
      <h1>PROGRAMA 2°AÑO</h1>
      <table className="flex justify-center text-left">
        <tbody>
          <tr>
            <td><strong>Campo General</strong></td>
            <td><strong>Horas</strong></td>
          </tr>
          <tr>
            <td>Inglés</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td>Desarrollo de aplicativos móviles</td>
            <td>96 Hs.</td>
          </tr>
          <tr>
            <td>Algebra y Lógica</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td><strong>Campo del Fundamento</strong></td>
            <td></td>
          </tr>
          <tr>
            <td>Programación</td>
            <td>96 Hs.</td>
          </tr>
          <tr>
            <td>Diseño web</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td>Estadística y Probabilidades</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td><strong>Campo Técnico Específico</strong></td>
            <td></td>
          </tr>
          <tr>
            <td className="pr-2">Desarrollo de sistemas orientados a objetos</td>
            <td>128 Hs.</td>
          </tr>
          <tr>
            <td><strong>Campo de la Práctica</strong></td>
            <td></td>
          </tr>
          <tr>
            <td>Prácticas Profesionalizantes II</td>
            <td>96 Hs.</td>
          </tr>
          <tr>
            <td><strong>TOTAL HORAS:</strong></td>
            <td>672 Hs.</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="m-5">
      <h1>PROGRAMA 3°AÑO</h1>
      <table className="flex justify-center text-left">
        <tbody>
          <tr>
            <td><strong>Campo General</strong></td>
            <td><strong>Horas</strong></td>
          </tr>
          <tr>
            <td>Inglés II</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td>Gestión de Proyectos</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td><strong>Campo Técnico Específico</strong></td>
            <td></td>
          </tr>
          <tr>
            <td>Desarrollo de Sistemas Web</td>
            <td>128 Hs.</td>
          </tr>
          <tr>
            <td>Ingeniería de Software</td>
            <td>128 Hs.</td>
          </tr>
          <tr>
            <td className="pr-12">Metodologia de pruebas de sistemas</td>
            <td>64 Hs.</td>
          </tr>
          <tr>
            <td><strong>Campo de la Práctica</strong></td>
            <td></td>
          </tr>
          <tr>
            <td>Prácticas Profesionalizantes III</td>
            <td>128 Hs.</td>
          </tr>
          <tr>
            <td><strong>TOTAL HORAS:</strong></td>
            <td>576 Hs.</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-right"><strong>TOTAL DE HORAS DEL PLAN : 1824 HS.</strong></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}