function MudarDeCor(botao) {
    let valor = Number(botao.value);

    if (valor === 1) {
        document.body.style.backgroundColor = "red";
    } else if (valor === 2) {
        document.body.style.backgroundColor = "green";
    } else if (valor === 3) {
        document.body.style.backgroundColor = "blue";
    }
}
