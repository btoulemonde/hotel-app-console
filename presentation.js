var service = require('./service.js');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    outpt: process.stdout
});
var rl2 = readline.createInterface({
    input: process.stdin,
    outpt: process.stdout
});
var rl3 = readline.createInterface({
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

                service.listerClients(function (data) {
                    data.forEach(element => {
                        console.log(element.nom, " ", element.prenoms)
                    });
                    startMenu();
                });

                break;
            case '2':
                rl2.question("Saisir un nom", function(saisie1){
                    rl3.question("Saisir un prenom", function(saisie2){
                        var nom = saisie1;
                        var prenom = saisie2;
                        service.ajouterClient(nom, prenom);
                    });
                  
                })
                
                
                break;
            default:
                console.log('Au revoir');

                rl.close();

        }
    });
}


exports.startMenu = startMenu;
