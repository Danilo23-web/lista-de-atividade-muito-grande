function celsio(){

const tempfahrenheit=Number(document.getElementById("temp").value)
const result=((tempfahrenheit-32)*5/9)



let f = document.getElementById("termo")
f.innerHTML=(result+" celsius")





}



function fahrenheit(){
const tempcelsio=Number(document.getElementById("temp").value)
const result=((tempcelsio*9/5)+32)



let f = document.getElementById("termo")
f.innerHTML=(result+" fahrenheit")



}