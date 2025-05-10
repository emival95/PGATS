// função nomeada, com parametro, sem retorno
function exibirNomeCachorro(nome) {
    console.log(nome)
}

// função nomeada, com parametro, com retorno
function obterNomeCachorroFormatado(nome) {
    return nome.toUpperCase()
}
// função nomeada, com parametro + valor default, sem retorno
function exbirPorteDoCachorro(porte = 'ND') {
    console.log(porte)
}

exbirPorteDoCachorro()
exibirNomeCachorro("zeus")
console.log(obterNomeCachorroFormatado("zeus"))

function obterObjetoDog() {
    return[ {
        nome: 'ZEUS',
        idade: 8,
        raca: 'SHITZU'
    }, {
        nome: 'hera',
        idade: 8,
        raca: 'chou'
    }
]
}

function obterListaDeNomesDeDogs() {
    return [ 'ZEUS',
            'SHITZU',
            'PUG']
}

console.log(obterListaDeNomesDeDogs())
console.log(obterObjetoDog())