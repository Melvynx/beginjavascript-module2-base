import { prompt } from '../helper.js';

console.log('ADDITION-MASTER ™️');

const firstNumber = Number(await prompt('Enter the first number : '));

if (Number.isNaN(firstNumber)) {
  console.log('Error : firstNumber is not a number');
  process.exit(1);
}

const secondNumber = Number(await prompt('Enter the second number : '));

if (Number.isNaN(secondNumber)) {
  console.log('Error : secondNumber is not a number');
  process.exit(1);
}

// J'ai changé le signe + par un /
console.log('The result of division is : ', firstNumber + secondNumber);
