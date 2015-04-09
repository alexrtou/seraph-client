# seraph-client #

## Présentation ##

Ce petit dépôt de scripts permet d'utiliser Neo4j au travers du client [seraph](https://github.com/brikteknologier/seraph) 


Il utilise les modèles proposés par [seraph-model](https://github.com/brikteknologier/seraph-model) 
 
Auquel il ajoute la validation par [Joi](http://github.com/hapijs/joi)

Et une utilisation à la manière Promise en utilisant [bluebird](https://github.com/petkaantonov/bluebird)

Ce package utilise également [lodash](https://lodash.com/) pour toutes les manipulations d'objets.

## Comment l'utiliser ##

Récupérer les sources :

    git clone https://github.com/alexrtou/seraph-client.git
    cd seraph-client

Définir les modèles dans `./models` ici `User.js` et `Group.js`

Et les référencer dans `./models/index.js`

Pour les utiliser, sous `./` :

    node index
    
ou

    node relation