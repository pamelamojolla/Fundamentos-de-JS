// operdaores´lógicos
// && E (and)
// || OU (or)
// ! NEGAÇÃO (not)

let isAtivo = false //JS tem o valor literal false
console.log(isAtivo)

isAtivo = true //JS tem o valor literal de true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo)// para transformar um valor em false ou true vamos usar a ! que significa not
// se você coloca duas negações ele volta a ser o original nesse caso ele retorna true

isAtivo = 1 
console.log(!isAtivo)// nesse exemplo usando somente uma exclação ele retorna false

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'único valor verdadeiro'))

let nome = ''

console.log(nome || "desconhecido")//nesse caso a variavel nome não tem nada nenhum caracter atribuido a ela 
// dessa forma ele mostra a palavra desconhecido.











