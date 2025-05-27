/**
 * PLANO DE ATIVIDADE PARA O PET
 * CRIE UM SCRIPT QUE DEFINA O PLANO DE ATIVIDADES PARA OS DOG DURANTE A ESTADIA. O SCRIPT VAI RECEBER O PORTEE(PEQUENO, MEDIO, GRANDE  )
 * E O TEMPO DISPONIVEL PARA ATIVIDADE REPRESENTADAS EM MINUTOS, EXEMPLO:
 * PANTERA - MEDIO - 45
 * USE UMA CONDICIONAL PARA DECIDIR O TIPO DE ATIVIDADE COM BASE NO PORT
 * PEQUENO -> BRINCAR DENTRO DE CASA
 * MÉDIO -> CAMINHADA QUARTERIADO
 * GRANDE -> CORRER NO PARQUE
 * QUALQUER OUTRO -> PORTE INVALIDO
 * 
 * DEPOSI, UMA CONDICIONAL PARA AJUSTAR A MENSAGEM DE ACORDO  COM O TEMPO
 * MENOR QUE 15 -> ATIVIDADE RAPIDA[ATIVIDADE]
 * DE 15 A 20 -> TEMPO IDEAL: ATIVIDADE
 * ACIMA DE 30 -> HORA DA DIVERSÃO:[ATIVIDADE]
 */

const nome = 'Zeus'
const porte = 'medio'
const tempo = 30

let atividade

switch (porte) {
    case 'pequneo':
        atividade = 'brincar dentro de casa'
        break;
    case 'medio':
        atividade = 'caminhada no quarteirão'
        break

    case 'grande':
        atividade = 'correr no parque'
        break

    default:
        atividade: 'porte invalido'



}

/* DEPOSI, UMA CONDICIONAL PARA AJUSTAR A MENSAGEM DE ACORDO  COM O TEMPO
* MENOR QUE 15 -> ATIVIDADE RAPIDA[ATIVIDADE]
* DE 15 A 20 -> TEMPO IDEAL: ATIVIDADE
* ACIMA DE 30 -> HORA DA DIVERSÃO:[ATIVIDADE]
*/
let mensagem
if (tempo < 15) {
    mensagem = 'atividade rapida:'
} else if (tempo <= 30) {
    mensagem = 'tempo ideal'
} else if (tempo > 30) {
    mensagem = 'hora da diversão'
}

console.log(`${mensagem} : [${atividade}]`)
