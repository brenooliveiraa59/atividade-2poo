class Escola {
    constructor(nome) {
      this.nome = nome;
      this.professores = [];
      this.alunos = [];
    }
  
    adicionarProfessor(professor) {
      this.professores.push(professor);
      console.log(`${professor.nome} foi adicionado como professor na ${this.nome}.`);
    }
  
    adicionarAluno(aluno) {
      this.alunos.push(aluno);
      console.log(`${aluno.nome} foi matriculado na ${this.nome}.`);
    }
  
    listarProfessores() {
      console.log(`Professores da ${this.nome}:`);
      this.professores.forEach(professor => {
        console.log(`- ${professor.nome}`);
      });
    }
  
    listarAlunos() {
      console.log(`Alunos da ${this.nome}:`);
      this.alunos.forEach(aluno => {
        console.log(`- ${aluno.nome}`);
      });
    }
  }
  
  class Pessoa {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Professor extends Pessoa {
    constructor(nome, disciplina) {
      super(nome);
      this.disciplina = disciplina;
    }
  }
  
  class Aluno extends Pessoa {
    constructor(nome, serie) {
      super(nome);
      this.serie = serie;
    }
  }
  
  // Exemplo de uso
  const minhaEscola = new Escola('Escola ABC');
  
  const professor1 = new Professor('Professor Silva', 'Geografia');
  const professor2 = new Professor('Professora Santos', 'Artes');
  
  const aluno1 = new Aluno('Marcelinha', '1º ano');
  const aluno2 = new Aluno('João Paulo', '3º ano');
  
  minhaEscola.adicionarProfessor(professor1);
  minhaEscola.adicionarProfessor(professor2);
  
  minhaEscola.adicionarAluno(aluno1);
  minhaEscola.adicionarAluno(aluno2);
  
  minhaEscola.listarProfessores();
  minhaEscola.listarAlunos();
  