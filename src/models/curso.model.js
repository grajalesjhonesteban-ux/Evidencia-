const{ DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { obtenerEstudiantePorId } = require('../services/Estudiante.service');
const Estudiante = require('./Estudiante.models');
const Curso = sequelize.define('Curso',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_del_curso:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
       duracion: {
        type: DataTypes.STRING,
        allowNull: false
    },
       estudianteId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:Estudiante,
            key: 'id'
        }, onDelete: 'CASCADE'
  }
},{
    tableName: 'cursos',
    timestamps: true
});
module.exports = Curso;