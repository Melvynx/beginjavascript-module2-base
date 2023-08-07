import fs from 'fs/promises';
import path from 'path';

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
    let existingContent = await fs.readFile(filePath, 'utf8');
    content = existingContent + '\n' + content;
  } catch (error) {
    // Si il existe pas, on continue
  }

  await fs.writeFile(filePath, content, 'utf8');
  console.log('Votre entrée a été ajoutée !');
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
    default:
      console.log(`
Usage:
- Pour lister les entrées : node journal.js list
- Pour ajouter une entrée : node journal.js add <date> <content>
- Pour supprimer une entrée : node journal.js delete <date>
- Pour rechercher une entrée : node journal.js search <query>
`);
  }
}

main();
