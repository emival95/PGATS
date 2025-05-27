function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === 'M';
}

function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

function decidirTipoDeAtividadePorPorte(porte) {
  const atividadesPorPorte = {
    pequeno: 'brincar dentro de casa',
    medio: 'passear no parque',
    grande: 'correr em áreas abertas já',
  };

  return atividadesPorPorte[porte] || 'porte não reconhecido';
}
async function buscarDadoAsync() {
  return 'Pipoca';
}

export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}