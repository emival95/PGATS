function filtrarNumeros(lista) {
    return lista.filter(item => typeof item === 'number' && Number.isInteger(item));
}

const listaMista = [1, 'dois', 3, 'quatro', 5, 6.7, '8'];
const apenasNumeros = filtrarNumeros(listaMista);
console.log(apenasNumeros)
