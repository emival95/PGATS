/**
 * Lista de alunos
 *  *Matheus
   Renata
   Leandro
   ANA
   LUCAS
 paraCada(item da) ListaDeAlunos
   // uma nota aleatória

 * 
 * 
 */

const ListaDeAlunos = [
  "Matheus",
  "Renata",
  "Leandro",
  "ANA",
  "LUCAS"
]

ListaDeAlunos.forEach(aluno => {
  console.log(aluno)
})

const ListaDeAlunosENotas = [
  {
    nome: "Valzin",
    nota: 7
  },
  {
    nome: "Miriam",
    nota: 7
  },
  {
    nome: "teves",
    nota: 7
  },
  {
    nome: "Valzixxxxn",
    nota: 7
  }
]

ListaDeAlunosENotas.forEach(aluno => {
  console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
})