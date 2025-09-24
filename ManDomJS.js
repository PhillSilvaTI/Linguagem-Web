const input = document.getElementById("mensagemInput");
const mostrarBtn = document.getElementById("mostrarBtn");
const limparBtn = document.getElementById("limparBtn");
const output = document.getElementById("output");

mostrarBtn.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto) {
    const novoElemento = document.createElement("p");
    novoElemento.textContent = texto;
    output.innerHTML = ""; 
    output.appendChild(novoElemento);
  }
});

limparBtn.addEventListener("click", () => {
  output.innerHTML = "";
  input.value = "";
});



let contador = 0;
const contadorSpan = document.getElementById("contador");
const incrementarBtn = document.getElementById("incrementarBtn");
const decrementarBtn = document.getElementById("decrementarBtn");
const zerarBtn = document.getElementById("zerarBtn");

function atualizarContador() {
  contadorSpan.textContent = contador;
}

incrementarBtn.addEventListener("click", () => {
  contador++;
  atualizarContador();
});

decrementarBtn.addEventListener("click", () => {
  contador--;
  atualizarContador();
});

zerarBtn.addEventListener("click", () => {
  contador = 0;
  atualizarContador();
});
