let dia = prompt("Digite o dia da semana: ");
dia = Number(dia);

if (dia <=0 || dia > 8){
    alert("Dia inválido.");
} else if (dia == 1) {
    alert("Você escolheu domingo.");
} else if (dia == 2) {
    alert("Você escolheu segunda-feira.");
} else if (dia == 3) {
    alert("Você escolheu terça-feira.");
} else if (dia == 4) {
    alert("Você escolheu quarta-feira.");
} else if (dia == 5) {
    alert("Você escolheu quinta-feira.");
} else if (dia == 6) {
    alert("Você escolheu sexta-feira.");
} else if (dia == 7) {
    alert("Você escolheu sábado.");
}