const express =require('express');
const estudianteRoutes = require('./routes/Estudiante.routes');
const paisRoutes = require('./routes/pais.routes');
const departamentoRoutes = require('./routes/departamento.routes');
const app =express();

app.use(express.json());

app.use('/api/estudiantes',estudianteRoutes);
app.use('/api/paises',paisRoutes); 
app.use('/api/departamentos',departamentoRoutes);   
app.get('/',(req,res)=>{
    res.send('🆗 API funcionando correctamente')

});
const PORT=3000;
/* app.listen(PORT,()=>{
    console.log("Servidor activo")
}); */
module.exports = app;