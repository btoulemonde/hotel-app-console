var presentation = require('./presentation.js');
var request = require('request');
var requestPromise = require('request-promise-native');
const listerClients = () => {
    return requestPromise('https://btoulemonde-hotel-app.herokuapp.com/clients/', { json: true })
        .then(clients => clients);
}

const ajouterClient = (nom, prenom) => {
    return requestPromise.post('https://btoulemonde-hotel-app.herokuapp.com/clients/', {
        json: {
            "nom": nom, "prenoms": prenom
        }
    })
}

const chercherNom = nom => {
    return requestPromise(`https://btoulemonde-hotel-app.herokuapp.com/clients?nom=${nom}`, { json: true })
        .then(clients => clients);

}


exports.ajouterClient = ajouterClient;
exports.listerClients = listerClients;
exports.chercherNom = chercherNom;