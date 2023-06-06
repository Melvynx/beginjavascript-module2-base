// Importe la fonction prompt depuis le fichier helper.js
import { prompt } from '../helper.js';

console.log('NODE-MAILER ™️');

const email = await prompt('Enter recipient your email : ');
const object = await prompt('Enter your object : ');
const message = await prompt('Enter your message : ');

const result = `

The mail is sending...

To user : ${email}
Object : ${object}
${message}`;

console.log(result);
