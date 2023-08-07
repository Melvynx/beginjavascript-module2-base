// Commence par importer les modules nécessaire
// import fs from 'fs/promises';
// import path from 'path';

// Importer ce fichier pour utiliser la fonction prompt
// import { prompt } from './helper.js';

// 🦁 Déclarer `journalDir` en utilisant `path.join`
// 💡 `process.cwd()` retourne le chemin du dossier courant
// 💡 Tu veux join le chemin du dossier courant avec journal

// 🦁 Créer une function ensureJournalDirExists qui essaie d'accéder au dossier journal
// 💡 Utiliser `fs.access` pour vérifier si le dossier existe
// 🦁 Si c'est pas le cas il créer le dossier (utilise try/catch pour gérer l'erreur)

// 🦁 Créer une function listEntries qui liste les fichiers du dossier journal
// 💡 Utiliser `fs.readdir` pour lister les fichiers

// 🦁 Créer une function addEntry qui prend en paramètre une date et un contenu
// 👉 Si la date est 'today' on utilise la date du jour
// 🦁 Utilise `path.join` pour créer le chemin du fichier grace à la date
// 🦁 Récupère le contenue du fichier si il existe et remplace le paramètre contenu par le contenu existant + le nouveau
// 💡 Utilise try/catch pour gérer l'erreur si le fichier existe pas
// 🦁 Utilise `fs.writeFile` pour écrire le contenu dans le fichier

// 🦁 Créer une function main qui appelle `ensureJournalDirExists`
// 🦁 Récupère les arguments de la ligne de commande avec `process.argv.slice(2)`
// 🦁 Utilise un switch pour appeler la bonne function en fonction du premier argument
// 🦁 En fonction du paramètre, appel addEntry ou listEntries

// 💡 Si aucun cas correspond tu peux afficher cette log :
/*
console.log(`
Usage:
- Pour lister les entrées : node journal.js list
- Pour ajouter une entrée : node journal.js add <date> <content>
`);
*/
