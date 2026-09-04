let vezes   = Number(prompt("Digite o número de vezes: "));
for (let i = 1; i <= vezes; i++) {
    if(vezes > 100){
        alert("Número Inválido, recarregue e digite um valor entre 0 e 100.");
        break;
    }
    alert(`Contei ${i} vez`);
    if(1%2 == 0){ //* é impar
       continue; //* se impar, continua = volta ao inicio
    }
    alert(`${i} é par.`);

}