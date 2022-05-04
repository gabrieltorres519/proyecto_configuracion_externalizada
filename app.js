require('dotenv').config(); // Se requiere a la configuración del archivo .env en 
                            // donde definiremos los datos de autenticación 

if(!process.env.TOKEN && !process.env.KEY){
    throw new Error('No hay configuración con Api Key y con Token');
}


let Trello = require("trello"); //Cliente de trello
let trello = new Trello(process.env.KEY, process.env.TOKEN); // Objeto de trello para autenticarnos

let cardTitle = `Card Nueva desde código ${new Date()}` // Definimos texto con fecha para crear una card nueva

trello.addCard(cardTitle, "LaunchX Card Creada por Gabriel Torres desde código", "6272b12a422ab2203fbbd175", // Método del objeto de Trello para permitirnos crear una card
	function (error, trelloCard) { // Ojo el código mandado por paŕametros es el id de la lista "lista de tareas", en el board BoardToAddCardFromCode creada desde Postman
        // para obtener el id de la lista se necesitó:
        //1. Crear el board nuevo desde postman con una HTTP request
        //2. Fijarse en el objeto que responde trello y encontrar el id del Board creado
        //3. Usar el id del Board para obtener los ids de las listas en el board con otra HTTP request
        //4. Reuperar el id de la lista en donde queremos crear la card 
        //5. Pegar el id en la HTTP request aquí en código
        // Para saber cómo realizar estas http requests en trello se vio la documentación de trello rest
		if (error) {
			console.log('Could not add card:', error);
		}
		else {
			console.log('Added card:', trelloCard);
		}
	});