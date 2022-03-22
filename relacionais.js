console.log('01)', '1' == 1) // == compara a igualdade / a string 1 é igual a 1 RESULTADO VERDADEIRO
console.log('02)', '1' === 1) // === é extritamente igual a 1 RESULTADO FALSO
console.log('03)', '3' != 3) // != é diferente de 3 RESULTADO FALSO
console.log('04)', '3'!== 3) // !== é extritamente diferente de 3 RESULTADO VERDADEIRO

console.log('05)', 3 < 2) // < é menor que 2 RESULTADO FALSO 
console.log('06)', 3 > 2) // > é maior que 2 RESULTADO VERDAEIRO
console.log('07)', 3 <= 2) // <= é menor ou igual que 2 RESULTADO FALSO
console.log('08)', 3 >= 2) // >= é maior ou igual que 2 RESULTADO VERDADEIRO

const d1 = new Date(0) // nova data (0) siginifica data inicial de 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2) //RESULTADO  FALSO devido ele compara a referencia de memoria e não da data
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // nesse caso o RESULTADO É VERDADEIRO

console.log('12)', undefined == null)
console.log('13)', undefined === null)
