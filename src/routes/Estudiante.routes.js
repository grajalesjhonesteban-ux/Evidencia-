const express = require ('express');
const router = express.Router();
const estudianteController = require('../controllers/Estudiante.controller');
router.post('/',estudianteController.crear);
router.get('/',estudianteController.listar);
router.get('/:id',estudianteController.obtenerUno);
router.put('/:id',estudianteController.actualizar);
router.delete('/:id',estudianteController.eliminar);
module.exports =router;