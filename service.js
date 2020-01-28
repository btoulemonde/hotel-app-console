var presentation = require('./presentation.js');
var request = require('request');
function listerClients(callBack) {

    request('https://btoulemonde-hotel-app.herokuapp.com/clients/', { json: true }, function (err, res, data) {

        callBack(data);
    });
}
function ajouterClient(nom,prenom) {
    
    request.post(
        'https://btoulemonde-hotel-app.herokuapp.com/clients',
        {
            json: {
                "nom": nom, "prenoms":prenom
            }
        },
        (error, res, body) => {
            if (error) {
                console.error(error)
                return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log(body)
            
        });
    
}

function chercherNom(nom,callBack){
    request('https://btoulemonde-hotel-app.herokuapp.com/clients?nom='+nom, { json: true }, function (err, res, data) {

        callBack(data);
    });
}

exports.ajouterClient = ajouterClient;
exports.listerClients = listerClients;
exports.chercherNom = chercherNom;