const valores = [7.7, 8.9, 6.3, 9.2]//array é dinamico ele tanto pode crescer quanto encolher
console.log(valores[0], valores[3])//array começa com o índice 0
console.log(valores[4])//se você solicitar um índice que não tem na constante ele retorna undefined

valores [4] = 21//em uma constante que foi atribuidos valores em array você pode incluir e altera-los
console.log(valores)//se entre a posição que você incluiu valores estiver vago o JS vai informar

console.log(valores.length)//essa função mostras quantas posições possui a array

valores.push({id: 3}, false, null, 'teste')//com a função push você pode misturar valores de array com outros dados
console.log(valores)

console.log(valores.pop()) //ele tras o ultimo dado que está na array e exclui ela

delete valores [0] // com o delete você exclui o valor que está na posição escolhida
console.log(valores)