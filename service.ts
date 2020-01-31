import requestPromise from'request-promise-native';




class Service{
    listerClients(){
        return requestPromise('https://btoulemonde-hotel-app.herokuapp.com/clients/', { json: true })
        .then((clients: any) => clients);
    }
    chercherNom(nom: any){
        return requestPromise(`https://btoulemonde-hotel-app.herokuapp.com/clients?nom=${nom}`, { json: true })
            .then((clients: any)=> clients)
            .catch((err: any) => console.log(err))
    }
    ajouterClient(nom: any, prenom: any){
        return requestPromise.post('https://btoulemonde-hotel-app.herokuapp.com/clients/', {
            json: {
                "nom": nom, "prenoms": prenom
            }
        })
    }
}
export {Service};

