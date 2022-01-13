const peso1 = 1.0 //forma padrao de colocar uma forma numerica
const peso2 = Number ('2.0')//outra forma de colocar uma forma numerica

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //medotos dentro da função Number, Integer para saber se é um numero
console.log(Number.isInteger(peso2))//tipo Number serve para numero inteiro e quebrado

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const  total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//toFixed ele altera as casas decimais para mostrar no terminal 
console.log(media.toString())//toString transforma o valor em numero em texto deixar () vazio
console.log(media.toString(2))//toString transformar em numero binario - colocar 2 entre()
console.log(typeof media)//typeof mostra que tipo de dados é esse variavel ou constante