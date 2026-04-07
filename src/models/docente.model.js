const{ DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Docente = sequelize.define('Docente',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_docente:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: 'docentes',
    timestamps: true,
    indexes:[
        {unique:true,
        fields:['nombre_docente']
    }
    ]
});
module.exports = Docente;