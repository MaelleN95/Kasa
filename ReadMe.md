# Kasa - Développement d'une application web avec React

![banniere-kasa](https://github.com/user-attachments/assets/7e9e86ff-6333-47b1-956a-9275ad9080d1)

## Sommaire

* [Description](#description)
* [Fonctionnalités](#fonctionnalités)
* [Installation](#installation)
* [Structure du projet](#structure-du-projet)
* [Technologies utilisées](#technologies-utilisées)
* [Note de synthèse](#note-de-synthèse)
  * [Spécifications fonctionnelles](#spécifications-fonctionnelles)
  * [Spécifications techniques](#spécifications-techniques)
* [Screenshots](#screenshots)
  * [Page d'accueil](#page-daccueil)
  * [Page de location](#page-de-location)
  * [Page à propos](#page-à-propos)
* [Auteur](#auteur)

## Description

Le projet Kasa consiste à développer une application web de location d’appartements entre particuliers. Cette refonte complète du site existant est réalisée avec **React** pour le front-end. L'objectif est de créer une interface moderne et responsive en suivant les maquettes fournies sur Figma et en respectant les contraintes techniques définies.

Ce projet fait partie de ma formation sur OpenClassrooms pour le parcours [Développeur Web](https://openclassrooms.com/fr/paths/899-developpeur-web).

## Fonctionnalités

- Affichage des annonces de logements
- Navigation à travers les pages du site avec **React Router** (accueil, détails des propriétés, ...)
- Galerie d'images avec navigation (précédent/suivant)
- Collapsible sections pour les informations supplémentaires
- Gestion d'erreurs (redirection vers la page 404 en cas d'URL invalide)
- Interface responsive adaptée aux écrans desktop, tablette et mobile

## Installation

1. Clonez le repository :
   ```bash
    git clone https://github.com/MaelleN95/Kasa.git
2. Installez les dépendances :
   ```bash
   npm install
3. Lancez l'application localement :
   ```bash
   npm start
4. L'application sera disponible à l'adresse suivante : `http://localhost:3000/Kasa`.

## Structure du projet

- `public/` : Contient les fichiers publics et les ressources de l'application
- `src/` : Contient le code source React
- `src/components/` : Composants réutilisables comme Banner, Collapse, etc.
- `src/pages/` : Différentes pages de l'application (Home, About, Error, etc.)
- `src/styles/` : Fichiers Sass pour la gestion des styles
- `src/data/` : Fichier JSON contenant les données de démonstration
- `src/App.js` : Point d’entrée de l’application
- `src/Routing.js` : Gestion des routes via React Router

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour la création d’interfaces utilisateur
- **React Router** : Gestion des routes et de la navigation dans l’application
- **Sass** : Préprocesseur CSS pour une meilleure organisation des styles

## Note de synthèse

### Spécifications fonctionnelles

| **Fonctionnalité**         | **Description**                                                                                                          |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------|
| **Navigation dynamique**    | Utilisation de **React Router** pour la navigation entre les pages d'accueil, de propriété, et d'erreur.                 |
| **Galerie d'images**        | Système de carrousel pour défiler les images des propriétés. Le défilement boucle de la dernière image à la première et vice-versa. |
| **Composant Collapse**      | Affichage dynamique d’informations supplémentaires grâce au composant Collapse (menu déroulant).                      |
| **Page d'erreur 404**       | Redirection automatique vers une page d'erreur en cas de route non valide.                                               |

### Spécifications techniques

| **Critères techniques**    | **Détails**                                                                                                              |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------|
| **Design**                 | Les maquettes sont disponibles sur [Figma](https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1&node-type=canvas) pour les versions desktop, tablette, et mobile. Le site doit respecter le design responsive fourni. |
| **Routing**                | Gestion du routing avec **React Router**.                                                                                 |
| **Préprocesseur CSS**      | Utilisation de **Sass** pour structurer les styles en fichiers modulaires et faciliter la maintenance du code.             |
| **Gestion des erreurs**    | Si l'utilisateur accède à une route invalide, redirection vers une page d'erreur 404.                                  |
| **Responsivité**           | Le site doit être responsive et s’adapter aux tailles d’écran desktop, tablette et mobile.                                 |
| **Accessibilité**          | Le site doit respecter les bonnes pratiques d'accessibilité (balises sémantiques, etc.).                                   |

## Screenshots

### Page d'accueil

#### Desktop
|![page-daccueil](https://github.com/user-attachments/assets/dec5e8eb-155f-4dfa-8014-f6341cc47754)|
|-|
#### Tablette
![page-daccueil2](https://github.com/user-attachments/assets/51640e85-ef05-4343-8f28-4309511a0cea)|
|-|
#### Mobile
|![page-daccueil3](https://github.com/user-attachments/assets/8ab52492-00bf-45ab-8849-21e287c69510)|
|-|

### Page de location

#### Desktop
|![page-de-location](https://github.com/user-attachments/assets/c31e9c4f-1e5b-447a-a30a-d3a653bd2364)|
|-|
#### Tablette
|![page-de-location2](https://github.com/user-attachments/assets/c7c94cff-6130-45aa-ac0a-a4a7af412be8)|
|-|
#### Mobile
|![page-de-location3](https://github.com/user-attachments/assets/c38190ba-511c-4aeb-a3ca-0bbe462b2eb5)|
|-|


### Page à propos

#### Desktop
|![page-a-propos](https://github.com/user-attachments/assets/a76550ee-9d17-4e7b-a2b0-45a59a3cb5df)|
|-|
#### Tablette
|![page-a-propos2](https://github.com/user-attachments/assets/262619ad-9b6d-4792-8b91-dfd0ac01b48e)|
|-|
#### Mobile
|![page-a-propos3](https://github.com/user-attachments/assets/46087a75-955c-4d84-a048-67fad539681a)|
|-|


## Auteur

- [Maëlle Nioche](https://www.linkedin.com/in/maelle-nioche/)
