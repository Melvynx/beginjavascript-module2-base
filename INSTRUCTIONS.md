On va continuer de travailler sur "ADDITION-MASTER ™️" afin d'ajouter une feature très importante :

- Le choix de l'opérateur !

Une fois que l'utilisateur aura choisis l'opérateur, on va être capable de lui demander les deux nombres à additionner et lui donner le résultat en fonction de l'opérateur choisis.

Tu as déjà vue les if, donc ça devrait être un peu plus simple cette fois !

## Partie 1 - Choix de l'opérateur

On va commencer par demander à l'utilisateur de choisir l'opérateur qu'il souhaite utiliser.

Pour ça, on va afficher dans la console un message qui décrit, pour chaque opérateur un nombre :

```bash
1 - Addition
2 - Soustraction
```

(pour l'instant on va que faire l'addition et la soustraction, on verra pour les autres opérateurs plus tard)

On va ensuite demander à l'utilisateur de choisir un nombre entre 1 et 2.

Si il choisis autre chose que 1 ou 2, on va lui dire que son choix n'est pas valide et arrêter le script.

Ensuite, on fait comme ce qu'on avait fait sur l'exercice conçerantn les number sauf qu'on va utiliser, à la fin, un switch !

Ne t'en fais... je t'explique comment faire car pour la partie 1 les émojis sont là pour t'aider.

Résultat attendu :

```bash
ADDITION-MASTER ™️
Choose an operator :
1. Addition
2. Soustraction
Enter the operator : 2
Enter the first number : 5
Enter the second number : 5
The result of soustraction is :  0

# Ou avec la addition
ADDITION-MASTER ™️
Choose an operator :
1. Addition
2. Soustraction
Enter the operator : 1
Enter the first number : 5
Enter the second number : 5
The result of addition is :  10
```

## Partie 2 - Ajout de la multiplication et de la division

Ici on va ajouter la multiplication et la division, au début du script ce sera écrit :

```bash
Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division
```

Il faudra modifier le `if` vérifie si l'opérateur est valide pour qu'il prenne en compte les nouveaux opérateurs. (3 et 4)

Et rajouter un if pour la division qui vérifie que le deuxième nombre n'est pas égal à 0.

Pour ça, dans le if il faudra vérifier que l’opérateur est égal à 4 et que le deuxième nombre est égal à 0, car cette vérification ne se produit QUE pour la division.

Évidemment il faudra aussi modifier le `switch` finale afin de prendre en compte les nouveaux opérateurs.

Résultat attendu :

```bash
ADDITION-MASTER ™️
Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division
Enter the operator : 4
Enter the first number : 1
Enter the second number : 0

Error : division by 0
```

## Partie 3 - Ajout d'une limite

L'utisateur est capable de mettre n'importe quel nombre, même un nombre énorme pour l'instant :

```bash
ADDITION-MASTER ™️
Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division
Enter the operator : 3
Enter the first number : 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
Enter the second number : 10
The result of multiplication is :  Infinity
```

Dans ce cas là, la réponse devient "Infinity" car le nombre est trop grand pour être stocké dans une variable.

Ton travail est... de rajouter une vérification dans la même condition que `Number.isNaN` pour vérifier que le nombre est plus petit que :

`100000000000000`

Tu devrais modifier le `if` pour rajouter une comparaison entre le number et le chiffre ci-dessus. Pour ça il faut utiliser les opérateurs de comparaison `<` et `>` qui veulent dire :

- `<` : [plus petit que](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
- `>` : [plus grand que](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)

Je te laisse choisir le bon...

Aussi, il faudra modifier le message d'erreur pour dire que le nombre est invalide ou qu'il est plus grand que le nombre inscrit ci-dessus.

## Partie 4 - Et le moins ?

Ok... maintenant on à ajouté une limite de `100000000000000` à nos nombre positif !

Donc si j'inscrit :

```bash
1000000000000000 // pas validé
-1000000000000000 // validé 🤔
```

Effectivement, il y a un problème, on devrait aussi vérifier que le nombre est plus grand que `-100000000000000` !

Pour ça, il suffit d'une petite modification...

Tu connais la notion de valeur absolue ? C'est la valeur d'un nombre sans prendre en compte le signe.

Avec JavaScript, il est possible de récupérer la valeur absolue :

```js
Math.abs(-10); // 10
Math.abs(10); // 10
```

Modifie la condition pour utiliser la valeur absolue afin que la verification fonctionne aussi avec les nombre négatif.

## Partie 5 - Script infinie (bonus)

Pour te plonger dans tes retranchement et pour préparer la suite, on va utiliser une boucle `while` pour de manière infinie te demander quel opérateur tu veux utiliser.

Pour ça, on va créer une boucle while. Une boucle `while` prend en paramètre une conditon et il execute ce qu'il y a dans la boucle du moment

```js
let operator = 0;

while (operator === 0) {
  // code de la boucle
}
```

Traduction : "du moment que l'opérateur est égal à 0, execute ce code"

Donc dans la boucle, on va pouvoir demander à l'utilisateur de choisir un opérateur et de le stocker dans la variable `operator` uniquement si l'opérateur est égal à 1, 2, 3 ou 4 !

Dans le cas contraire, on affiche un message d'erreur du style "You can only choose 1, 2, 3 or 4" et on redemande à l'utilisateur de choisir un opérateur car, vue qu'on a pas assigné la variable `operator` à un nombre, la boucle va continuer à s'executer.

Tu remarqueras que j'utilises `let` ici et pas `const` car on va modifier la valeur de `operator` dans la boucle.

Cette exercice est compliqué car tu ne connaît (normalement) pas `while`, tu vas devoir chercher sur internet comment ça fonctionne et comment l'utiliser.

C'est pour ça que c'est un exercice "bonus" et on verra les boucles dans la suite.

Exemple : 

```bash
ADDITION-MASTER ™️
Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division
Enter the operator : a

Error : operator is not 1, 2, 3 or 4 ! Retry.
Enter the operator : v

Error : operator is not 1, 2, 3 or 4 ! Retry.
Enter the operator : c

Error : operator is not 1, 2, 3 or 4 ! Retry.
Enter the operator : x

Error : operator is not 1, 2, 3 or 4 ! Retry.
Enter the operator : s

Error : operator is not 1, 2, 3 or 4 ! Retry.
```