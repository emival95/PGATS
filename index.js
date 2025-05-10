/**
 * Console API
 */

console.log("Aula incial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome:'emival',
    turma: '02',
    disciplina: 'Prog JS'
},
{
    nome:'Miriam',
    turma: '02',
    disciplina: 'Prog JSr'
}])


/**
 * Constantes e Variáveis
 */


// const - para informações que nunca mudam
// var ou let - para informações que pode mudar


// informações que não mudam
const nome = 'zeus'
const raca = 'shitzu'
const sexo = 'masculino'
const cor = 'marrom'
const dataDeNasimento = '18/06/2019'

//informações que mudam

let idade = 8
let peso = 6.5
let vacinado = true
let castrado = false
let tamanho = 'P' 

// hoisting -> içamento ou elevação
var irmao = ["thor", "hela"]
console.table(irmao)


/**
 * Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
 * (funcoes - leia e escreva)
 * 
  cadeia =  String
  inteiro = real - number
  logico = boolean
  vector/matriz = array

  undefined
  null

  BigInt = Number para números extremamente grandes
  Symbol = 'identifica

  
 /**
  * Strings
  // 'turma 02 do PGATS - aspas simples ou single quote
  // 'turma 02 do PGATS - aspas duplas ou single quote
  // 'turma 02 do PGATS - temlate Strings
  */

  const turma = "02"
  let data = "05 de abril"
  console.log("Aula 03 da Turma  "  +  turma  + "no Sábado dia 05 de Abril")
  console.log(`Aula 03 da turma ${turma} no sabado dia ${data} `)


  console.log(data.length)

  // split - separar a string

  const nomesDeAlunos = "giuliana aNdré Goku Lenilson"
  const nomeDeAlunosSplit = nomesDeAlunos.split(" ")
  console.log(nomeDeAlunosSplit)

  console.log(nomesDeAlunos.toLowerCase()) //  letra minuscula
  console.log(nomesDeAlunos.toLocaleUpperCase()) // letra maiuscula


 console.log( nomesDeAlunos.includes("valzin"))  // retorna verdadeiro ou falso

 // Chai - biblioteca de asserções 

 console.log(nomesDeAlunos.replaceAll('a', 'i'))

 const conceitosLogica = "                          inteiro   real cadeia de caracteres...          "

 console.log(conceitosLogica.trim())

 

 let dataParaCortar = "05 de abril"
 console.log(dataParaCortar.slice(0,2))

 const cpf = "75227126100"
 console.log(cpf.substring(0,3))