function calcularIMC(){
    var tn1 = document.getElementById('altura') 
    var tn2 = document.getElementById('peso')
    var res = document.getElementById('res')

    var altura = Number(tn1.value)
    var peso = Number(tn2.value)
    var imc = peso / (altura * altura)

    var mensagem = ""

    if (imc < 18.5){
        mensagem = "Você está abaixo do peso!"
    } else if (imc >= 18.5 && imc <= 24.9){
        mensagem = "Você está no peso ideal!"
    } else if (imc >= 25 && imc <= 29.9){
        mensagem = "Você está com sobrepeso!"
    } else if (imc >= 30 && imc <= 34.9){
        mensagem = "Você está com obesidade grau I!"
    } else if (imc >= 35 && imc <= 39.9){
        mensagem = "Você está com obesidade grau II!"
    } else if (imc >= 40){
        mensagem = "Você está com obesidade grau III!"
    } else{
        mensagem = "IMC inválido. Por favor digite valores válidos."
    }    
    res.innerHTML = `${imc.toFixed(2)}. ${mensagem}`;  
}
var botaoLimparIMC = document.getElementById('botaoLimparIMC');
var alturaInput = document.getElementById('altura');
var pesoInput = document.getElementById('peso');
var imcResultado = document.getElementById('res');

botaoLimparIMC.addEventListener("click", function () {
    alturaInput.value = "";
    pesoInput.value = "";
    imcResultado.textContent = "...";
});