function checar() {
  var n = document.getElementById("num").value;
  var r = document.getElementById("res");

  if (n == "") {
    r.innerHTML = "Digite um número!";
  } else {
    if (n % 3 == 0) {
      r.innerHTML = n + " é divisível por 3.";
    } else {
      r.innerHTML = n + " NÃO é divisível por 3.";
    }
  }
}
