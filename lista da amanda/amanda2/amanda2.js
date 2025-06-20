
    function gerarTabuada() {
      var n = document.getElementById("numero").value;
      n = Number(n);
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "";

      var m = 1;
      while (m <= 5) {
        var r = n * m;
        resultado.innerHTML += n + " x " + m + " = " + r + "<br>";
        m = m + 1;
      }
    }

