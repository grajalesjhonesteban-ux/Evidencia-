const asignacionService = require('../services/asignacion.service');
const crear = async (req, res) =>{
    try{
        const asignacion = await asignacionService.createAsignacion(req.body);
        res.status(201).json(asignacion);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const listar = async (req, res) =>{
    const asignaciones = await asignacionService.ListarAsignacion();
    res.json(asignaciones);
};

//consultar asignacion por id
const obtenerUno = async (req, res) => {
    try {
        const {id}=req.params;
        const asignacion = await asignacionService.obtenerAsignacionPorId(id);
        if (!asignacion) {
            return res.status(404).json({error: 'asignacion no encontrado'});
        }
        res.json(asignacion);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
//actualizar asignacion
const actualizar = async (req, res) => {
    try{
        const {id} = req.params;
        const asignacionActualizado = await asignacionService.actualizarAsignacion(id, req.body);
        if (!asignacionActualizado) {
            return res.status(404).json({error: 'asignacion no encontrado'});
        }
        res.json(asignacionActualizado);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

//eliminar asignacion
const eliminar = async (req, res) => {
    try {
        const {id} = req.params;
        const eliminar = await asignacionService.eliminarAsignacion(id);
        if (!eliminar) {
            return res.status(404).json({error: 'asignacion no encontrado'});
        }
        res.json({message: 'asignacion eliminado correctamente'});
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