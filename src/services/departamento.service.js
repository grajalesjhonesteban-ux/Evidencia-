const Departamento = require('../models/departamento.model');
const createDepartamento = async (data) => {
    return await Departamento.create(data);
};

const ListarDepartamento = async () => {
    return await Departamento.findAll();
};

//obtener por el id
const obtenerDepartamentoPorId = async (id) => {
    return await Departamento.findByPk(id);
};
//actualizar departamento
const actualizarDepartamento = async (id, data) => {
    const departamento = await Departamento.findByPk(id);
    if (!departamento) {
        return null;
    }
    await departamento.update(data);
    return departamento;
};
    //eliminar departamento
const eliminarDepartamento = async (id) => {
    const departamento = await Departamento.findByPk(id);
    if (!departamento) {
        return null;
    }
    await departamento.destroy();
    return true;
};
module.exports = {
    createDepartamento,
    ListarDepartamento,
    obtenerDepartamentoPorId,
    actualizarDepartamento,
    eliminarDepartamento
};