/**
    
    descriebe -> agrupador de testes
    it        -> impementação do teste

    TDD
        CRIO O TESTE
        VEJO O TESTE FALHAR 
        CRIO A IMPLEMENTAÇÃO PARA O TESTE PASSAR
        RODO O TESTE DE NOVO
        REFATORE O CODIGO PARA MELHORAR
        ASSERTION/ASSERÇÃO
            VERIFICAR SE UM COMPORTAMENTE ESTA DE ACORDO COM O ESPERADO
 */
import { exibirNomeDogFormatado } from '../conceitos/teste-de-unidades.js'
import assert from 'node:assert'

describe('teste do Projeto', () => {
    it('deve exibir o nome do dog com letras maiusculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
        //verifique se: valor atual é igual ao valor esperado
    })

    it('primeiro  teste', () => {

          assert.ok(true);
    })


    it('segundo  teste', () => {
         assert.ok(true);
     })

})
