// Importe la fonction prompt depuis le fichier helper.js
import { prompt } from '../helper.js';

console.log('NODE-MAILER ™️');

const email = await prompt('Enter recipient your email : ');
const object = await prompt('Enter your object : ');
const message = await prompt('Enter your message : ');

if (email.length === 0 || object.length === 0) {
  console.log('You must enter all fields');
  process.exit(1);
}

const result = `

The mail is sending...

To user : ${email}
Object : ${object}
${message}`;

console.log(result);
