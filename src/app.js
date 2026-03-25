const express =require('express');
const estudianteRoutes = require('./routes/Estudiante.routes');
const cursoRoutes = require('./routes/curso.routes');
const docenteRoutes = require('./routes/docente.routes');
const app =express();

app.use(express.json());

app.use('/api/estudiantes',estudianteRoutes);
app.use('/api/cursos',cursoRoutes); 
app.use('/api/docentes',docenteRoutes);   
app.get('/',(req,res)=>{
    res.send('🆗 API funcionando correctamente')

});
const PORT=3000;
/* app.listen(PORT,()=>{
    console.log("Servidor activo")
}); */
module.exports = app;