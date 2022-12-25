# Sprint n°1 - Amina Merina Eric Nora

## Front-End

Après avoir fait des recherches sur les langages à utiliser pour le front on a décider de partir sur du Nextjs car c'est :

- un Framework qu'on apprend en cours et ou en est plus alaise
- une bonne documentation et une tres bonne faciliter de recherche
- un cadre d'application construit sur la base de React pour aider les développer a créé des applications hautes performances et des sites web statiques ultra-rapide cela signifie qu'il n'y a aucune connexion directe aux bases de données ou aux informations utilisateur ou a tous les informations sensibles.
- avec nextjs tous les sites web et les applications sont accessibles depuis n'importe quel appareil afin que nous puissions proposer nos services et produits via différents canaux de vente.

## avis personel (Merina)

### Mission des 2 semiane :

Durant c'est deux semaines de travail chaque membre du groupe avait une tache à faire pour ma part j'ai créé un projet sur github avec une branche principale et 2 sous branche maitre et Devlop et ensuite créé le projet nextjs et le push sur le projet que j'ai créé sur git

### Avis (positifs/négatifs):

le Nextjs c'est un framwork qui n'est pas facile pour moi et que je metrise pas trop mais le fait qu'on le fait en cours et qu'il y a beaucoup de pratique je pense que ça va m'aider pour avancer dans le projet.

///////////////////

## Choix du stack technique - Nora

# Framework CSS:

## Tailwind

###### Notre choix du Css s'est porté sur Tailwind. Car grace à Tailwind, on est complètement libre. Il n'y a pas de composant déjà fait, on doit les créé nous-mêmes et pas ses sousmettre à un composant qui n'est pas de la bonne taille, couleurs, etc . On peut vraiment créer des composants sur mesure à notre site et qui nous plaisent.

###### Deuxièmement, Tailwind est très simple à comprendre et à utiliser. En effet, le nom des classes permet de comprendre très rapidement son utilité. De plus il y a une bonne documentation très complète, une bonne communauté ce qui rend facile la recherche sur Internet. Et donc, on trouve facilement la réponse à nos erreurs.

###### Troisièmement, Tailwind permet à notre site d'être responsive c'est-à-dire qu'il peut s'adapter à un écran de tablettes, téléphones et bureaux. En effet, Tailwind nous permet de prefenir des taille d'ecran en fonction de l'appareil utilisé.Par exemple, en utilisant ces breakpoints: all,sm,md,lg,xl on pourra prédéfinir une taille de caractère.Si l'utilisateur est sur un ecran de smartphone, le breakpoints est sm et donc la taille de caractere sera plus petite. ###### Tailwind, dispose d'un système du design intégré. C'est-à-dire qu'il propose un design par défaut et des valeurs par défaut lors de la création de classe ( ex: couleurs, taille).

###### Enfin, chaque membre du groupe dispose de connaissance concernant Tailwind. D'autre part nous l'utilisons et l'apris en cours.

