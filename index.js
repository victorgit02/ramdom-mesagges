const button = document.getElementById("button");

const messages = [
  "...Cuando pierdas, no pierdas la lección - Dalai Lama",
  "...No busques los errores, busca un remedio - Henry Ford",
  "...La vida es una aventura, atrévete - Teresa de Calcuta",
  "...Tu actitud, no tu aptitud, determinará tu altitud - Zig Ziglar",
  "...Tienes que hacer las cosas que crees que no puedes hacer - Eleanor Roosevelt",
  "...Si te caíste ayer, levántate hoy - H. G. Wells",
  "...Siempre parece imposible... hasta que se hace - Nelson Mandela",
  "...Si no pierdes, no puedes disfrutar de las victorias - Rafael Nadal",
  "...No dejes que el miedo se interponga en tu camino - Babe Ruth",
];

const load = document.querySelector(".load");
load.innerHTML = "CARGANDO..............."

function showTitle() {
  const titleEl = document.querySelector(".title");
  titleEl.innerHTML = "¡Bienvenido! Haz clic en el botón <br> para ver una cita inspiradora";
}

function showmsg() {
  const indice = Math.floor(Math.random() * messages.length);
  const message = messages[indice];
  const input = document.getElementById("input");
  input.value = message;
}

function showButtonAndInput() {
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  input.style.display = "block";
  button.style.display = "block";
}

showTitle();

setTimeout(() => {
  showButtonAndInput();
}, 2500);

button.addEventListener("click", showmsg);

function eraseLoad () {
  load.style.display = "none";
}

setTimeout(()=> {
  eraseLoad();
},2500);