function start() {
    console.log('1. Lister les clients'),
        console.log('99. Sortir')
    
        var readline = require('readline');
        var rl = readline.createInterface({
            input : process.stdin,
            outpt : process.stdout
        })
        rl.question('saisissez un numéro : ', function(saisie){
            if(saisie == 1){
                console.log('>> Liste des clients');
                listerClients();
                start();
            }else if(saisie == 99){
                console.log('Au revoir');
                rl.close();
            }
        })
}
function listerClients(){
    var request = require('request');
    request('https://btoulemonde-hotel-app.herokuapp.com/clients/', {json : true}, function(err, res,body){
        if(err){
            return console.log('Erreur',err);
        }
        console.log('Ok', body);
    });
}
exports.start = start;