[Documentation Tailwind](https://v2.tailwindcss.com/docs)

# Système de gestion de bases de données relationnelles:

## MySQL

###### Notre choix du SGBDR (Système de gestion de bases de données relationnelles) c'est porté sur My sql. Nous avons choisi My Sql, car chacun de nous dispose de 2 années d'expérience dessus, sait comment l'utiliser et le comprend très bien. C'est une base de données gratuites et qui permet de déployer des projets rapidement. Dans le groupe chaque membre sait utiliser l'interface d'administration des bases de données, Phpmyadmin.

###### MySQL et Phpmyadmin disposent d'une grande communauté connue avec des utilisateurs partout dans la planète. De plus, il y a une documentation très complète et comprehensive.

[Documentation MySQL](https://sql.sh/cours/select)

# Authentification - Access token :

## JSON Web Token (JWT)

###### Pour l'authentification des utilisateurs nôtres choix s'est porté sur JSON Web Token (JWT). En effet, JWT permet que l'échange des données privées soit sécurisé entre le back et le front. Il n'y a pas besoin de BDD pour enregistrer la session ce qui permet de réduire le nombre de bases de données, ce qui implique un temps de réponse plus rapide.

###### JSON Web Token (JWT) dispose d'une grande communauté et une bonne documentation qui faciletera la compréhension. Avec JSON Web Token (JWT) les données ne sont plus stockées dans le serveur mais sur un token qui permet de réduire le temps de réponse et d'augmenter la sécurité car les informations ne sont pas visible directement sur le serveur.

[Documentation JSON Web Token](https://jwt.io/introduction/)

# Avis personelle sur le Sprint (Nora):

###### Pour ces deux semaines de sprint, j'ai contribué à la conception de la base de données. J'ai lu le cahier des charges et au fur et à mesure j'ai relevé les tables à mettre dans la BDD. De plus, j'ai contribué à la planification des réunions pour se mettre d'accord sur le choix du stack tech et la répartition des explications du stack (qu'elle membre du groupe allait expliquer quel choix). Tous ensemble, nous avons lu le cahier des charges et décider qu'elle seront les features majeures.

###### De plus, j'ai contribué au choix d'outils de gestion de projets tels que Trello, Notion et la conception du diagramme de Gantt. Pendant, ces deux semaines j'ai effectué quelque recherche pour mettre à jour sur les outils que je ne connaissais pas assez.

###### Ce qui m'a plus avec le groupe, c'est qu'on se comprend et qu'on communique facilement ce qui permet d'avoir des réunions courtes mais très utiles et productives. En ce qui me concerne, il faut que j'améliore ma méthode de recherche et de debugs. Il faut que j'établisse une méthode qui me permettra de perdre moins de temps lors de mes recherches. De plus, il faut que je m'organise davantage dans mes devoirs. Afin de ne pas etre submerger.

[Brouillon Conception BDD](https://supdevinci.sharepoint.com/:w:/r/sites/ProjetPro-EricNoraMerinaAmina/_layouts/15/Doc.aspx?sourcedoc=%7B7A2B6490-2B94-4B5D-BCF9-B4574CF96C4C%7D&file=NORA-ConceptionBDD.docx&action=default&mobileredirect=true)

///////////////////

## API

### Type d’API

#### API REStful

Les API REST sont le type d’API le plus populaire dans les applications modernes (environ 80% des API utilisées sont des API REST), elles sont constituées d’un ensemble de normes permettant de pouvoir communiquer des données.

Les API RESTful se basent sur un protocole http utlisié par le web, ce qui nous permettra de pouvoir envoyer et recevoir des requêtes http avec notre API.

### Technologie utilisée pour la création des APIs

#### Express JS

Nous comptons utiliser le Framework node.js afin de constituer le backend de l’application, malheureusement node.js ne permet pas de pouvoir assurer la mise en place d’API dû à son incapacité à pouvoir envoyer et recevoir des requêtes http.
C’est pour cette raison que nous aurons besoin d’utiliser une librairie supplémentaire permettant de constituer des API, pour cela nous avons choisis Express.js.

Express JS :

- Permet de créer des API REST de manière simple car il a été pensé pour
- Une utilisation framework fonctionne avec node JS
- Peut supporter des applications web hybrides (mobile et web)

[information complémentaires sur expressJS](https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js#:~:text=Express%20is%20a%20node%20js,helps%20manage%20servers%20and%20routes.)

## Avis personel (Eric) :

Durant ce deux semaines, nous avons organisés des réunions en vocale afin de nous répartir les tâches sur la durée du sprint. Il a été convenu que je m'occupe de la partie API et des recherches associées.
Les réunions étaient nombreuses mais courtes, ce qui nous a permit de toujours pouvoir réorienter nos recherches et comprendre au mieux le but de la mission.

Je ne pense pas que les API seront quelques chose de trop compliqué à mettre en place, j'ai pu trouver, lors de mes recherches, assez de tutoriels et de documentation afin que la mise en place des API ne soient pas trop compliquée.

## Back-end (Amina)

Après avoir étudier les différentes techno qui s’offraient à nous pour notre back end , nous avons finis par choisir Node.Js.

- Node.Js est un excellent choix pour les API Rest , elles sont utilisés pour les échanges de données entre serveurs et clients. 
- L’un des avantages de la technologie Node.Js est la possibilité d’exécuter plusieurs requêtes vers le serveur simultanément.
- Cette technologie offre des performances super aux applications web qui doivent chercher des informations et exécuter une multitude de requêtes. 
- De plus, il permet une bonne Stack technique, et par ailleurs aussi une réduction de temps.

### Mission des 2 semiane :

Durant c'est deux semaines de travail chaque membre du groupe a du travailler sur differente tache à faire pour ma part j'ai créé un trello et me suis occuper de la gestion du projet, ainsi que la conception des maquettes du site sur figma.

### Avis Amina (positifs/négatifs):

Apres avoir choisis les techno pour ce projet je pense pouvoir en apprendre davantage suite aux connaissances aquise l'année passé.
