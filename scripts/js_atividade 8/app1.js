let foto = 1;

const imagem = document.getElementById("foto");

function proximo(e) {
    e.preventDefault();

    if (foto < 6) {
        foto = foto + 1;
    }

    imagem.setAttribute("src", `./img/foto${foto}.jpg`);
}

const prox = document.getElementById("prox");
prox.addEventListener("click", proximo);


function anterior(e) {
    e.preventDefault();

    if (foto > 1) {
        foto = foto - 1;
    }

    imagem.setAttribute("src", `./img/foto${foto}.jpg`);
}

const ant = document.getElementById("ant");
ant.addEventListener("click", anterior);


const cbbox = document.getElementById("combobox");

function selecionar(e) {
    e.preventDefault();

    foto = Number(cbbox.value);
    imagem.setAttribute("src", `./img/foto${foto}.jpg`);
}

cbbox.addEventListener("change", selecionar);


const opacidade = document.getElementById("opacidade");

opacidade.addEventListener("input", function(e) {
    e.preventDefault();

    let valor = opacidade.value;
    imagem.style.opacity = valor;
});


const lii = document.getElementById("lii");

lii.addEventListener("mouseover", function(e) {
    e.preventDefault();

    foto = 2;
    imagem.setAttribute("src", `./img/foto${foto}.jpg`);
});


const li3 = document.getElementById("li3");

li3.addEventListener("dblclick", function(e) {
    e.preventDefault();

    foto = 3;
    imagem.setAttribute("src", `./img/foto${foto}.jpg`);
});