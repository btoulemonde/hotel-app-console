var service = require('./service.js');
function start() {
    console.log('1. Lister les clients'),
        console.log('2 . Ajouter un client'),
        console.log('99. Sortir')

    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        outpt: process.stdout
    })
    rl.question('saisissez un numéro : ', function (saisie) {
        switch (saisie) {
            case '1':
                console.log('>> Liste des clients');
                
                service.listerClients();
                start();
                
            case '2':


                break;
            default:
                console.log('Au revoir');

                rl.close();

        }
    });
}


exports.start = start;
