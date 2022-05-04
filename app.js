require('dotenv').config(); // Se requiere a la configuración del archivo .env en 
                            // donde definiremos los datos de autenticación 

if(!process.env.TOKEN && !process.env.KEY){
    throw new Error('No hay configuración con Api Key y con Token');
}


let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN); // Objeto de trello para autenticarnos

let cardTitle = `Card Nueva desde código ${new Date()}` // Definimos texto con fecha para crear una card nueva

trello.addCard(cardTitle, "LaunchX Card Creada por Gabriel Torres desde código", "6272b12a422ab2203fbbd174", // Método del objeto de Trello para permitirnos crear una card
	function (error, trelloCard) { // Ojo el código mandado por paŕametros es el id del board que cree desde Postman, allí recuperamos el id
		if (error) {
			console.log('Could not add card:', error);
		}
		else {
			console.log('Added card:', trelloCard);
		}
	});