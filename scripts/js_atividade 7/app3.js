let n1 = prompt("Digite o primeiro número: ");
let n2 = prompt("Digite o segundo número: ");   
let op;
do{
    let msg = "Escolha a operação que deseja realizar: \n";
    msg += "1 - Somar \n";
    msg += "2 - Subtrair \n";
    msg += "3 - Multiplicar \n";
    msg += "4 - Dividir \n";
    msg += "5 - Sair \n";
    op = prompt(msg);
    switch(op){
        case "1":
            alert(` ${n1} + ${n2} = ${n1+n2}`); break;
        case "2":
            alert(` ${n1} - ${n2} = ${n1-n2}`); break;  
        case "3":
            alert(` ${n1} * ${n2} = ${n1*n2}`); break;
        case "4":
            alert(` ${n1} / ${n2} = ${n1/n2}`); break;
        case "5":
            alert("Até logo..."); break;
        default:
            alert("Opção inválida."); break;

    
    }
} while (op != "5");