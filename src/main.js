import app from "./app.html?raw";

document.querySelector("#app").innerHTML = app;
document.querySelector(".botao-comecar").addEventListener("click", iniciar);

let pontos = 0;
let tempo = 30;

function iniciar() {
  pontos = 0;
  tempo = 30;

  document.querySelector(".menu").classList.add("escondido");

  const intervalId = setInterval(() => {
    tempo--;
    const cronometro = document.querySelector(".placar-cronometro");
    cronometro.textContent = `${tempo}s`;

    if (tempo == 0) {
      clearInterval(intervalId);
      document.querySelector(".menu").classList.remove("escondido");
    }
  }, 1000);
}

const emojis = ["🚀", "👾", "🛸"];

function criarEstrelas() {
  const espaco = document.querySelector(".espaco");

  for (let i = 0; i < 200; i++) {
    const estrela = document.createElement("span");
    estrela.classList.add("estrela");
    estrela.textContent = "★";
    espaco.append(estrela);

    let { x, y } = posicaoAleatoria();
    x = x - estrela.clientWidth;

    // Corrige posição Y out of bounds
    y =
      y < espaco.clientHeight / 2
        ? y + estrela.clientHeight / 2
        : y - estrela.clientHeight;

    estrela.style.left = `${x}px`;
    estrela.style.top = `${y}px`;
  }
}

function criarAlvo() {
  const espaco = document.querySelector(".espaco");

  const alvo = document.createElement("span");

  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  alvo.classList.add("alvo");
  alvo.textContent = emoji;

  espaco.append(alvo);

  let { x, y } = posicaoAleatoria();

  // Corrige posição X out of bounds
  x =
    x < espaco.clientWidth / 2
      ? x + alvo.clientWidth / 2
      : x - alvo.clientWidth;

  // Corrige posição Y out of bounds
  y =
    y < espaco.clientHeight / 2
      ? y + alvo.clientHeight / 2
      : y - alvo.clientHeight;

  alvo.style.left = `${x}px`;
  alvo.style.top = `${y}px`;

  const id = setTimeout(() => {
    alvo.remove();
    criarAlvo();
  }, 1500);

  alvo.addEventListener("click", (event) => {
    atingir(event.target, id);
  });
}

function posicaoAleatoria() {
  const espaco = document.querySelector(".espaco");

  const x = Math.floor(Math.random() * espaco.clientWidth);
  const y = Math.floor(Math.random() * espaco.clientHeight);

  return { x, y };
}

function atingir(alvo, id) {
  pontos++;

  atualizarPlacar();
  clearTimeout(id);

  alvo.remove();

  criarAlvo();
}

function atualizarPlacar() {
  const placar = document.querySelector(".placar-pontos");
  placar.textContent = pontos;
}

function mostrarGameover() { }

criarEstrelas();

for (let i = 0; i < 10; i++) {
  criarAlvo();
}
