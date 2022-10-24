const app=require("./app")  
const connectDatabase = require("./config/database");

//setear el archivo de configuración. 
const dotenv = require("dotenv");
dotenv.config({path: 'back/config/config.env'})

//Configurar la base de datos. 
connectDatabase();

//se esta probando como crear issues
           
//Llamamos al server.
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciando en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})

    

    