const app=require("./app")   

//setear el archivo de configuración. 
const dotenv = require("dotenv");
dotenv.config({path: 'back/config/config.env'})

const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciando en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})

    

    