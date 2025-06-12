
function calcularMedia(){
    var tn1= window.document.getElementById('n1')
    var tn2= window.document.getElementById('n2')
    var res = window.document.getElementById('res')
    var n1= Number(tn1.value)
    var n2= Number(tn2.value)
    var media= (n1+n2)/2
    res.innerHTML= media
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