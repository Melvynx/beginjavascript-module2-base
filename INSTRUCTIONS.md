La même chose que pour l'exercice sur les nombres, on va directe dans des exercices sur les string pour te mettre dans le bain.

Dans cette exercice, on va créer une petite app qui envoie des mails pour nous (mais on va pas vraiment les envoyés) !

## Partie 1

Pour envoyer le mail on aura besoin de 3 informations :

1. L'adresse mail du destinataire
2. Le sujet du mail
3. Le contenu du mail

Ta mission est de créer un script qui récupère ces 3 informations puis affiche un résultat comme celui-ci :

```
The mail is sending...

To : <DESTINATAIRE>
Object : <OBJECT>
<MESSAGE>
```

Exemple :

```
NODE-MAILER ™️
Enter recipient your email : jeanmichel@gmail.com
Enter your object : Rdv à 15h
Enter your message : On avait rendez-vous à 15h, ou est tu ! C'est urgent.


The mail is sending...
To user :  jeanmichel@gmail.com
Object :  Rdv à 15h
On avait rendez-vous à 15h, ou est tu ! C'est urgent.
```

## Partie 2 - Template string

Ici on fait pleins de `console.log`... il y a moyen de rendre ce code beaucoup plus propre en utilisant les [template string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) !

Tu peux les utiliser simplement en utilisant les backticks (`` ` ``) à la place des quotes (`'` ou `"`) et en utilisant `${}` pour insérer une variable dans le string.

```js
const name = 'Jean-Michel';

console.log(`Hello ${name} !`);
```

Le gros avantage c'est que tu peux faire des retours à la ligne dans tes strings sans avoir à utiliser le caractère `\n` !

```js
const name = 'Jean-Michel';

const message = `Hello ${name} !

How are you ?`;

console.log(message);
```

Je te propose de remplacer les 4 `console.log` de l'exercice précédent avec les template string !

## Partie 3 - Erreur !

Que ce passe-t-il si l'email du destinataire est vide ? Ou si le sujet est vide ? Ou si le message est vide ? RIEN !

Pas bien...

Ajoutes un `if` qui, si un des champs est vide, affiche une erreur et arrête le script.

Pour vérifier si une `string` est vide tu peux utiliser la méthode `.length` :

```js
const name = 'Jean-Michel';

console.log(name.length); // 11
```

Cette méthode va compter le nombre de caractères dans la string. Si la string est vide, elle retournera `0`.

Ta tâche est de vérifier que l'email comme l'objet ne soit pas vide.

Pour vérifier deux chose dans notre `if` on va utiliser l'opérateur `||` (OR) :

```js
if (value1 === 0 || value2 === 0) {
  // ...
}
```

Ici on va rentrer dans le `if` si **une des deux conditions** est vraie.

Par exemple :

```js
if (true || false) {
  // ...
}
```

Ici on va rentrer dans le `if` car **une des deux conditions** est vraie.

On ne rentrera pas dans le `if` si **les deux conditions** sont fausses uniquement :

```js
if (false || false) {
  // ...
}
```
