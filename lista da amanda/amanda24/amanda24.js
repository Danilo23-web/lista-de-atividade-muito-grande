botao.style.backgroundColor = "green";

function colortrans() {
    let botao = document.getElementById("botao"); 
    let valor = Number(botao.value); 
    
    if (valor === 0) {
        botao.style.backgroundColor = "red";
        botao.innerText = "Clicado";
        botao.value = 1; 
    } else {
        botao.style.backgroundColor = "green"; 
        botao.innerText = "Clique aqui";
        botao.value = 0; 
    }
}

