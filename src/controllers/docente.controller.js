const docenteService = require('../services/docente.service');
const crear = async (req, res) =>{
    try{
        const docente = await docenteService.createDocente(req.body);
        res.status(201).json(docente);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const listar = async (req, res) =>{
    const docentes = await docenteService.ListarDocente();
    res.json(docentes);
};

//consultar docente por id
const obtenerUno = async (req, res) => {
    try {
        const {id}=req.params;
        const docente = await docenteService.obtenerDocentePorId(id);
        if (!docente) {
            return res.status(404).json({error: 'Docente no encontrado'});
        }
        res.json(docente);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
//actualizar docente
const actualizar = async (req, res) => {
    try{
        const {id} = req.params;
        const docenteActualizado = await docenteService.actualizarDocente(id, req.body);
        if (!docenteActualizado) {
            return res.status(404).json({error: 'Docente no encontrado'});
        }
        res.json(docenteActualizado);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

//eliminar docente
const eliminar = async (req, res) => {
    try {
        const {id} = req.params;
        const eliminar = await docenteService.eliminarDocente(id);
        if (!eliminar) {
            return res.status(404).json({error: 'Docente no encontrado'});
        }
        res.json({message: 'Docente eliminado correctamente'});
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