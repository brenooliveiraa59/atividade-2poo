class Pessoa{
    idade = 0
    constructor(nome){
        this.nome = nome
    }
}

class Aluno extends Pessoa{
    constructor(nome, id){
        super(nome)
        this.id = id
    }
}

let p1 = new Aluno ("Nico",18)

p1.idade = 18

console.log(`${p1.nome} tem ${p1.idade} e matricula ${p1.id}`)