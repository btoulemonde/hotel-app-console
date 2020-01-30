import readline from 'readline'
import * as serv from './service';
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const service = new serv.Service();


const listerClients = () => {
    service.listerClients()
        .then((clients: any[]) => {
            console.log('>> Liste des clients');
            clients.forEach((element: { nom: any; prenoms: any; }) => console.log(element.nom, element.prenoms));
            startMenu();
        })
        .catch((err: any) => console.log("Erreur =>", err));
}
const ajouterClient = () => {
    console.log('>> Ajouter un client');
    rl.question("Saisissez un nom : ", (saisie1: any) => {
        rl.question("Saisissez un prenom : ", (saisie2: any) => {

            service.ajouterClient(saisie1, saisie2)
                .then(() => {
                    console.log('le client a bien été ajouté en base');
                    startMenu();
                })
                .catch((err: any) => console.log("Erreur =>", err));
        });
    });
}
const chercherNom = () => {
    rl.question("Saisissez un nom : ", (nom: any) => {
        service.chercherNom(nom)
            .then((clients: any[]) => {
                console.log(`>>liste des clients dont le nom est ${nom}`);
                clients.forEach((element: { nom: any; prenoms: any; }) => console.log(element.nom, element.prenoms));
                startMenu();
            })
            .catch((err: any) => err);
    });
}
const quitter = () => {
    console.log('Au revoir');
    rl.close();
}

var options:any = {
    '1': { libelle: 'Liste des clients', execFn: listerClients },
    '2': { libelle: 'Ajouter un client', execFn: ajouterClient },
    '3': { libelle: 'Chercher par nom', execFn: chercherNom },
    '99': { libelle: 'Quitter', execFn: quitter }
};

const startMenu = () => {
    let menu = 'Veuillez faire un choix : \n'
    for (const prop in options) {
        menu += prop + '. ' + options[prop].libelle + '\n';
    }
    rl.question(menu, (choix: string | number) => {
        options[choix].execFn();
    });
}

export {startMenu };
