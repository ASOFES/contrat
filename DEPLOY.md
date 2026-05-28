# Mise en ligne rapide (gratuite) - Netlify

Ce site est statique (`index.html`, `style.css`, `app.js`), donc la mise en ligne est tres simple.

## Option 1 (la plus rapide)

1. Ouvre [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Glisse le dossier `ENGAGEMENT  DE CONTRAT` dans la page
3. Netlify genere un lien public en quelques secondes
4. Tu peux renommer le site dans les parametres Netlify

## Option 2 (avec GitHub)

1. Mets les fichiers sur un repository GitHub
2. Dans Netlify: **Add new site** -> **Import an existing project**
3. Choisis ton repository
4. Build command: laisser vide
5. Publish directory: `.`
6. Deploy

## Langue FR/EN

- Le selecteur de langue est en haut de la page.
- La langue choisie reste memorisee localement.

## Important

- La version actuelle stocke les donnees dans le navigateur (`localStorage`).
- Pour un vrai stockage partage entre plusieurs appareils, il faudra ajouter un backend + base de donnees.
