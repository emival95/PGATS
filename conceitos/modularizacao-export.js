/**
    SINTAXE COMMONjs:
    MODULE.EXPORTS = {} / REQUIRE('')


    ESM - ECMASCIPT STANDARD MODULES
        EXPORT {} / IMPORT

 */
    // const nomePet = 'Pitoco'
    // console.log(`O nome do Pet é ${nomePet}`)

    function exibirNomePet(paramNomePet){
          console.log(`O nome do Pet é ${paramNomePet}`)
    }

    function exibirIdade(paramIdadePet){
        console.log(`idade do pet é: ${paramIdadePet}`)
    }

     exibirNomePet('Zeus')
     exibirNomePet('Hera')
     exibirNomePet('Radja')

     exibirIdade(5)

    //export {} / import
    export{
        exibirNomePet,
        exibirIdade
    }
