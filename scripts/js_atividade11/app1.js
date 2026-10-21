class Cachorro extends Animal {
    constructor(n, c = "desconhecido", a = 0.0, p = 0, r = "vira-lata") {
        super(n, c, a, p, r);
        this.patas = 4;
    }


    falar() {
        alert("au!au!");
    }


    saudar() {
        let msg = super.saudar();
        msg = msg + "Sou um cachorro!";
        alert(msg);
    }
}


class Passaro extends Animal {
    constructor(n, c = "desconhecido", a = 0.0, p = 0, r = "desconhecido") {
        super(n, c, a, p, r);
    }


    falar() {
        alert("fiu!fiu!");
    }


    saudar() {
        let msg = super.saudar();
        msg = msg + " eu Sou um pássaro!";
        alert(msg);
    }
}


const balu = new Cachorro("Balu Brasil");
const mel = new Cachorro("Mel", "Amarelo", 1.10, 45, "Labrador");
