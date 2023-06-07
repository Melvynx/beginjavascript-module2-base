import { prompt } from '../helper.js';

console.log('ADDITION-MASTER ™️');

const firstNumber = Number(await prompt('Enter the first number : '));

const secondNumber = Number(await prompt('Enter the second number : '));

// Si secondNumber est totalement égal à 0, alors on affiche une erreur et on quitte le programme
if (secondNumber === 0) {
  console.log("Error : secondNumber can't be 0");
  process.exit(1);
}

// J'ai changé le signe + par un /
console.log('The result of division is : ', firstNumber / secondNumber);
