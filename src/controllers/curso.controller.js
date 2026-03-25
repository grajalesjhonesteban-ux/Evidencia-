const cursoService = require('../services/curso.service');
const crear = async (req, res) =>{
    try{
        const curso = await cursoService.createCurso(req.body);
        res.status(201).json(curso);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const listar = async (req, res) =>{
    const cursos = await cursoService.ListarCurso();
    res.json(cursos);
};

//consultar curso por id
const obtenerUno = async (req, res) => {
    try {
        const {id}=req.params;
        const curso = await cursoService.obtenerCursoPorId(id);
        if (!curso) {
            return res.status(404).json({error: 'curso no encontrado'});
        }
        res.json(curso);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
//actualizar curso
const actualizar = async (req, res) => {
    try{
        const {id} = req.params;
        const cursoActualizado = await cursoService.actualizarCurso(id, req.body);
        if (!cursoActualizado) {
            return res.status(404).json({error: 'curso no encontrado'});
        }
        res.json(cursoActualizado);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

//eliminar curso
const eliminar = async (req, res) => {
    try {
        const {id} = req.params;
        const eliminar = await cursoService.eliminarCurso(id);
        if (!eliminar) {
            return res.status(404).json({error: 'curso no encontrado'});
        }
        res.json({message: 'curso eliminado correctamente'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports ={
    crear,
    listar,
    obtenerUno,
    actualizar,
    eliminar
};