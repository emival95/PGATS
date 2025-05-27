/**

 

  tentar {

    // conexao com banco (exemplo)

 

  } pegar (erro/excecao) {

    // salvar a excecao em algum lugar...

    // exibir

  } 

 

  lançar = throw

 

 */

 

  // TENTAR FAZER ALGO QUE PODE DAR ERRO

  try {

    console.log(`Tentando alimentar o Pet...`)

    throw new TypeError('pet nao quis alimento')

 

    // TENTAR CONECTAR NO BANCO

    // EXECUTAR UMA QUERY

  } catch (excecao) {

    // TRATAR ESTE ERRO - EXIBIR, SALVAR, MELHOR A DESCRIÇÃO DESSE ERRO

    // console.log(excecao)

    console.log(excecao.name)

    console.log(excecao.message)

 

    // CAPTURAR A EXCECAO 

 

  } finally {

    // SEMPRE EXECUTA, COMO SE FOSSE UMA ACAO FINAL

    console.log(`SEMPRE SEREI EXECUTADO`)

 

    // FECHAR A CONEXAO COM O BANCO (AO MENOS GARANTIR QUE FOI FECHADA)

  }

 

  //