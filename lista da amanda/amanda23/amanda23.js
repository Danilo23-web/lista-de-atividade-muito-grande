function prova() {
    let pontuacao = 0;

    
    let q1_franca = document.querySelector('input[name="questao1"][value="certa"]');
        if (q1_franca.checked) {
            pontuacao = pontuacao + 1;
        }

            
    let q2_ruim = document.querySelector('input[name="questao2"][value="certa"]');
        if (q2_ruim.checked) {
            pontuacao = pontuacao + 1;
        }

    document.getElementById("resposta").innerHTML = "Pontuação: " + pontuacao;
    }