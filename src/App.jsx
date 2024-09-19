import { useState } from 'react';
import './App.css';
import Login from './components/auth/Login.jsx';

import EstudianteDashboard from './components/userDashboards/estudianteDashboard.jsx';
import AdminDashboard from './components/userDashboards/adminDashboard';

import FormEstudiante from './components/funciones/admin/formEstudiante.jsx';
import Estudiantes from './components/funciones/admin/estudiantes.jsx';
import Materias from './components/funciones/admin/materias.jsx';
import Peticiones from './components/funciones/admin/peticiones.jsx';

import MateriasAlumno from './components/funciones/estudiante/materiasAlumno.jsx';
import PlanEstudio from './components/funciones/estudiante/planEstudio.jsx';
import Solicitar from './components/funciones/estudiante/solicitar.jsx';

import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/admin' element={<AdminDashboard />}>
              <Route path='formulario_estudiante' element={<FormEstudiante />} />
              <Route path='formulario_estudiante/:id' element={<FormEstudiante />} />
              <Route path='estudiantes' element={<Estudiantes />}/>
              <Route path='materias' element={<Materias />} />
              <Route path='peticiones' element={<Peticiones />} />
            </Route>
            <Route path='/estudiante' element={<EstudianteDashboard />}>
              <Route path='materias' element={<MateriasAlumno />} />
              <Route path='plan_de_estudio' element={<PlanEstudio />} />
              <Route path='solicitar' element={<Solicitar />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App
