let contador = 0;
let botao = document.getElementById('botao');
let contar = document.getElementById('contador');

botao.addEventListener('click', () => {
  contador++;
  contar.textContent = contador;
});

botao.addEventListener('dblclick', () => {
  contador = 0;
  contar.textContent = contador;
});
