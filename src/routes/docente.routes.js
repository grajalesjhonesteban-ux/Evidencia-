const express = require ('express');
const router = express.Router();
const docenteController = require('../controllers/docente.controller');
router.post('/',docenteController.crear);
router.get('/',docenteController.listar);
router.get('/:id',docenteController.obtenerUno);
router.put('/:id',docenteController.actualizar);
router.delete('/:id',docenteController.eliminar);
module.exports =router;