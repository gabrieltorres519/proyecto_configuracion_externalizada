require('dotenv').config(); // Se requiere a la configuración del archivo .env en 
                            // donde definiremos los datos de autenticación 

if(!process.env.TOKEN && !process.env.KEY){
    throw new Error('No hay configuración con Api Key y con Token');
}