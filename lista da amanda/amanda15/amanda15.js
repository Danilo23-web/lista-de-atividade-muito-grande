function verificar() {
let opcoes = document.getElementsByName("resposta");
let i = 0;
let resposta = "";
let msg = document.getElementById("mensagem");

while (i < opcoes.length) {
    if (opcoes[i].checked) {
        resposta = opcoes[i].value;
        break;
    }
    i = i + 1;
}

if (resposta === "nao, ele morreu") {
    msg.innerHTML = "errado, ATEU!!!";}

if (resposta==="sim, esta no acre"){
    msg.innerHTML = "certo";
}
}
