var service = require('./service.js');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    outpt: process.stdout
});

function startMenu() {
    var menu = `
        1. Liste des clients
        2. Ajouter un client
        99. Quitter
        `;
       console.log(menu);
    rl.question(menu, function (saisie) {
        
        console.log(`Vous avez saisi : ${saisie}`);

        switch (saisie) {
            case '1':
                console.log('>> Liste des clients');

                service.listerClients(function(data){
                    data.forEach(element => {
                        console.log(element.nom," ", element.prenoms)
                    });
                    startMenu();
                });
                
                break;
            case '2':


                break;
            default:
                console.log('Au revoir');

                rl.close();

        }
    });
}


exports.startMenu = startMenu;
