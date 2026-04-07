const Asignacion = require('../models/asignacion.model');
const createAsignacion = async (data) => {
    return await Asignacion.create(data);
};

const ListarAsignacion = async () => {
    return await Asignacion.findAll();
};

//obtener por el id
const obtenerAsignacionPorId = async (id) => {
    return await Asignacion.findByPk(id);
};
//actualizar asignacion
const actualizarAsignacion = async (id, data) => {
    const asignacion = await Asignacion.findByPk(id);
    if (!asignacion) {
        return null;
    }
    await asignacion.update(data);
    return asignacion;
};
    //eliminar asignacion
const eliminarAsignacion = async (id) => {
    const asignacion = await Asignacion.findByPk(id);
    if (!asignacion) {
        return null;
    }
    await asignacion.destroy();
    return true;
};
module.exports = {
    createAsignacion,
    ListarAsignacion,
    obtenerAsignacionPorId,
    actualizarAsignacion,
    eliminarAsignacion
};