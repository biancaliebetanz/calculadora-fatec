
function calcularPorcentagem(){
    var tn1 = document.getElementById('porcentagem') 
    var tn2 = document.getElementById('numero')
    var res = document.getElementById('res')
    
    var porcentagem = Number(tn1.value)
    var numero = Number(tn2.value)
    
    if (isNaN(porcentagem) || isNaN(numero) || porcentagem === 0 || numero === 0) {
        res.innerHTML = "Por favor, insira valores válidos.";
        return;
    }
    
    porcentagem = (porcentagem * numero) / 100
    res.innerHTML = porcentagem
}
var botaoLimparPorcentagem = document.getElementById('botaoLimparPorcentagem');
var porcentagemInput = document.getElementById('porcentagem');
var numeroInput = document.getElementById('numero');
var porcentagemResultado = document.getElementById('res');

botaoLimparPorcentagem.addEventListener("click", function () {
    porcentagemInput.value = "";
    numeroInput.value = "";
    porcentagemResultado.textContent = "...";
});
