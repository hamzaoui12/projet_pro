# Lancement du backend

## Installation des dépendances et paquets

Dans le terminal, utiliser la commandes :
"npm install"

## Configuration du fichier .env

Créer un fichier .env

Dans ce fichier .env, créer les variables suivantes :

PORT = <port utilisé par le backend>
DB_PORT = <port sur lequel la base de donnée tourne>
DB_CLIENT = <le client utilisé (mysql2)>
DB_HOST = <l'adresse IP sur laquel tourne le back (lovahost pour ce qui tourne en local)>
DB_CONNECTION_USER = <username utilisateur de la BDD>
DB_PASSWORD = <mot de passe utilisateur de la BDD>
DB_CONNECTION_DATABASE = <nom de la BDD utilisée>
PSW_SALT = <sel des mot de passe (Integer)>
PSW_ITERATIONS = <nombre iterations du sel (Integer)>
PSW_KEY = <clef des mots de passe (Integer)>
PSW_DIGEST = <methode de hashing utilisée>
JWT_SECRET = <clef secrète du Json web token (String)>
JWT_EXPIRE = <temps de validité du token (1 min, 1 day, 1 week...)>

## Lancement des migrations

Dans le terminal utiliser la commande "npx --knex migrate:latest"
Si un message d'erreur apparait, essayer la commande "npx knex --esm migrate:latest"

## Lancement du SEED

Dans le terminal, utiliser la commande : "node ./db/seed.js"
puis ctrl+C après quelques secondes

## Lancement du backend

Se placer sur le dossier "Back-end" et lancer la commande :
node index.js

### Pour pouvoir utiliser le .env en front ###

### npm install dotenv
#### importez la bibliothèque dotenv et appelez sa méthode config() > require('dotenv').config();
#### utiliser les variables de .env comme ça : `${process.env.REACT_APP_URL_ROUTE}/sign-up`
#### creer un fichier dans .env à la racine du dossier Front avec à l'interieur : ##### REACT_APP_URL_ROUTE = 'http://localhost:3307'