// Commence par importer les modules nécessaires
// import fs from 'fs/promises';
// import path from 'path';

// Importe ce fichier pour utiliser la fonction prompt
// import { prompt } from './helper.js';

// 🦁 Déclare `journalDir` en utilisant `path.join`
// 💡 `process.cwd()` retourne le chemin du dossier courant
// 💡 Tu veux joindre le chemin du dossier courant avec journal

// 🦁 Crée une fonction ensureJournalDirExists qui essaie d'accéder au dossier journal
// 💡 Utilise `fs.access` pour vérifier si le dossier existe
// 🦁 Si ce n'est pas le cas, il crée le dossier (utilise try/catch pour gérer l'erreur)

// 🦁 Crée une fonction listEntries qui liste les fichiers du dossier journal
// 💡 Utilise `fs.readdir` pour lister les fichiers

// 🦁 Crée une fonction addEntry qui prend en paramètre une date et un contenu
// 👉 Si la date est 'today', on utilise la date du jour
// 🦁 Utilise `path.join` pour créer le chemin du fichier grâce à la date
// 🦁 Récupère le contenu du fichier s'il existe et remplace le paramètre contenu par le contenu existant + le nouveau
// 💡 Utilise try/catch pour gérer l'erreur si le fichier n'existe pas
// 🦁 Utilise `fs.writeFile` pour écrire le contenu dans le fichier

// 🦁 Crée une fonction main qui appelle `ensureJournalDirExists`
// 🦁 Récupère les arguments de la ligne de commande avec `process.argv.slice(2)`
// 🦁 Utilise un switch pour appeler la bonne fonction en fonction du premier argument
// 🦁 En fonction du paramètre, appelle addEntry ou listEntries

// 💡 Si aucun cas ne correspond, tu peux afficher ce log :
/*
console.log(`
Usage:
- Pour lister les entrées : node journal.js list
- Pour ajouter une entrée : node journal.js add <date> <content>
`);
*/
