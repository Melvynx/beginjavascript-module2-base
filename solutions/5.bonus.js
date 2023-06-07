import { prompt } from '../helper.js';

console.log('ADDITION-MASTER ™️');

console.log(`Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division`);

let operator = 0;

while (operator === 0) {
  const tempOperator = Number(await prompt('Enter the operator : '));

  if (
    tempOperator !== 1 &&
    tempOperator !== 2 &&
    tempOperator !== 3 &&
    tempOperator !== 4
  ) {
    console.log('\nError : operator is not 1, 2, 3 or 4 ! Retry.');
  } else {
    operator = tempOperator;
  }
}

const firstNumber = Number(await prompt('Enter the first number : '));

if (Number.isNaN(firstNumber) || Math.abs(firstNumber) > 100000000000000) {
  console.log(
    'Error : firstNumber is not a number or is too big / too small (max: 100000000000000)'
  );
  process.exit(1);
}

const secondNumber = Number(await prompt('Enter the second number : '));

if (Number.isNaN(secondNumber) || Math.abs(secondNumber) > 100000000000000) {
  console.log(
    'Error : secondNumber is not a number or is too big / too small (max: 100000000000000)'
  );
  process.exit(1);
}

if (operator === 4 && secondNumber === 0) {
  console.log('Error : division by 0');
  process.exit(1);
}

switch (operator) {
  case 1:
    console.log('The result of addition is : ', firstNumber + secondNumber);
    break;
  case 2:
    console.log('The result of soustraction is : ', firstNumber - secondNumber);
    break;
  case 3:
    console.log('The result of multiplication is : ', firstNumber * secondNumber);
    break;
  case 4:
    console.log('The result of division is : ', firstNumber / secondNumber);
    break;
}
