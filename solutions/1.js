// Importe la fonction prompt depuis le fichier helper.js
import { prompt } from '../helper.js';

console.log('ADDITION-MASTER ™️');

// Demande le premier nombre à l'utilisateur et stocke le résultat dans la variable firstNumber
const firstNumber = Number(await prompt('Enter the first number : '));

// Demande le deuxième nombre à l'utilisateur et stocke le résultat dans la variable secondNumber
const secondNumber = Number(await prompt('Enter the second number : '));

// Affiche l'addition des deux nombres
console.log("Le résultat de l'addition est : ", firstNumber + secondNumber);
