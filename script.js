import fs from 'fs/promises';
import path from 'path';
import { prompt } from './helper.js';

const journalDir = path.join(process.cwd(), 'journal');

async function ensureJournalDirExists() {
  try {
    await fs.access(journalDir);
  } catch (error) {
    await fs.mkdir(journalDir);
  }
}

async function listEntries() {
  let files = await fs.readdir(journalDir);
  console.log('Voici vos entrées de journal :');
  files.forEach((file) => {
    console.log(`- ${file}`);
  });
}

async function addEntry(date, content) {
  if (date === 'today') {
    date = new Date().toISOString().slice(0, 10);
  }
  const filePath = path.join(journalDir, `${date}.txt`);

  try {
    // Si le fichier existe déjà, on lira son contenu actuel
    let existingContent = await fs.readFile(filePath, 'utf8');
    content = existingContent + '\n' + content;
  } catch (error) {
    // Si le fichier n'existe pas, une erreur est levée et nous continuerons simplement avec le contenu donné
  }

  await fs.writeFile(filePath, content, 'utf8');
  console.log('Votre entrée a été ajoutée !');
}

async function deleteEntry(date) {
  let filePath = path.join(journalDir, `${date}.txt`);

  try {
    let content = await fs.readFile(filePath, 'utf8');
    console.log(`Contenu de l'entrée ${date} :\n${content}`);

    let answer = await prompt(
      'Voulez-vous vraiment supprimer cette entrée? (oui/non) '
    );
    if (answer === 'oui') {
      await fs.unlink(filePath);
      console.log('Votre entrée a été supprimée !');
    } else {
      console.log('Suppression annulée.');
    }
  } catch (error) {
    console.error("Erreur lors de la suppression de l'entrée.");
  }
}

async function searchEntries(args) {
  let query = args ? args : await prompt('Entrez le texte à rechercher : ');

  let files = await fs.readdir(journalDir);
  let matches = [];

  await Promise.all(
    files.map(async (file) => {
      let filePath = path.join(journalDir, file);
      let content = await fs.readFile(filePath, 'utf8');
      if (content.includes(query)) {
        matches.push(file);
      }
    })
  );

  if (matches.length > 0) {
    console.log(`Entrées contenant "${query}":`);
    matches.forEach((match) => console.log(`- ${match}`));
  } else {
    console.log(`Aucune entrée trouvée contenant "${query}".`);
  }
}

async function main() {
  await ensureJournalDirExists();

  const args = process.argv.slice(2);
  switch (args[0]) {
    case 'list':
      await listEntries();
      break;
    case 'add':
      await addEntry(args[1], args.slice(2).join(' '));
      break;
    case 'delete':
      await deleteEntry(args[1]);
      break;
    case 'search':
      await searchEntries(args[1]);
      break;
    default:
      console.log(`
Usage:
- Pour lister les entrées : node journal.js list
- Pour ajouter une entrée : node journal.js add <date> <content>
- Pour modifier une entrée : node journal.js modify <date> <new_content>
- Pour supprimer une entrée : node journal.js delete <date>
`);
  }
}

main();
