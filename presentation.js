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
        3. chercher par nom
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
                rl.question("Saisissez un nom : ", function (saisie1) {
                    rl.question("Saisissez un prenom : ", function (saisie2) {

                        service.ajouterClient(saisie1, saisie2, function (ajouter) {
                            console.log(ajouter);
                            startMenu();
                        });
                    });

                });
                break;
            case '3':
                rl.question("Saisissez un nom : ", function (nom) {
                    service.chercherNom(nom, function (data) {

                        data.forEach(function (client) {
                            console.log(client.nom + " " + client.prenoms);
                        });
                        startMenu();
                    });

                });
                break;
            default:
                console.log('Au revoir');

                rl.close();

        }
    });
}


exports.startMenu = startMenu;
