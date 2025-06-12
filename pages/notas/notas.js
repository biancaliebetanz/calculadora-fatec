
function calcularMedia(){
    var tn1= window.document.getElementById('n1')
    var tn2= window.document.getElementById('n2')
    var res = window.document.getElementById('res')
    var n1= Number(tn1.value)
    var n2= Number(tn2.value)
    var media= (n1+n2)/2

    var mensagem = "";

    if (media >0 && media <=4){
        mensagem = "Você está reprovado!"
    } else if (media >=5 && media<=6){
        mensagem = "Você está de recuperação!"
    } else if (media >6 && media <= 10){
        mensagem = "Parabéns! Você está aprovado(a)!"
    } else{
        mensagem = "Nota inválida. Por favor digite valores entre 0 e 10."
    }
    res.innerHTML= `${media}. ${mensagem}`;
}
var botaoLimparNota = document.getElementById('botaoLimparNota');
var n1Input = document.getElementById('n1');
var n2Input = document.getElementById('n2');
var res = document.getElementById('res');

botaoLimparNota.addEventListener("click", function () {
    n1Input.value = "";
    n2Input.value = "";
    res.textContent = "...";
});