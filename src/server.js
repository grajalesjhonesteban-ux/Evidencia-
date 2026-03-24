const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

sequelize.sync()
.then(() =>{
    console.log('base de datos conectada');
    app.listen(PORT,()=>
        console.log(`Servidor corriendo en http://localhost:${PORT}`));
})
.catch(err =>console.error('Error DB:', err));