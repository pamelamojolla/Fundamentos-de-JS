const escola = 'Cod3r'

console.log(escola.charAt(4))//retorna o caractere do índice especificado nesse caso letra r
console.log(escola.charAt(5))//nesse caso como não tem o quinto caracter ele retorna vazio
console.log(escola.charCodeAt(3))//ele retorna o valor que se refere tabela Unicode/Ask - nesse caso 3 se ref a 51 na tabela
console.log(escola.indexOf(3))//ele verifica se existe o valor 3 dentro da constante escola
console.log(escola.substring(1))//ele vai mostrar no terminal letrar a partir do índice 1 nesse exemplo irá mostrar od3r
console.log(escola.substring(0, 3))//nesse caso ele irá mostrar do índice entre 0 e 3 sem incluí o índice 3 - nesse caso aparecerá Cod - 

console.log("Escola ".concat(escola).concat("!"))//além de usar o sinal de + para concatenar você também pode usar a palavra reservada concat
console.log(escola.replace(3, 'e'))//você substitui o numero 3 pela letra e
console.log("Ana,Maria,Pedro".split(','))//funçao split transforma em uma array usando o separador que você quiser nesse caso foi a virgula
