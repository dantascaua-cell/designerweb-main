const amigos = [];

const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;
const lista = document.getElementById("lista");

cadastro.addEventListener("submit", function(e) {
    e.preventDefault();

    let item = [nome.value, nasc.value, whatsapp.value];
    if (editando == null){
        let check = amigos.find(i => item[0] == i[0]);
        if (check == undefined){
            amigos.unshift(item);
            cadastro.reset();
        } else {
            alert(` ${nome.value} já cadastrado. `);
        }
    } else {
        let amigo = amigos[editando];
        amigo[0] = nome.value;
        amigo[1] = nasc.value;
        amigo[2] = whatsapp.value;
    }

    exibirLista();

});

function exibirLista() {
    let itens ="";
    for(let i = 0; i<amigos.length; i++){
        let item = amigos[i]; //item = [Nome, Nasc, Whatsapp]
        // cria botão para remover
        let remover = `<button onclick=remover(${i})>Remover</button>`
        let atualizar = `<button onclick="atualizar(${i})">Atualizar</button>`
        //Cria uma tag li
        let li = `<li>${item[0]} | ${item[1]} | ${item[2]} | ${remover} ${atualizar} </li>`;
        //Junta oli nos itens
        itens = itens + li;

    // Alterar o HTML da lista
    lista.innerHTML = itens;
}

function remover(i){
    let item = amigos[i]; // Nome, Nasc, Whatsapp
    let check = confirm(`Desejar realmente excluir ${item[0]}?`)
    if ( check == true){
        amigos.splice(i,1); // scplice(posição inical, qtd itens a remover)
    
    }

exibirLista();
}
function atualizar(i){
    editando = i;
    let item = amigos[editando];
    nome.value = item[0]
    nasc.value = item[1]
    whatsapp.value = item[2]
}