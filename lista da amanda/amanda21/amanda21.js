let tempo = 60;
let rodando = false;

function mostrar() {
    document.getElementById("tela").innerText = tempo;
}

function iniciar() {
    if (rodando=== false) {
        rodando = true;
        intervalo = setInterval(function () {
            tempo = tempo - 1;
            mostrar();
            if (tempo <= 0) {
                clearInterval(intervalo);
                rodando = false;
            }
        }, 1000);
    }
}

function pausar() {
    clearInterval(intervalo);
    rodando = false;
}

function zerar() {
    clearInterval(intervalo);
    tempo = 60;
    mostrar();
    rodando = false;
}
