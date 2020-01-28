function start() {
    console.log('1. Lister les clients'),
        console.log('99. Sortir')

    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        outpt: process.stdout
    })
    rl.question('saisissez un numéro : ', function (saisie) {
        if (saisie == 1) {
            console.log('>> Liste des clients');
            var service = require('./service.js');
            var libelleService = service.listerClients();
            start();
        } else if (saisie == 99) {
            console.log('Au revoir');

            rl.close();
        }
    })
}


exports.start = start;
