// Importe la fonction prompt depuis le fichier helper.js
import { prompt } from '../helper.js';

console.log('NODE-MAILER ™️');

const email = await prompt('Enter recipient your email : ');
const object = await prompt('Enter your object : ');
const message = await prompt('Enter your message : ');

console.log('\n\n');
console.log('The mail is sending...');
console.log('To user : ', email);
console.log('Object : ', object);
console.log(message);
