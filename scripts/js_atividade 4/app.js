var nasc = 1991;
let nome = "Cauã";
const viva = true;

function calcIdade(ano = 2025) {
    let idade = ano - nasc;
    let menor;

    if (idade < 18) {
        menor = true;
    } else {
        menor = false;
    }

    alert(`${nome} é menor de idade? ${menor}
        \nIdade: ${idade} \nPode beber: ${podebeber}`);
    return idade;
}

calcIdade();
alert(`Poe beber: ${podebeber}`);

/*
alert(`Fora da Função : Idade ${idade}`)
Erro porque a variável let "idade" só existe dentro da função.
*/

alert(`Fora da função : Idade ${calcIdade(2027)}`);