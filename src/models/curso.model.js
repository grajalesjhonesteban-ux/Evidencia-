const{ DataTypes } = require('sequelize');
const sequelize = require('../config/database');
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
        capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false
     }  
},{
    tableName: 'cursos',
    timestamps: true
});
module.exports = Curso;