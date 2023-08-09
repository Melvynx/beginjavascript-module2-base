# JournalCLI - Async / Await

Dans cette exercice on retourne au source : **NodeJS** et le terminal !

On va créer cette fois un CLI qui va permettre de gérer un journal de bord.

On pourra faire des commandes, comme `git add` mais ici ce sera nos propres commandes :

```bash
$ node script.js add today "J'ai travailler sur le cours BeginJavaScript"
Votre entrée a été ajoutée !
```

Et après cette commande il y a un nouveau fichier qui à été ajouté dans

![](./images/fichier-ajouter.png)

On vas avoir d'autres commandes :

```bash
$ node script.js help

Usage:
- Pour lister les entrées : node journal.js list
- Pour ajouter une entrée : node journal.js add <date> <content>
- Pour modifier une entrée : node journal.js modify <date> <new_content>
- Pour supprimer une entrée : node journal.js delete <date>
- Pour rechercher une entrée : node journal.js search <query>
```

Comme tu le vois, on va faire 5 commandes qui vont permettre de gérer notre journal de bord.

## Part 1 : Add et List

On va commencer par créer la feature pour ajouter une entrée dans le journal de bord et pour lister les entrées qu'on à depuis le départ.

Les entrées vont ce situer dans `/journal`.

Pour récupérer le path de notre dossier on va utiliser :

```js
const journalDir = path.join(process.cwd(), "journal");
```

Ici `journalDir` représente le chemin qui va à notre dossier, hésite pas à le log.

Dans notre script, on va utiliser les modules NodeJS `fs/promises` et `path` pour gérer notre dossier.

La première étape va être de récupérer notre dossier. Pour ça on va utiliser les méthodes `fs.access` pour vérifier que le dossier existe et `fs.mkdir` pour le créer si il n'existe pas.

Tu peux retrouver la documentation des différentes méthodes utiliser dans ce module ici :

