function cadastro() {
    let nome = document.getElementById("name").value.trim();
    let email = document.getElementById("E-mail").value.trim();
    let senha = document.getElementById("password").value.trim();
    let telefone = document.getElementById("NumeroTelefone").value.trim();

    if (!nome || !email || !senha || !telefone) {
        alert("Por favor, preencha todos os campos.");
        return;
    }


    alert("Cadastro realizado com sucesso!");
    
}
