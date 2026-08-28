let nasc = prompt("Digite o ano de nascimento");
nasc = parseInt(nasc);

let fds = confirm("Se hoje for inal de semana, clique em ok.");
let idade = 2
alert(`Voce e maior de idade? ${idade >= 18}`);
alert(`Hoje e final de semana? ${fds}`);

if (idade >= 18 && fds) {
    alert("Você pode beber.");
} else {
    alert("Você não pode beber.");
}