/**
 * controle de petisco
 * CRIE UM SCRIPT QUE RECEBA UMA QUANTIDADE DE PETISCOS E DE 1 POR VEZ ATÉ O DOG ESTIVER SATISFEITO
 * USE A ESTRUTURA FOR CONTADO
 * 
 * EXIBA:
 * CADA VEZ QUE UM PETISCO FOR ENTREGUE
 * QUANDO O DOG ESTIVER SATISFEITO (QUANDO TERMINAR OS PETISCOS )
 * 
 * EXTRA TRANSFORME A LÓGICA EM UMA FUNÇÃO 
 */
const totalPetiscos = 5

for (let i = 1; i <= totalPetiscos; i++) {
  console.log(`Petisco ${i} entregue! `);
}

// // Quando todos os petiscos forem entregues
console.log("O doguinho está satisfeito! ");
console.log('----------------------------')
// * EXTRA TRANSFORME A LÓGICA EM UMA FUNÇÃO 
function verificarSatisfação() {
  for (let i = 1; i <= totalPetiscos; i++) {
    console.log(`Petisco ${i} entregue! `);
  }
  console.log("O doguinho está satisfeito! ");
}

verificarSatisfação()
//CORREÇÃO SAMUEL LUCAS 
console.log('-------------------------------------')
const estoquePetisco = 4

for (let petisco = 1; petisco <= estoquePetisco; petisco++) {
  console.log(`Dando o petisco de n: ${petisco} para o dog`)
}

console.log("Satisfeito")