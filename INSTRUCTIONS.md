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
