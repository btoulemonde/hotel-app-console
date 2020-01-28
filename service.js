var presentation = require('./presentation.js');
function listerClients() {
    var request = require('request');
    request('https://btoulemonde-hotel-app.herokuapp.com/clients/', { json: true }, function (err, res, body) {
        if (err) {
            return console.log('Erreur', err);
        }
        console.log('Ok', body);
    });
}
function ajouterClient(nom, prenom) {
    
    var request = require('request');
    request('https://btoulemonde-hotel-app.herokuapp.com/clients/',{method: 'POST'} ,
    {body: '{"nom" : nom, "prenoms" : prenom}'},{ json: true }, function (err, res, body) { });
    
}
exports.ajouterClient = ajouterClient;
exports.listerClients = listerClients;