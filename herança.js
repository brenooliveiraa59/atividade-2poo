class Pessoa {
    _idade = 30;

    constructor(nome) {
        this.nome = nome;
    }

    setarIdade(novaIdade) {
        if (typeof novaIdade === "number") {
            this._idade = novaIdade;
        } else {
            throw new idade ("A idade deve ser um número.");
        }
    }

    get idade() {
        return this._idade;
    }
}

let p1 = new Pessoa("Debora");
let p2 = new Pessoa("Fernanda");
let p3 = new Pessoa("Paula");
p1.ola()
try {
    p1.setarIdade(25);
    console.log(`${p1.nome} tem ${p1.idade} anos.`);
    
    p2.setarIdade("30"); // Isso lançará uma exceção
    console.log(`${p2.nome} tem ${p2.idade} anos.`);
} catch (error){
    console.error(error.message);
    ola()}
        alert (`${p1.nome} tem ${p1.idade} anos`)
        {
        methodaluno.ola()         
        alert (`${p2.nome} tem ${p2.idade} anos`)
        }
