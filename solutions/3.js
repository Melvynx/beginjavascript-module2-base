import { prompt } from '../helper.js';

console.log('ADDITION-MASTER ™️');

const firstNumber = Number(await prompt('Enter the first number : '));

// Si firstNumber est totalement égal à 0, alors on affiche une erreur et on quitte le programme
if (firstNumber === 0) {
  console.log("Error : firstNumber can't be 0");
  process.exit(1);
}

const secondNumber = Number(await prompt('Enter the second number : '));

// J'ai changé le signe + par un /
console.log('The result of division is : ', firstNumber / secondNumber);
