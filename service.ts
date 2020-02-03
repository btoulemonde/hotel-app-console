import requestPromise from'request-promise-native';
import * as domains from './domains';







class Service{
    listerClients(){
        return requestPromise('https://btoulemonde-hotel-app.herokuapp.com/clients/', { json: true })
        .then((clients: any) => clients);
    }
    chercherNom(nom: String): any{
        return requestPromise(`https://btoulemonde-hotel-app.herokuapp.com/clients?nom=${nom}`, { json: true })
            .then((clients: any)=> clients)
            .catch((err: any) => console.log(err))
    }
    ajouterClient(nom: String, prenom: String): any{
        return requestPromise.post('https://btoulemonde-hotel-app.herokuapp.com/clients/', {
            json: {
                "nom": nom, "prenoms": prenom
            }
        })
    }
}
export {Service};

