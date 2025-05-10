/*
    && - E/ AND
    || - OU/ OR
    ! - NÃO / NOT

*/

//&& - E/ AND
const nomeDog = 'pipoca'
const nomePossuiUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDez = nomeDog.length <= 10


console.log(nomePossuiUmaPalavra && nomePossuiAteDez) // true

// || - OU/ OR

const dog = {
    adotado: false,
    peso: 5.3
}

console.log(!dog.adotado || dog.peso <10 ) // verdadeiro

console.log(true || true) // verdadeiro
console.log(true || false) // verdadeiro
console.log(false || true) // verdadeiro
console.log(false || false) // verdadeiro

// // ! - NÃO / NOT
console.log(true) // verdadeiro
console.log(!true) // false


