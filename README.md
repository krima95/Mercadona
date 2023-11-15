# Projet Mercadona - Application Web de Gestion des Promotions

**Auteur :** Karima El atlassi
**Dernière mise à jour :** 19/09/2023

Ce projet consiste en le développement d'une application web pour gérer les promotions des produits de Mercadona. L'objectif est de remplacer les tracts papier par une solution numérique plus respectueuse de l'environnement.

## Fonctionnalités

- Consultation des promotions en cours.
- Authentification des administrateurs.
- Ajout de promotions sur des produits.
- Gestion des produits avec libellé, description, prix, image et catégorie.
- Affichage des produits par catégorie.
- Calcul automatique du nouveau prix lors de la création d'une promotion.
- Mise en évidence des produits en promotion.

## Technologies Utilisées

- Front-end : Angular
- Back-end : Django (Python)
- Base de données : PostgreSQL

## Installation

1. Clonez ce dépôt : `git clone lien_vers_le_depot.git`
2. Accédez au répertoire du projet : `cd nom_du_projet`
3. Installez les dépendances : `npm install` pour le front-end, et suivez les instructions de votre backend pour l'installation des dépendances Python.
4. Configurez votre base de données PostgreSQL.
5. Lancez l'application front-end : `ng serve` (assurez-vous que votre backend est en cours d'exécution).

## Configuration

Pour configurer votre application, vous devez définir certaines variables d'environnement, notamment les informations de la base de données et les clés d'API (si nécessaire). Consultez le fichier `config.js` pour plus de détails.

## Utilisation

1. Accédez à l'application dans votre navigateur : `http://localhost:4200`.
2. Connectez-vous en tant qu'administrateur pour gérer les promotions.
3. Explorez les promotions en cours et les produits disponibles.

## Captures d'écran

![Accueil](https://github.com/krima95/Mercadona/assets/16536957/712a0219-5201-40cd-8f6a-b879cbce3e10)


![Page d'administration](lien_vers_capture2.png)

## Contributions

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez consulter notre guide de contribution [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

Ce projet est sous licence MIT. Pour plus d'informations, consultez le fichier [LICENSE.md](LICENSE.md).
