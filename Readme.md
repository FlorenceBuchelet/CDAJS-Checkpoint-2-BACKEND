**Exercise**:

```
Checkpoint n°2 CDA JS - Backend

Le but de ce checkpoint est de vérifier tes connaissances en développement backend.

Commence par initialiser un nouveau repo git, il te servira à faire le rendu du checkpoint.

Crée un nouveau projet NodeJS Typescript.

Pour un meilleur confort de dev, utilise ts-node-dev.

Le but de cet exercice est de créer une API GraphQL avec Apollo Server et Typegraphql pour enregistrer et lire des pays avec leur code, leur nom et leur emoji.

Utilise une base de données SQLite et TypeORM en ORM.

Voici les packages dont tu auras besoin et leur version :
"dependencies": {
    "@apollo/server": "^4.10.2",
    "reflect-metadata": "^0.2.2",
    "sqlite3": "^5.1.7",
    "ts-node-dev": "^2.0.0",
    "type-graphql": "^2.0.0-beta.6",
    "typeorm": "^0.3.20"
  }

Crée une mutation qui prend en paramètres :

    un code (FR, BE, AN, ...),
    un nom (France, Belgique, Andorre, ...),
    un emoji (🇫🇷, 🇧🇪, 🇦🇩, ...),

et qui enregistre cette entrée en BDD.

Crée ensuite 2 queries :

    Une qui renvoie la liste de tous les pays (avec pour attributs, pour chaque pays, le code, le nom, l'emoji)
    Une autre qui prend en paramètre le code du pays et qui renvoie le pays en question

Et pour finir,

    Ajoute un code continent à la mutation d'ajout de pays et une query qui permet de récupérer tous les pays d'un continent
```
___

**Solution:**

1. Todo list
    - Initialize repo (node (`npm init -y`), dependencies, tsconfig (`npx tsc --init`), .gitignore, Readme)
    - Create entity (Country: id, code, name, emoji)
    - Initialize SQlite (dataSource)
    - Start Apollo
    - (optionnal) Initialize test data
    - Create Resolver
    - **Mutation** CreateCountry
    - **Query** GetAllCountries
    - **Query** GetCountryByCode
    - Add Continent to Entity and Mutation
    - **Query** GetCountriesByContinent
    - HTTP file with Queries and Mutation
    - (optionnal) Database cleanup function

We're keeping the database in project for the sake of the exam but we'd usualy add that file to the .gitignore, same goes for the http file with the graphQL queries.

We used REST Client to keep our queries in repo (`./http/queries.http`).

Fun fact: we didn't need to explicitly install GraphQL because TypeGraphQL and Apollo Server usually include it as a transitive dependency. How convenient!

Start command:
```sh
npm start
```