document.addEventListener("DOMContentLoaded", function () {
    // Aqui pegamos os valores dos inputs 
    const horaInicialInput = document.querySelectorAll("input[type='time']")[0];
    const horaFinalInput = document.querySelectorAll("input[type='time']")[1];

    // Aqui extraimos os resultados dos inputs
    const horasResultado = document.querySelectorAll(".texto.borda")[0];
    const minutosResultado = document.querySelectorAll(".texto.borda")[1];
    const diferencaTotalResultado = document.querySelectorAll(".texto.borda")[2];

    // Aqui extraimos os botoes
    const botaoCalcular = document.querySelector(".bt-horas");
    const botaoLimpar = document.querySelector(".bt-horas-limpar");

    function calcularDiferencaHora(horaInicial, horaFinal) {
        // Separamos os valores dos inputs em horas e minutos com a funcao map, ex: 14h15 vira -> [14, 15]
        const [h1, m1] = horaInicial.split(":").map(Number);
        const [h2, m2] = horaFinal.split(":").map(Number);

        // Aqui criamos um objeto do tipo Date, ele salva datas como (Ano, Mes, Dia, Hora, Minuto)
        const hoje = new Date();
        const dataInicial = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), h1, m1);
        let dataFinal = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), h2, m2);

        // Se a hora final for menor ou igual, adicionamos um dia à data final! Porque quando criamos um objeto Date vazio, 
        // ele pega a data de hoje. Se o horario final estiver com um menor, significa que a data final esta no dia seguinte...
        if (dataFinal <= dataInicial) {
            dataFinal.setDate(dataFinal.getDate() + 1); // Adicionamos 1 dia
        }

        const diffMs = dataFinal - dataInicial; // pegamos Ms
        const diffMin = Math.floor(diffMs / 1000 / 60); // Convertemos em minutos

        const horas = Math.floor(diffMin / 60); // Convertemos em horas
        const minutos = diffMin % 60; // Minutos que sobraram da hora

        return { horas, minutos };
    }

    botaoCalcular.addEventListener("click", function () {
        const horaInicial = horaInicialInput.value;
        const horaFinal = horaFinalInput.value;

        if (!horaInicial || !horaFinal) {
            alert("Preencha os dois horários!");
            return;
        }

        const resultado = calcularDiferencaHora(horaInicial, horaFinal);

        horasResultado.textContent = resultado.horas;
        minutosResultado.textContent = resultado.minutos;
        diferencaTotalResultado.textContent = `${resultado.horas} hora(s) e ${resultado.minutos} minuto(s)`;
    });

    botaoLimpar.addEventListener("click", function () {
        horaInicialInput.value = "";
        horaFinalInput.value = "";
        horasResultado.textContent = "...";
        minutosResultado.textContent = "...";
        diferencaTotalResultado.textContent = "...";
    });
});