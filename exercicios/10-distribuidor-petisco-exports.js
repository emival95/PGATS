
/**
   Você tem uma lista de cães: Pantera,Luna e thor
   crie um script que entregue 1 petico para cada cão da lista
   exibindo uma mensagem como "entragando petisco para Pantera"
 * 
 */



function entregarPetiscos(listaDeCaes) {
    listaDeCaes.forEach(cao => {
        console.log(`entregando petisco para ${cao}`);
    });

    console.log('Todos os cães receberam seus petiscos!');

}




export{
    entregarPetiscos
}

console.log('---------------CORREÇÃO SAMUEL-------------------')
//CORREÇÃO SAMUEL

const DOGS = ['Pantera', 'Luna', 'Thor']

export{
    DOGS
}
