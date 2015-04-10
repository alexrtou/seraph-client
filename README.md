# seraph-client #

## Présentation ##

Ce petit dépôt de scripts pour [node.js](https://nodejs.org/) permet d'utiliser [Neo4j](http://neo4j.com/) au travers du client [seraph](https://github.com/brikteknologier/seraph) 
et [seraph-model](https://github.com/brikteknologier/seraph-model) 
 
Pour compléter la validation des modèles j'utilise : [Joi](http://github.com/hapijs/joi)

Et pour améliorer la lisibilité du code, dans l'enchainement d'appels asynchrones, j'utilise une Promise : [bluebird](https://github.com/petkaantonov/bluebird)

Accéssoirement, j'utilise [lodash](https://lodash.com/) pour toutes les manipulations d'objets.

## Comment l'utiliser ##

Récupérer les sources :

    git clone https://github.com/alexrtou/seraph-client.git
    cd seraph-client
	npm install


Définir les modèles dans `./models` ici `User.js` et `Group.js`

Et les référencer dans `./models/index.js`

Les différents exemples exécutables depuis la racine (`./`) :

* Créer un noeud : `node createNode.js`
* Créer un noeud et ses enfants (sans oublier les relations) : `node createNodesAndRelations.js`
* Créer un noeud, puis le modifier et enfin le supprimer : `node createUpdateDelete.js`
* lister tous les Users : `node findAllUsers.js`
* purger la base : `node purgeDb.js`