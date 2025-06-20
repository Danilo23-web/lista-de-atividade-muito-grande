function mudarCor() {
  const titulo = document.getElementById("titulo");
  const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
  titulo.style.color = corAleatoria;
}
