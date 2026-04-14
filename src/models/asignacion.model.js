const{ DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const estudiantes = require('./Estudiante.models');
const Docente = require('./docente.model');
const Curso = require('./curso.model');
const Asignacion = sequelize.define('Asignacion',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha_asignacion:{
        type: DataTypes.DATE,
        allowNull: false
    },
    estudianteId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:estudiantes,
            key: 'id'
        }, onDelete: 'CASCADE'
    },
    docenteId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:Docente,
            key: 'id'
        }, onDelete: 'CASCADE'
     },
    cursoId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:Curso,
            key: 'id'
        }, onDelete: 'CASCADE'
    }
},{
    tableName: 'asignaciones',
    timestamps: true
});
module.exports = Asignacion;