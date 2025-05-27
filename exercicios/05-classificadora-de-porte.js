/**
 * CLASSIFICADOR DE PORTE AUTOMATICO
 * MUITOS TUTORES NÃO FAZEM IDEIA DO PORTE DO SEU 
 * CRIE UM SCRIPT QUE CLASSIFIQUE O PORTE COM BASE NO PESO DE FORMA SIMPLIFICADO, SENDO 
 * ATÉ 10-> PEQUENO; ACIMA DISSO -> MÉDIO
 * USE O OPERADOR TERNARIO PARA DETERMINAR O PORTE. EXIBA:
 * NOME
 * PESO
 * PORTE CLASSIFICADO
 * EXTRA: TRANSFORME A LOGICA EM UMA FUNÇAO
 */

const nome = 'Zeus'
const peso = 11
const porte = peso <= 10 ? 'pequeno' : 'medio'

console.log('-------------')
console.log(`Nome: ${nome}`)
console.log(`Nome: ${peso}`)
console.log(`Nome: ${porte}`)
console.log('----------')

// alternativa com a função 

function classificarPortePorPeso(nome, peso) {
    const porte = peso <= 10 ? 'pequeno' : 'medio'

    console.log('-------------')
    console.log(`Nome: ${nome}`)
    console.log(`Nome: ${peso}`)
    console.log(`Nome: ${porte}`)
    console.log('----------')
}

classificarPortePorPeso('Zeus', 5.5)
classificarPortePorPeso('hera', 11)
classificarPortePorPeso('Thor', 35.5)