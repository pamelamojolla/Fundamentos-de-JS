const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado'

// essa expressão: nota >= 7 ? 'aprovado' : 'reprovado'
// é considerado ternario pois tem a função: nota >= 7 ?
// e as duas hipoteses: 'aprovado' : 'reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))