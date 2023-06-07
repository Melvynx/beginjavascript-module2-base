import { prompt } from '../helper.js';

console.log('ADDITION-MASTER ™️');

console.log(`Choose an operator :
1. Addition
2. Soustraction`);

const operator = Number(await prompt('Enter the operator : '));

if (operator !== 1 && operator !== 2) {
  console.log('Error : operator is not 1 or 2');
  process.exit(1);
}

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

switch (operator) {
  case 1:
    console.log('The result of addition is : ', firstNumber + secondNumber);
    break;
  case 2:
    console.log('The result of soustraction is : ', firstNumber - secondNumber);
    break;
}
