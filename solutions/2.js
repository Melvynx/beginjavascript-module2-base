import { prompt } from '../helper.js';

console.log('ADDITION-MASTER ™️');

const firstNumber = Number(await prompt('Enter the first number : '));

const secondNumber = Number(await prompt('Enter the second number : '));

// J'ai juste changé le signe + par un -
console.log("Le résultat de l'addition est : ", firstNumber - secondNumber);
