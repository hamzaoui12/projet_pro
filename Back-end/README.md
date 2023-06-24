# Lancement du backend

## Installation des dépendances et paquets

Dans le terminal, utiliser la commandes :
"npm install"

## Configuration du fichier .env

Créer un fichier .env

Dans ce fichier .env, créer les variables suivantes :
STRIPE_SECRET_TEST=<clée secret>
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
JWT_EXPIRE = <temps de validité du token (1m, 1d, 1w...)>

## Lancement des migrations

Dans le terminal utiliser la commande "npx --knex migrate:latest"
Si un message d'erreur apparait, essayer la commande "npx knex --esm migrate:latest"

## Lancement du seed

Dans le terminal utiliser la commande "npx --knex seed:run"
Si un message d'erreur apparait, essayer la commande "npx knex --esm seed:run"

## Lancement du backend

Se placer sur le dossier "Back-end" et lancer la commande :
node index.js
