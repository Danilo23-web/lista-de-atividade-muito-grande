function matematica() {
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let ope = document.getElementById("operacao").value;
    let r = document.getElementById("resultado");

    if (ope === "*") {
        r.innerHTML = num1 * num2
    }
    
    else if (ope === "+") {
        r.innerHTML = num1 + num2
    }
    
    else if (ope === "-") {
        r.innerHTML = num1 - num2
    }

    else {
        r.innerHTML = num1 / num2
        }
    }

function raizquad(){
    let base = Number(document.getElementById("numbase").value)
    let r2 = document.getElementById("resposta")
    
    r2.innerHTML =(Math.sqrt(base)+ " é a raiz quadrada de seu numero")
}

function expo(){
   let numbaseexpo=Number(document.getElementById("basepot").value)
   let numexpot = Number(document.getElementById("expoete").value)
   r3 = document.getElementById("rsex")
   r3.innerHTML = (numbaseexpo**numexpot)
}