import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import EstudianteService from "../../../services/estudianteServices.js";
export default function FormEstudiante() {
    const { id } = useParams();
    const [dniInput, setDniInput] = useState({
        dni:""
    });
    const [existDni, setExistDni] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        fecha_nac: "",
        lugar_nac: "",
        estado_civil: "",
        cant_hijos: "",
        familiares_acargo: "",
        direccion: "",
        numero: "",
        piso: "",
        depto: "",
        localidad: "",
        partido: "",
        codigo_postal: "",
        tel_personal: "",
        correo_electronico: "",
        titulo: "",
        anio_egreso: "",
        institucion: "",
        distrito: "",
        otros_estudios: "",
        trabaja: "",
        actividad: "",
        horario_inicio: "",
        horario_fin: "",
        obra_social: "",
        nombre_obra: "",
        estado_estudiante: "true"
    });
    const [error, setError] = useState({
        nombre: false,
        apellido: false,
        dni: false,
        fecha_nac: false,
        lugar_nac: false,
        estado_civil: false,
        cant_hijos: false,
        familiares_acargo: false,
        direccion: false,
        numero: false,
        localidad: false,
        partido: false,
        codigo_postal: false,
        tel_personal: false,
        correo_electronico: false,
        titulo: false,
        anio_egreso: false,
        institucion: false,
        distrito: false,
        trabaja: false,
        actividad: false,
        horario_inicio: false,
        horario_fin: false,
        obra_social: false,
        nombre_obra: false,
    });

    const handleInput = (e) => {
        const { name, value } = e.target;

        const soloLetrasCampos = [
            "nombre",
            "apellido",
            "lugar_nac",
            "estado_civil",
            "direccion",
            "localidad",
            "partido",
            "titulo",
            "distrito",
            "otros_estudios",
            "actividad",
            "nombre_obra"
        ];

        if (soloLetrasCampos.includes(name)) {
            if (/^[a-zA-Z\s]*$/.test(value)) {//valida que solo sean letras
                setFormData({
                    ...formData,
                    [name]: value
                })
            }
        } else if (name === "horario_inicio" || name === "horario_fin") {
            setFormData({
                ...formData,
                [name]: value
            })
        } else if (/^\d*$/.test(value)) {//valida que solo sean digitos//expresiones regulares
            setFormData({
                ...formData,//copia todas las propiedades de formData existentes
                [name]: value
            })
        } else if (name === "fecha_nac") {
            if (validarFecha(value)) {
                setFormData({
                    ...formData,
                    [name]: value
                })
            }
        } else if (name === "trabaja" || name === "obra_social" || name === "institucion") {
            setFormData({
                ...formData,
                [name]: value
            })
        } else if (name === "correo_electronico") {
                setFormData({
                    ...formData,
                    [name]: value.toLowerCase()
                })
                console.log(value);
        }
    }

    function validarFecha(fecha) {
        const fechaNacimiento = new Date(fecha);
        const hoy = new Date();

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mesNacimiento = fechaNacimiento.getMonth();
        const diaNacimiento = fechaNacimiento.getDate();

        if (hoy.getMonth() < mesNacimiento || (hoy.getMonth() === mesNacimiento && hoy.getDate() < diaNacimiento)) {
            edad--;
        }
        return edad >= 17;
    }

    const validarHorario = (e) => {
        const newErrors = {};
        const { name, value } = e.target;
        if (value.length === 5) {
            if (/^(0?[1-9]|1[0-2]) ?(am|pm)$/i.test(value)) {
                setFormData({
                    ...formData,
                    [name]: value
                });
                newErrors[name] = false;
            } else {
                newErrors[name] = true;
            }
        } else {
            // Actualiza el estado si el valor no está completo todavia.
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    function validarCampo(campo) {
        return campo.trim() !== '';
    }
    const altaEstudiante = async () => {
        try {
            let response;
            if (id) {
                // Si hay un ID, actualizamos al estudiante
                response = await EstudianteService.updateEstudiante(id, formData);
            } else {
                // Si no hay ID, damos de alta a un nuevo estudiante
                response = await EstudianteService.AltaEstudiante(formData);
            }

            if (response.status === 200 || response.status === 201) {
                console.log("Datos enviados exitosamente");
                console.log(response.data); // Maneja la respuesta si es necesario

                // Redirige después de un envío exitoso
                navigate("/admin/formulario_estudiante");
            } else {
                console.error("Error al enviar los datos");
            }
        } catch (error) {
            console.error("Error al enviar los datos a la API", error);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // Validar cada campo
        const newErrors = {};
        Object.keys(formData).forEach(field => {
            if (["depto", "piso", "otros_estudios"].includes(field)) {
                // Si el campo es depto, piso o otros_estudios y está vacío, no lo consideres error
                if (formData[field] === "") {
                    newErrors[field] = false; // No hay error
                }
            } else if (!validarCampo(formData[field])) {
                newErrors[field] = true; // encontró errores
            } else {
                newErrors[field] = false; // no encontró errores
            }
        });

        // Actualizar el estado de errores
        setError(newErrors);
        console.log(newErrors);
        // Si no hay errores, puedes proceder con el envío del formulario
        if (Object.values(newErrors).every(val => !val)) {
            altaEstudiante(); // Llamamos a la función altaEstudiante aquí
        }
    };    //HACER UNA CONSULTA PARA AGARRAR LOS DATOS DEL ALUMNO ATRAVES DEL ID 
    useEffect(() => {
        if (id) {
            EstudianteService.getEstudianteById(id).then((response) => {
                setFormData(response.data);
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        } else {
            setFormData({
                nombre: "",
                apellido: "",
                dni: "",
                fecha_nac: "",
                lugar_nac: "",
                estado_civil: "",
                cant_hijos: "",
                familiares_acargo: "",
                direccion: "",
                numero: "",
                piso: "",
                depto: "",
                localidad: "",
                partido: "",
                codigo_postal: "",
                tel_personal: "",
                correo_electronico: "",
                titulo: "",
                anio_egreso: "",
                institucion: "",
                distrito: "",
                otros_estudios: "",
                trabaja: "false",
                actividad: "",
                horario_inicio: "",
                horario_fin: "",
                obra_social: "false",
                nombre_obra: "",
                estado_estudiante: "true"
            });
        }
    }, [id]);
    //llamadad a la api
    const modificarEstudiante = (e) => {
        e.preventDefault();
        EstudianteService.updateEstudiante(id, formData).then(response => {
            console.log(response.data);
            navigate("/admin/estudiantes");
        }).catch(error => {
            console.log(error);
        })
    }
    //llamadad a la api
    const bajaEstudiante = (e) => {
        e.preventDefault();
        EstudianteService.bajaEstudiante(id, formData).then(response => {
            console.log(response.data);
            navigate("/admin/estudiantes");
        }).catch(error => {
            console.log(error);
        })
    }
    const buscarPorDNI = () => {
        if (dniInput.dni.length === 8) {
            EstudianteService.findAlumnoByDNI(dniInput.dni).then((response) => {
                setFormData(response.data);
                setExistDni(true);
            }).catch(error => {
                setExistDni(false);
                console.log(error);
            });
        } else {
            console.log('DNI inválido');
        }
    };
    const handleDNI = (e) => {
        const { name, value } = e.target;
        setDniInput({
            ...dniInput,
            [name]: value,
        });
    }; 
    return (
        <div className="bg-blue-100 p-10">
                <div className="w-full">
                    <div className="p-4 pt-0 w-full flex">
                        <button onClick={buscarPorDNI} className="bg-blue-400 w-8 rounded-tl-lg rounded-bl-lg p-1 hover:bg-[#06B78B]">
                            <ion-icon name="search"></ion-icon>
                        </button>
                        <input
                            type="text"
                            id="dni"
                            name="dni"
                            autoComplete="off"
                            className="w-[90%] pl-3 p-1 rounded-tr-lg rounded-br-lg focus:outline-none"
                            placeholder="Buscar DNI"
                            maxLength={8}
                            minLength={8}
                            value={dniInput.dni}
                            onChange={handleDNI}
                        />    
                    </div>
                <form action="" method="post" className="" onSubmit={handleSubmit}>
                    <h1 className="text-xl text-center">Formulario de estudiates</h1>
                    <h2 className="text-lg">Datos del estudiante</h2>
                    <div className="flex">
                        <label className="m-2">Nombres</label>
                        {error.nombre && <p className="text-red-600 m-2">El nombre es requerido</p>}
                    </div>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        autoComplete="off"
                        placeholder="Nombres"
                        className="input"
                        onChange={handleInput}
                        value={formData.nombre}
                        maxLength={30}
                    />
                    <div className="flex">
                        <label className="m-2">Apellidos</label>
                        {error.apellido && <p className="text-red-600 m-2">El apellido es requerido</p>}
                    </div>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        autoComplete="off"
                        placeholder="Apellidos"
                        className="input"
                        onChange={handleInput}
                        value={formData.apellido}
                        maxLength={30}
                    />
                    <div className="flex">
                        <label className="m-2">DNI</label>
                        {error.dni && <p className="text-red-600 m-2">El DNI es requerido</p>}
                    </div>
                    <input
                        type="text"
                        id="dni"
                        name="dni"
                        autoComplete="off"
                        placeholder="DNI"
                        className="input"
                        onChange={handleInput}
                        value={formData.dni}
                        minLength={8}
                        maxLength={8}
                    />
                    <div className="flex">
                        <label className="m-2">Fecha de Nacimiento</label>
                        {error.fecha_nac && <p className="text-red-600 m-2">La fecha de nacimiento es requerida</p>}
                    </div>
                    <input
                        type="date"
                        id="fecha_nac"
                        name="fecha_nac"
                        className="input"
                        onChange={handleInput}
                        value={formData.fecha_nac}
                    />
                    <div className="flex">
                        <label className="m-2">Lugar de Nacimiento</label>
                        {error.lugar_nac && <p className="text-red-600 m-2">El lugar de nacimiento es requerido</p>}
                    </div>
                    <input
                        type="text"
                        id="lugar_nac"
                        name="lugar_nac"
                        autoComplete="off"
                        placeholder="Lugar de nacimiento"
                        className="input"
                        onChange={handleInput}
                        value={formData.lugar_nac}
                        maxLength={50}
                    />
                    <div className="flex">
                        <label className="m-2">Estado Civil</label>
                        {error.estado_civil && <p className="text-red-600 m-2">El estado civil es requerido</p>}
                    </div>
                    <select
                        id="estado_civil"
                        name="estado_civil"
                        className="input"
                        onChange={handleInput}
                        value={formData.estado_civil}>
                        <option value="">Seleccione...</option>
                        <option value="soltero">Soltero/a</option>
                        <option value="casado">Casado/a</option>
                        <option value="viudo">Viudo/a</option>
                        <option value="divorciado">Divorciado/a</option>
                    </select>
                    <div className="flex">
                        <label className="m-2">Hijos</label>
                        {error.cant_hijos && <p className="text-red-600 m-2">La cantidad de hijos es requerida</p>}
                    </div>
                    <input
                        type="text"
                        id="cant_hijos"
                        name="cant_hijos"
                        autoComplete="off"
                        placeholder="Cantidad de hijos"
                        className="input"
                        onChange={handleInput}
                        value={formData.cant_hijos}
                        maxLength={2}
                    />
                    <div className="flex">
                        <label className="m-2">Familiares a Cargo</label>
                        {error.familiares_acargo && <p className="text-red-600 m-2">La cantidad de familiares a cargo es requerida</p>}
                    </div>
                    <input
                        type="text"
                        id="familiares_acargo"
                        name="familiares_acargo"
                        autoComplete="off"
                        placeholder="Familiares a cargo"
                        className="input"
                        onChange={handleInput}
                        value={formData.familiares_acargo}
                        maxLength={2}
                    />
                    <div className="flex">
                        <label className="m-2">Dirección</label>
                        {error.direccion && <p className="text-red-600 m-2">La dirección es requerida</p>}
                    </div>
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        autoComplete="off"
                        placeholder="Calle"
                        className="input"
                        onChange={handleInput}
                        value={formData.direccion}
                        maxLength={50}
                    />
                    <div className="flex">
                        <label className="m-2">Número</label>
                        {error.numero && <p className="text-red-600 m-2">El número es requerido</p>}
                    </div>
                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        autoComplete="off"
                        placeholder="Número"
                        className="input"
                        onChange={handleInput}
                        value={formData.numero}
                        maxLength={4}
                    />
                    <label className="m-2">Piso</label>
                    <input
                        type="text"
                        id="piso"
                        name="piso"
                        autoComplete="off"
                        placeholder="Piso"
                        className="input"
                        onChange={handleInput}
                        value={formData.piso}
                        maxLength={2}
                    />
                    <label className="m-2">Departamento</label>
                    <input
                        type="text"
                        id="depto"
                        name="depto"
                        autoComplete="off"
                        placeholder="Depto"
                        className="input"
                        onChange={handleInput}
                        value={formData.depto}
                        maxLength={50}
                    />
                    <div className="flex">
                        <label className="m-2">Localidad</label>
                        {error.localidad && <p className="text-red-600 m-2">La localidad es requerida</p>}
                    </div>
                    <input
                        type="text"
                        id="localidad"
                        name="localidad"
                        autoComplete="off"
                        placeholder="Localidad"
                        className="input"
                        onChange={handleInput}
                        value={formData.localidad}
                        maxLength={50}
                    />
                    <div className="flex">
                        <label className="m-2">Partido</label>
                        {error.partido && <p className="text-red-600 m-2">El partido es requerido</p>}
                    </div>
                    <input
                        type="text"
                        id="partido"
                        name="partido"
                        autoComplete="off"
                        placeholder="Partido"
                        className="input"
                        onChange={handleInput}
                        value={formData.partido}
                        maxLength={50}
                    />
                    <div className="flex">
                        <label className="m-2">Código Postal</label>
                        {error.codigo_postal && <p className="text-red-600 m-2">El Código Postal es requerido</p>}
                    </div>
                    <input
                        type="text"
                        id="codigo_postal"
                        name="codigo_postal"
                        autoComplete="off"
                        placeholder="Código postal"
                        className="input"
                        onChange={handleInput}
                        value={formData.codigo_postal}
                        minLength={4}
                        maxLength={4}
                    />
                    <div className="flex">
                        <label className="m-2">Teléfono Personal</label>
                        {error.tel_personal && <p className="text-red-600 m-2">El teléfono personal es requerido</p>}
                    </div>
                    <input
                        type="text"
                        id="tel_personal"
                        name="tel_personal"
                        autoComplete="off"
                        placeholder="Teléfono personal"
                        className="input"
                        onChange={handleInput}
                        value={formData.tel_personal}
                        maxLength={10}
                    />
                    <div className="flex">
                        <label className="m-2">Correo Electrónico</label>
                        {error.correo_electronico && <p className="text-red-600 m-2">El correo electrónico es requerido</p>}
                    </div>
                    <input
                        type="email"
                        id="correo_electronico"
                        name="correo_electronico"
                        autoComplete="off"
                        placeholder="Correo electrónico"
                        className="input"
                        onChange={handleInput}
                        value={formData.correo_electronico}
                        maxLength={40}
                    />

                    <h2 className="text-lg">Estudios Cursados</h2>
                    <div className="flex">
                        <label className="m-2">Titulo</label>
                        {error.titulo && <p className="text-red-600 m-2">El titulo es requerido</p>}
                    </div>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        autoComplete="off"
                        placeholder="Titulo nivel medio o polimodal"
                        className="input"
                        onChange={handleInput}
                        value={formData.titulo}
                        maxLength={50}
                    />
                    <div className="flex">
                        <label className="m-2">Año de egreso</label>
                        {error.anio_egreso && <p className="text-red-600 m-2">El año de egreso es requerido</p>}
                    </div>
                    <input
                        type="text"
                        id="anio_egreso"
                        name="anio_egreso"
                        autoComplete="off"
                        placeholder="Año de egreso"
                        className="input"
                        onChange={handleInput}
                        value={formData.anio_egreso}
                        minLength={4}
                        maxLength={4}
                    />
                    <div className="flex">
                        <label className="m-2">Institución</label>
                        {error.institucion && <p className="text-red-600 m-2">La institución es requerida</p>}
                    </div>
                    <input
                        type="text"
                        id="institucion"
                        name="institucion"
                        autoComplete="off"
                        placeholder="Institución"
                        className="input"
                        onChange={handleInput}
                        value={formData.institucion}
                        maxLength={50}
                    />
                    <div className="flex">
                        <label className="m-2">Distrito</label>
                        {error.distrito && <p className="text-red-600 m-2">El distrito es requerido</p>}
                    </div>
                    <input
                        type="text"
                        id="distrito"
                        name="distrito"
                        autoComplete="off"
                        placeholder="Distrito"
                        className="input"
                        onChange={handleInput}
                        value={formData.distrito}
                        maxLength={40}
                    />
                    <label className="m-2">Otros estudios</label>
                    <input
                        type="text"
                        id="otros_estudios"
                        name="otros_estudios"
                        autoComplete="off"
                        placeholder="Otros estudios"
                        className="input"
                        onChange={handleInput}
                        value={formData.otros_estudios}
                        maxLength={70}
                    />

                    <h2 className="text-lg">Datos laborales</h2>
                    <div className="flex">
                        <label className="m-2">¿Trabaja?</label>
                        {error.trabaja && <p className="text-red-600 m-2">El dato es requerido</p>}
                    </div>
                    <label className="m-2">Si</label>
                    <input
                        type="radio"
                        id="siTrabaja"
                        name="trabaja"
                        autoComplete="off"
                        className="mr-4"
                        value="true"
                        checked={formData.trabaja === true}
                        onChange={handleInput}
                    />
                    <label className="m-2">No</label>
                    <input
                        type="radio"
                        id="noTrabaja"
                        name="trabaja"
                        autoComplete="off"
                        className=""
                        value="false"
                        checked={formData.trabaja === false}
                        onChange={handleInput}
                    /><br />
                    <div className="" id="datosLaborales">
                        <div className="flex">
                            <label className="m-2">Actividad</label>
                            {error.actividad && <p className="text-red-600 m-2">La actividad es requerida</p>}
                        </div>
                        <input
                            type="text"
                            id="actividad"
                            name="actividad"
                            autoComplete="off"
                            placeholder="Actividad"
                            className="input"
                            onChange={handleInput}
                            value={formData.actividad}
                            maxLength={40}
                        />
                        <h2 className="text-lg">Horario Habitual</h2>
                        <div className="flex">
                            <label className="m-2">Inicio de Horario</label>
                            {error.horario_inicio && <p className="text-red-600 m-2">Horario invalido o no posee el formato solicitado</p>}
                        </div>
                        <input
                            type="text"
                            id="horario_inicio"
                            name="horario_inicio"
                            autoComplete="off"
                            placeholder="Ejm: 8 AM"
                            className="input"
                            onChange={validarHorario}
                            value={formData.horario_inicio}
                            maxLength={5}
                        />
                        <div className="flex">
                            <label className="m-2">Fin de Horario</label>
                            {error.horario_fin && <p className="text-red-600 m-2">Horario invalido o no posee el formato solicitado</p>}
                        </div>
                        <input
                            type="text"
                            id="horario_fin"
                            name="horario_fin"
                            autoComplete="off"
                            placeholder="Ejm: 5 PM"
                            className="input"
                            onChange={validarHorario}
                            value={formData.horario_fin}
                            maxLength={5}
                        />
                        <div className="flex">
                            <label className="m-2">¿Posee obra social?</label><br />
                            {error.obra_social && <p className="text-red-600 m-2">El dato es requerido</p>}
                        </div>
                        <label className="m-2">Si</label>
                        <input
                            type="radio"
                            id="siObraSocial"
                            name="obra_social"
                            autoComplete="off"
                            className="mr-4"
                            value="true"
                            checked={formData.obra_social === true}
                            onChange={handleInput}
                        />
                        <label className="m-2">No</label>
                        <input
                            type="radio"
                            id="noObraSocial"
                            name="obra_social"
                            autoComplete="off"
                            className=""
                            onChange={handleInput}
                            value="false"
                            checked={formData.obra_social === false}
                        /><br />
                        <div className="" id="obraSocial">
                            <div className="flex">
                                <label className="m-2">Nombre de obra social</label>
                                {error.nombre_obra && <p className="text-red-600 m-2">El dato es requerido</p>}
                            </div>
                            <input
                                type="text"
                                id="nombre_obra"
                                name="nombre_obra"
                                autoComplete="off"
                                placeholder="Nombre de obra social"
                                className="input"
                                onChange={handleInput}
                                value={formData.nombre_obra}
                                maxLength={40}
                            />
                        </div>
                    </div>
                    <br />
                    {
                        (id || existDni) ? (
                            <div className="flex">
                                <input type="submit" value="Actualizar" onClick={(e) => modificarEstudiante(e)} className="w-[50%] bg-blue-600 text-white p-2 rounded-md m-2 cursor-pointer hover:bg-blue-500" />
                                <input type="submit" value="Dar de baja" onClick={(e) => {
                                    if (window.confirm("¿Estás seguro de que deseas dar de baja a este estudiante?")) {
                                        bajaEstudiante(e);
                                    }
                                }}
                                    className="w-[50%] bg-red-600 text-white p-2 rounded-md m-2 cursor-pointer hover:bg-red-500" />
                            </div>
                        ) : (
                            <input type="submit" value="Registrar" className="w-full bg-green-600 text-white p-2 rounded-md m-2 cursor-pointer hover:bg-green-500" />
                        )
                    }
                    </form>
                </div>
        </div>
    );
}                