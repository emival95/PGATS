/*
crie um script que receba o peso do dog em KG + estoque atual de ração em gramas. Calcule a 
quantidade diaria de ração com base na seguinte formula: gramas por dias = peso x 30 

Exiba:
- nome do dog
- Peso 
- Qauntidade de ração recomendada por dia 
- quantos dias o estoque vai durar 
*/

const nomeDoDog = 'Zeus'
const pesoDoDog = 10
const estoqueGramas = 5000

const racaoPorDia = pesoDoDog * 30
const diasDeEstoque = estoqueGramas / racaoPorDia

console.log("===== Informações do Pet =====")
console.log("Nome do dog:", nomeDoDog)
console.log("Peso:", pesoDoDog, "kg")
console.log("Quantidade de ração recomendada por dia:", racaoPorDia.toFixed(2), "gramas")
console.log("O estoque atual irá durar aproximadamente:", Math.floor(diasDeEstoque), "dias")


//CORREÇÃO SAMUEL LUCAS

const nome = 'Zeus'
const peso = 10
const estoque = 5000

const gramasPordia = peso * 30
const duracaoEstoque = estoque / gramasPordia
console.log(nome)
console.log(peso)
console.log(gramasPordia)
console.log(duracaoEstoque)

// correção com função
function calcularConsumo(nome, peso, estoque){
const gramasPordia = peso * 30
const duracaoEstoque = estoque / gramasPordia
console.log(nome)
console.log(peso)
console.log(gramasPordia)
console.log(duracaoEstoque)
}

calcularConsumo('zeus', 1, 200)