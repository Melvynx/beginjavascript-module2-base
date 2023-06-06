import readline from 'readline';

// 🦁 Ce code permet de générer une function "prompt"
// Cette function permet de récupérer une valeur saisie par l'utilisateur
// Il ne t'ai pas encore demandé de comprendre ce code, mais tu peux le lire et l'analyser
// On verra dans la suite du cours :
// * Comment fonctionne ce code
// * Comment fonctionne les promise
// * Comment fonctionne les async/await
// Et on refera un tour sur ce code pour le comprendre

// 👇 Ce que tu vois ici, c'est de la JS doc qui te permet de documenter ton code.
/**
 * La function prompt permet de récupérer une valeur saisie par l'utilisateur
 * @param {string} question La question à poser à l'utilisateur
 * @returns {Promise<string>} Une promise qui sera résolue avec la valeur saisie par l'utilisateur
 */
export function prompt(question) {
  // Creation d'une interface de lecture
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Retourne une promise
  return new Promise((resolve) => {
    // Pose la question
    rl.question(question, (answer) => {
      // Ferme l'interface de lecture quand on a la réponse
      rl.close();
      // Renvoie la réponse
      resolve(answer);
    });
  });
}
