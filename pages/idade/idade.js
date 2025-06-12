document.addEventListener("DOMContentLoaded", function () {
    const dataNascimento = document.querySelector("input[type='date']");
    const botaoCalcular = document.querySelector(".bt-idade");
    const botaoLimpar = document.querySelector(".bt-idade-limpar");

    const idadeCompleta = document.querySelector(".idade-completa");
    const idadeMeses = document.querySelector(".idade-meses");
    const idadeDias = document.querySelector(".idade-dias");

    function calcularIdade(dataNasc) {
        const hoje = new Date();
        const nascimento = new Date(dataNasc);

        if (isNaN(nascimento.getTime())) return null;

        let anos = hoje.getFullYear() - nascimento.getFullYear();
        let meses = hoje.getMonth() - nascimento.getMonth();
        let dias = hoje.getDate() - nascimento.getDate();

        if (dias < 0) {
            meses--;
            dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        }

        if (meses < 0) {
            anos--;
            meses += 12;
        }

        const diffMs = hoje - nascimento;
        const totalDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const totalMeses = anos * 12 + meses;

        return {
            anos,
            meses: totalMeses,
            dias: totalDias
        };
    }

    botaoCalcular.addEventListener("click", function () {
        const data = dataNascimento.value;
        const idade = calcularIdade(data);

        if (idade) {
            idadeCompleta.textContent = `${idade.anos} anos`;
            idadeMeses.textContent = `${idade.meses} meses`;
            idadeDias.textContent = `${idade.dias} dias`;
        } else {
            idadeCompleta.textContent = "Data inválida";
            idadeMeses.textContent = "...";
            idadeDias.textContent = "...";
        }
    });

    botaoLimpar.addEventListener("click", function () {
        dataNascimento.value = "";
        idadeCompleta.textContent = "...";
        idadeMeses.textContent = "...";
        idadeDias.textContent = "...";
    });
});
