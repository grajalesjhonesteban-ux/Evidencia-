const Docente = require('../models/docente.model');
const createDocente = async (data) => {
    return await Docente.create(data);
};

const ListarDocente = async () => {
    return await Docente.findAll();
};

//obtener por el id
const obtenerDocentePorId = async (id) => {
    return await Docente.findByPk(id);
};
//actualizar docente
const actualizarDocente = async (id, data) => {
    const docente = await Docente.findByPk(id);
    if (!docente) {
        return null;
    }
    await docente.update(data);
    return docente;
};
    //eliminar docente
const eliminarDocente = async (id) => {
    const docente = await Docente.findByPk(id);
    if (!docente) {
        return null;
    }
    await docente.destroy();
    return true;
};
module.exports = {
    createDocente,
    ListarDocente,
    obtenerDocentePorId,
    actualizarDocente,
    eliminarDocente
};