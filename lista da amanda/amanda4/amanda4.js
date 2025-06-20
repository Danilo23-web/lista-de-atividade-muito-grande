
var numeroMisterioso = Math.floor(Math.random() * 21);

function verificar() {
  var entrada = document.getElementById("entrada").value;
  var chute = parseInt(entrada);
  var msg = document.getElementById("mensagem");

  if (isNaN(chute)) {
    msg.innerHTML = "Por favor, digite um número!";
    return;
  }

  if (chute > numeroMisterioso) {
    msg.innerHTML = "O número misterioso é menor.";
  } else if (chute < numeroMisterioso) {
    msg.innerHTML = "O número misterioso é maior.";
  } else {
    msg.innerHTML = "Você acertou!";
  }
}
