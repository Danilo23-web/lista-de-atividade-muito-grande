const campoTexto = document.getElementById('campoTexto');
const mensagem = document.getElementById('mensagem');

campoTexto.addEventListener('keydown', function(event) {
  mensagem.textContent = `Você pressionou: ${event.key}`;
});
