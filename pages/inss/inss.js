document.addEventListener("DOMContentLoaded", function(){
    const salario = document.querySelector("input[type='number']");
    const botaoCalcular = document.querySelector(".botao-inss");
    const botaoLimpar = document.querySelector(".botao-limpar");
    const inss = document.querySelector(".inss-valor")

    function calcularInss(s){
        if(s <= 1517){
            return s*0.075;
        } else if(s >= 1518.01 && s <= 2793.88){
            return s*0.09;
        } else if(s >= 2793.89 && s <= 4190.83) {
            return s*0.12;
        } else if(s >= 4190.84 && s >= 8157.41){
            return s*0.14;
        } else {
            return s*0.275
        }
    }

botaoCalcular.addEventListener('click', function(){
    inss.textContent = calcularInss(salario.value).toFixed(2).toString();
})

botaoLimpar.addEventListener('click', function(){
    inss.textContent = "...";
    salario.value = "";
})
})
