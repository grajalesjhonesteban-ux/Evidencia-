const{ DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Estudiante = sequelize.define('Estudiante',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    edad:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

},{
    tableName: 'estudiantes',
    timestamps: true
});
module.exports = Estudiante;