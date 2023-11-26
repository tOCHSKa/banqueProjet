

window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
const particles = Particles.init({
  selector: ".background",
  color: ["#03dac6", "#ff0266", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#faebd7", "#03dac6", "#ff0266"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});

// Fonction pour mettre à jour l'heure
function updateTime() {
  // Récupérer l'élément avec l'ID "time"
  var timeElement = document.getElementById("time");

  // Obtenir l'heure actuelle
  var now = new Date();

  // Formatage de l'heure (par exemple : HH:MM:SS)
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');

  // Mettre à jour le contenu de l'élément avec l'heure
  timeElement.textContent = hours + ":" + minutes + ":" + seconds;
}

// Appeler la fonction updateTime toutes les secondes (1000 millisecondes)
setInterval(updateTime, 1000);

// Appeler updateTime une fois au chargement de la page pour afficher l'heure immédiatement
updateTime();

// fonction pour récuperer les inputs 


let connect = document.getElementById('connect');
connect.addEventListener('click', getContent);

function getContent() {
  let accountIdInput = document.getElementById('account');
  let passwordInput = document.getElementById('password');

  let accountId = accountIdInput.value;
  let password = passwordInput.value;
  console.log(accountId, password);

  // Effacer les champs de saisie
  accountIdInput.value = '';
  passwordInput.value = '';
}
