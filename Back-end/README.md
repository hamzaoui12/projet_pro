# Fonctionnement du backend

## Configuration du fichier .env

Dans le fichier .env, créer les variables suivantes :

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

## lancement du backend

se placer sur le dossier "Back-end" et lancer la commande :
node index.js
