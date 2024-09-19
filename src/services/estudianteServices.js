import axios from 'axios'

const ESTUDIANTE_BASE_REST_API_URL = "http://localhost:8080/api";

class EstudianteService {
    getAllEstudiantes() {
        return axios.get(ESTUDIANTE_BASE_REST_API_URL + "/alumnos");
    }
    AltaEstudiante(Alumno) {
        return axios.post(ESTUDIANTE_BASE_REST_API_URL + "/alumno/crear", Alumno)
    }
    getEstudianteById(id) {
        return axios.get(ESTUDIANTE_BASE_REST_API_URL + "/alumno/" + id);
    }
    updateEstudiante(id, Alumno) {
        return axios.put(ESTUDIANTE_BASE_REST_API_URL + "/alumno/update/{id}" + id, Alumno);
    }
    deleteEstudiante(id, Alumno) {
        return axios.put(ESTUDIANTE_BASE_REST_API_URL + "/alumno/baja/{id}" + id, Alumno);
    }
}

export default new EstudianteService();