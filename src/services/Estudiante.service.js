const Estudiante = require('../models/Estudiante.models');
const createEstudiante = async (data) => {
    return await Estudiante.create(data);
};

const ListarEstudiantes = async () => {
    return await Estudiante.findAll();
};

//obtener por el id
const obtenerEstudiantePorId = async (id) => {
    return await Estudiante.findByPk(id);
};
//actualizar estudiante
const actualizarEstudiante = async (id, data) => {
    const estudiante = await Estudiante.findByPk(id);
    if (!estudiante) {
        return null;
    }
    await estudiante.update(data);
    return estudiante;
};
    //eliminar estudiante
const eliminarEstudiante = async (id) => {
    const estudiante = await Estudiante.findByPk(id);
    if (!estudiante) {
        return null;
    }
    await estudiante.destroy();
    return true;
};
module.exports = {
    createEstudiante,
    ListarEstudiantes,
    obtenerEstudiantePorId,
    actualizarEstudiante,
    eliminarEstudiante
};