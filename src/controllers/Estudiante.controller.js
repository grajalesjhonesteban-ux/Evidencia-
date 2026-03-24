const estudianteService = require('../services/Estudiante.service');
const crear = async (req, res) =>{
    try{
        const estudiante = await estudianteService.createEstudiante(req.body);
        res.status(201).json(estudiante);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const listar = async (req, res) =>{
    const estudiantes = await estudianteService.ListarEstudiantes();
    res.json(estudiantes);
};

//consultar estudiante por id
const obtenerUno = async (req, res) => {
    try {
        const {id}=req.params;
        const estudiante = await estudianteService.obtenerEstudiantePorId(id);
        if (!estudiante) {
            return res.status(404).json({error: 'Estudiante no encontrado'});
        }
        res.json(estudiante);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
//actualizar estudiante
const actualizar = async (req, res) => {
    try{
        const {id} = req.params;
        const estudianteActualizado = await estudianteService.actualizarEstudiante(id, req.body);
        if (!estudianteActualizado) {
            return res.status(404).json({error: 'Estudiante no encontrado'});
        }
        res.json(estudianteActualizado);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

//eliminar estudiante
const eliminar = async (req, res) => {
    try {
        const {id} = req.params;
        const eliminar = await estudianteService.eliminarEstudiante(id);
        if (!eliminar) {
            return res.status(404).json({error: 'Estudiante no encontrado'});
        }
        res.json({message: 'Estudiante eliminado correctamente'});
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