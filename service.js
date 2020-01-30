const presentation = require('./presentation.js');
const request = require('request');
const requestPromise = require('request-promise-native');



class Service{
    listerClients(){
        return requestPromise('https://btoulemonde-hotel-app.herokuapp.com/clients/', { json: true })
        .then(clients => clients);
    }
    chercherNom(nom){
        return requestPromise(`https://btoulemonde-hotel-app.herokuapp.com/clients?nom=${nom}`, { json: true })
            .then(clients => clients)
            .catch(err => console.log(err))
    }
    ajouterClient(nom, prenom){
        return requestPromise.post('https://btoulemonde-hotel-app.herokuapp.com/clients/', {
            json: {
                "nom": nom, "prenoms": prenom
            }
        })
    }
}

exports.Service = Service;
