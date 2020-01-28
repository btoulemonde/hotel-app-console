function listerClients(){
    var request = require('request');
    request('https://btoulemonde-hotel-app.herokuapp.com/clients/', {json : true}, function(err, res,body){
        if(err){
            return console.log('Erreur',err);
        }
        console.log('Ok', body);
    });
}
exports.listerClients = listerClients;