const{ DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Curso = require('./curso.model');
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
  cursoId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:Curso,
            key: 'id'
        }, onDelete: 'CASCADE'
  }
    

},{
    tableName: 'docentes',
    timestamps: true,
    indexes:[
        {unique:true,
        fields:['nombre_docente','cursoId']
    }
    ]
});
module.exports = Docente;