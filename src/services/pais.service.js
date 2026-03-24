const Pais = require('../models/pais.model');
const createPais = async (data) => {
    return await Pais.create(data);
};

const ListarPais = async () => {
    return await Pais.findAll();
};

//obtener por el id
const obtenerPaisPorId = async (id) => {
    return await Pais.findByPk(id);
};
//actualizar pais
const actualizarPais = async (id, data) => {
    const pais = await Pais.findByPk(id);
    if (!pais) {
        return null;
    }
    await pais.update(data);
    return pais;
};
    //eliminar pais
const eliminarPais = async (id) => {
    const pais = await Pais.findByPk(id);
    if (!pais) {
        return null;
    }
    await pais.destroy();
    return true;
};
module.exports = {
    createPais,
    ListarPais,
    obtenerPaisPorId,
    actualizarPais,
    eliminarPais
};