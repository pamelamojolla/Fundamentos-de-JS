//função sem retorno
function imprimirSoma(a, b){//entre parenteses são colocados os parametros
    console.log(a + b)//como JS é uma linguagem francamente tipada esse parametros podem receber strings or number
}

imprimirSoma (2, 3)//como essa função não retorna nada em resposta chamei os dois parametros e atribui valor
imprimirSoma (2)//em JS não preciso colocar os valores nos dois parametros, ele retorna undefined/NaN
imprimirSoma(2, 10, 4, 5, 6, 7)//em JS mesmo você colocando varios parametros, ele considera somente os dois primeiro e ignora o restante
imprimirSoma()//se você não passar nenhum parametro ele não dá erro e sim NaN

//função com retorno
function soma (a, b = 1){//posso colocar por padrão o valor de um parametro
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

//uma função pode não receber dados, pode não retornar nada