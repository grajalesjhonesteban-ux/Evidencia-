const express = require ('express');
const router = express.Router();
const asignacionController = require('../controllers/asignacion.controller');
router.post('/',asignacionController.crear);
router.get('/',asignacionController.listar);
router.get('/:id',asignacionController.obtenerUno);
router.put('/:id',asignacionController.actualizar);
router.delete('/:id',asignacionController.eliminar);
module.exports =router;