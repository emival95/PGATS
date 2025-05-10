function contarVogais(texto) {
    return (texto.match(/[aeiou]/g) || []).length;
}

console.log(contarVogais("emival"));