La même chose que pour l'exercice sur les nombres, on va directement faire des exercices sur les chaînes de caractères pour te mettre dans le bain.

Dans cet exercice, on va créer une petite application qui envoie des mails pour nous (mais on ne va pas vraiment les envoyer) !

## Partie 1

Pour envoyer le mail, on aura besoin de 3 informations :

1. L'adresse mail du destinataire
2. Le sujet du mail
3. Le contenu du mail

Ta mission est de créer un script qui récupère ces 3 informations, puis affiche un résultat comme celui-ci :

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
Enter your message : On avait rendez-vous à 15h, où es-tu ! C'est urgent.


The mail is sending...
To user :  jeanmichel@gmail.com
Object :  Rdv à 15h
On avait rendez-vous à 15h, où es-tu ! C'est urgent.
```

## Partie 2 - Template string

Ici, on fait plein de `console.log`... Il y a moyen de rendre ce code beaucoup plus propre en utilisant les [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) !

Tu peux les utiliser simplement en utilisant les backticks (`` ` ``) à la place des guillemets simples (`'`) ou doubles (`"`) et en utilisant `${}` pour insérer une variable dans la chaîne de caractères.

```js
const name = "Jean-Michel";

console.log(`Hello ${name} !`);
```

Le gros avantage, c'est que tu peux faire des retours à la ligne dans tes chaînes de caractères sans avoir à utiliser le caractère `\n` !

```js
const name = "Jean-Michel";

const message = `Hello ${name} !

How are you ?`;

console.log(message);
```

Je te propose de remplacer les 4 `console.log` de l'exercice précédent par des template strings !

## Partie 3 - Erreur !

Que se passe-t-il si l'email du destinataire est vide ? Ou si le sujet est vide ? Ou si le message est vide ? RIEN !

Pas bien...

Ajoute un `if` qui, si l'un des champs est vide, affiche une erreur et arrête le script.

Pour vérifier si une chaîne de caractères est vide, tu peux utiliser la méthode `.length` :

```js
const name = "Jean-Michel";

console.log(name.length); // 11
```

Cette méthode compte le nombre de caractères dans la chaîne de caractères. Si la chaîne est vide, elle retourne `0`.

Ta tâche est de vérifier que l'email et le sujet ne soient pas vides.

Pour vérifier deux choses dans notre `if`, on va utiliser l'opérateur `||` (OU) :

```js
if (value1 === 0 || value2 === 0) {
  // ...
}
```

Ici, on entre dans le `if` si **l'une des deux conditions** est vraie.

Par exemple :

```js
if (true || false) {
  // ...
}
```

C'est à toi de jouer !
