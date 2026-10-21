const amigos = [];

let editando = null;

const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;
const lista = document.getElementById("lista");

cadastro.addEventListener("submit", function(e) {
    e.preventDefault();

    let item = [nome.value, nasc.value, whatsapp.value];

    if (editando == null) {
        let check = amigos.find(i => item[0] == i[0]);

        if (check == undefined) {
            amigos.unshift(item);
            cadastro.reset();
        } else {
            alert(`${ nome.value } já cadastrado.`);
        }

    } else {
        let amigo = amigos[editando];

        amigo[0] = nome.value;
        amigo[1] = nasc.value;
        amigo[2] = whatsapp.value;

        editando = null;
        cadastro.reset();
    }

    exibirLista();
});

function exibirLista() {
    let itens = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = amigos[i]; // Nome, Nascimento, WhatsApp

        // Cria os botões
        let remover = `< button onclick = "remover(${i})" > Remover</button > `;
        let atualizar = `< button onclick = "atualizar(${i})" > Atualizar</button > `;

        // Cria uma tag li
        let li = `< li > ${ item[0] } | ${ item[1] } | ${ item[2] } | ${ remover } ${ atualizar }</li > `;

        // Junta os itens
        itens = itens + li;
    }

    // Atualiza o HTML da lista
    lista.innerHTML = itens;
}

function remover(i) {
    let item = amigos[i];

    let check = confirm(`Deseja realmente excluir ${ item[0] }?`);

    if (check == true) {
        amigos.splice(i, 1);
        exibirLista();
    }
}

function atualizar(i) {
    editando = i;

    let item = amigos[editando];

    nome.value = item[0];
    nasc.value = item[1];
    whatsapp.value = item[2];
}