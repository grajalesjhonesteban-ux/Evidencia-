const Curso = require('../models/curso.model');
const createCurso = async (data) => {
    return await Curso.create(data);
};

const ListarCurso = async () => {
    return await Curso.findAll();
};

//obtener por el id
const obtenerCursoPorId = async (id) => {
    return await Curso.findByPk(id);
};
//actualizar curso
const actualizarCurso = async (id, data) => {
    const curso = await Curso.findByPk(id);
    if (!curso) {
        return null;
    }
    await curso.update(data);
    return curso;
};
    //eliminar curso
const eliminarCurso = async (id) => {
    const curso = await Curso.findByPk(id);
    if (!curso) {
        return null;
    }
    await curso.destroy();
    return true;
};
module.exports = {
    createCurso,
    ListarCurso,
    obtenerCursoPorId,
    actualizarCurso,
    eliminarCurso
};