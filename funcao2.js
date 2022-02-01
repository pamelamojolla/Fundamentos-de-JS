//armazenando uma função em uma variavel 
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variavel
const soma = (a, b) => {// => abreviação de function
    return a + b 
}

console.log(soma(2, 3))

//retorno implícito
const subtração = (a, b) => a - b//forma reduzida de criar uma função
console.log(subtração(2,3))