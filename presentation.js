var service = require('./service.js');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const listerClients = () => {
    service.listerClients()
        .then(clients => {
            console.log('>> Liste des clients');
            clients.forEach(element => console.log(element.nom, element.prenoms));
            startMenu();
        })
        .catch(err => console.log("Erreur =>", err));
}
const ajouterClient = () => {
    console.log('>> Ajouter un client');
    rl.question("Saisissez un nom : ", saisie1 => {
        rl.question("Saisissez un prenom : ", saisie2 => {

            service.ajouterClient(saisie1, saisie2)
                .then(() => {
                    console.log('le client a bien été ajouté en base');
                    startMenu();
                })
                .catch(err => console.log("Erreur =>", err));
        });
    });
}
const chercherNom = () => {
    rl.question("Saisissez un nom : ", nom => {
        service.chercherNom(nom)
            .then((clients) => {
                console.log(`>>liste des clients dont le nom est ${nom}`);
                clients.forEach(element => console.log(element.nom, element.prenoms));
                startMenu();
            })
            .catch(err => console.log("Erreur =>", err));
    });
}
const quitter = () => {
    console.log('Au revoir');
    rl.close();
}

var options = {
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
    rl.question(menu, (choix) => {
        options[choix].execFn();
    });
}

exports.startMenu = startMenu;
