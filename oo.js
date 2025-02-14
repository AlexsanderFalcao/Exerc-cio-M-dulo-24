// Classe de abstração
class Animal {
    constructor(nome, som) {
        this.nome = nome; // Nome do animal
        this.som = som;   // Som que o animal faz
    }

    emitirSom() {
        console.log(`${this.nome} faz: ${this.som}`);
    }
}

// Classe herdeira: Cachorro
class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome, "Au au"); // Chama o construtor da classe Animal
        this.raca = raca;     // Raça específica do cachorro
    }

    correr() {
        console.log(`${this.nome} está correndo!`);
    }
}

// Classe herdeira: Gato
class Gato extends Animal {
    constructor(nome, cor) {
        super(nome, "Miau"); // Chama o construtor da classe Animal
        this.cor = cor;      // Cor específica do gato
    }

    pular() {
        console.log(`${this.nome} deu um pulo!`);
    }
}

// Criação de instâncias
const rex = new Cachorro("Rex", "Labrador");
const mimi = new Gato("Mimi", "Branca");
const toto = new Cachorro("Totó", "Bulldog");

// Testando as instâncias
rex.emitirSom(); // Rex faz: Au au
rex.correr();    // Rex está correndo!

mimi.emitirSom(); // Mimi faz: Miau
mimi.pular();     // Mimi deu um pulo!

toto.emitirSom(); // Totó faz: Au au

