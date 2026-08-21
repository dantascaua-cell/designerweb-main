var nasc = 1991;
let nome = "Cauã";
const viva = true

function calcIdade(ano){
    let idade = ano - nasc;
    alert(`alerta dentro da função - Idade ${idade}`);
    return idade;
}

calcIdade();
/*
alert(`Fora a Função : Idade ${idade}`)
Error pq a variavel let não existe fora do escopo dela
*/
alert(`Fora da função : Idade ${calcIdade(2027)}`);


