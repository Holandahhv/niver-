const livro = document.getElementById("livro");
const capa = document.querySelector(".capa");
const fechar = document.getElementById("fechar");

console.log("JS carregado");

capa.addEventListener("click", () => {
  console.log("clicou");
  livro.classList.add("aberto");
});

fechar.addEventListener("click", (e) => {
  e.stopPropagation();
  livro.classList.remove("aberto");
});