- [fs.access](https://nodejs.org/api/fs.html#fspromisesaccesspath-mode) : pour accéder à un fichier, throw une erreur si il n'existe pas
- [fs.mkdir](https://nodejs.org/api/fs.html#fspromisesmkdirpath-options) : pour créer un fichier
- [fs.readFile](https://nodejs.org/api/fs.html#fspromisesreadfilepath-options) : pour lire un fichier
- [fs.readDir](https://nodejs.org/api/fs.html#fspromisesreaddirpath-options) : pour lire un dossier
- ... (chercher dans la doc ou demander à ChatGPT)

Avec toute ces méthodes, on va pouvoir créer une première function `ensureJournalDirExists` qui vérifie que le dossier fonctionne bien. Cette function va accéder au dossier `/journal` et va le créer si il n'existe pas. Si il n'existe pas la function va throw une erreur qu'il faudra catch.

Essaie d'appeler cette function au début de ton script pour voir si elle fonctionne bien. Normalement le dossier est maintenant créer.

#### Création de notre commande

On va créer une function `main` qui va être `async` et qui va appelé `ensureJournalDirExists`.

Pour récupérer les arguments de notre function par exemple si je fais `node script.js delete 12.12.12` j'ai envie de récupérer `delete` et `12.12.12.12`. Pour ça on peut utiliser `process.env.argv`. Cette variable est un tableau qui contient les arguments de notre commande.

Si tu la lpg tu devrais voir ça :

```js
$ node script.js help
[
  '/Users/melvynx/.nvm/versions/node/v19.3.0/bin/node',
  '/Users/melvynx/BRAIN/1.PROJECTS/BEGINJAVASCRIPT/code/setup-vscode/script.js',
  'help'
]
```

Nous les deux premier arguments ne nous intéresse pas, on va donc utiliser `slice` pour récupérer les arguments qui nous intéresse.

```js
const args = process.env.argv.slice(2);
```

Puis on va pouvoir faire un `switch` sur le premier argument pour appeler la bonne function.

```js
switch (args[0]) {
  case "add":
    await addEntry(args[1], args.slice(2).join(" "));
    break;
  case "list":
    await listEntries();
    break;
  default:
    console.log(`
Usage:
- Pour lister les entrées : node journal.js list
- Pour ajouter une entrée : node journal.js add <date> <content>
`);
}
```

Ici `args.slice(2).join(" ")` va venir encore une fois supprimer les deux première élément, qui serrait ici par exemple `add` et `12.12.12` et va venir join le reste avec un espace.

#### List

Pour lister nos entrées, il va falloir utiliser `fs.readdir` pour récupérer les fichiers dans notre dossier `/journal`.

Cette commande va te retourner un tableau de string qui représente le nom de nos fichiers.

Tu vas pouvoir afficher ce nom dans la console.

#### Add

Si le premier argument de add est égal à `today` tu vas définir la date comme étant `new Date().toISOString().slice(0, 10);` pour utiliser la date du jours.

Puis tu vas devoir reconstuire le `path` du fichier en utilisant [`path.join`](https://www.w3schools.com/nodejs/met_path_join.asp).

Tu vas pouvoir utiliser `fs.readFile` avec `await` pour récupérer le contenue, si le fichier existe pas tu auras une erreur.

Tu vas "additioner" ce contenue avec les paramètres de la function `addEntry` et tu vas utiliser `fs.writeFile` pour écrire le contenue dans le fichier.

#### Conclusion !

Au boulot ! Tu as les émojis pour t'aider. Hésite pas à utiliser la doc et mdn pour t'aider. La doc `NodeJS` est un peu compliqué à lire,

Fait attention quand tu cherches sur Google de tomber sur les articles qui parle de async car souvent tu vas tomber [sur ce genre d'exemple](https://www.geeksforgeeks.org/node-js-fs-readfile-method/) qui contiennent l'ancienne manière de faire avec les callback.

Donc rajouter toujours `async` dans tes requests pour voir le code d'exemple. Tu trouverais par exemple [cette réponse pour readFile qui est bien meilleur.](https://stackoverflow.com/questions/46867517/how-to-read-file-with-async-await-properly).

## Partie 2 : Delete

Pour la partie `delete` tu vas rajouter un nouveau cas dans notre `switch` afin de gérer le delete.

Tu vas devoir premièrement vérifier que le fichier existe en essayant de lire son contenue, si c'est pas le cas tu affiches une erreur.

Puis tu vas demander à l'utilisateur si il est sûr de vouloir supprimer l'entrée. Pour ça tu peux utiliser la function async `prompt` que je t'ai mis dans le fichier `helper.js` et que j'ai déjà importer.

Si il dit oui, tu supprime. Sinon tu annule et tu passe à autre chose.

Pour supprimer tu peux utiliser [`fs.unlink`](https://nodejs.org/api/fs.html#fspromisesunlinkpath).

## Partie 3 : Search et open

Cette parties est la plus intense. De la même manière que `delete` tu vas rajouter un nouveau cas dans notre `switch` afin de gérer le search.

Tu vas devoir ensuite gérer le cas suivant :

- Si l'utilisateur à déjà rentré un contenue à chercher, tu l'utilises
- Sinon tu utilises la méthode `prompt` pour demander le texte à rechercher.

Tu vas ensuite utiliser `fs.readdir` pour récupérer la liste des fichiers dans le dossier `/journal`.

Puis tu vas devoir "lire" tous les fichiers pour voir si ils contiennent le texte recherché. Pour ça tu vas utiliser `fs.readFile` et tu vas utiliser `includes` pour voir si le texte est présent.

Attention, pour être plus rapide tu peux te servir de [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) qui permet d'effectuer toutes tes recherches en "parallèle".

Si il y a aucune entrée qui contient le texte recherché tu affiches un message d'erreur.

Sinon tu affiches la liste des entrées qui contiennent le texte recherché.

Tu ajouteras aussi la méthode `openEntry` ainsi que son action pour pouvoir lire le contenue d'un fichier.

## Conclusion

Dans cette exercice tu as pus pratiquer le async / await avec NodeJS et tu as pus voir comment utiliser les fonctions de base de NodeJS.

Dans la suite du cours on va mieux comprendre comment fonctionne l'async / await et on va voir comment utiliser les `Promise` et les `async function` pour créer nos propres fonctions asynchrones.
