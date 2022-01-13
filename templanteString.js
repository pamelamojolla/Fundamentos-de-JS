const nome = 'Receba'
const concatenacao = 'Olá' + nome + '!'

const template = `
    Olá
    ${nome}!`//template string pode quebra o texto ele suporta quebra de texto
// para usar template importante não esquece do simbolo `
// template serve para deixar o código mais limpo - sem tanta concatenação


console.log(concatenacao, template)

//expressoes aritimeticas funciona dentro do template, sempre deixar dentro ${}
console.log(`1 + 1 = ${1 + 1}`)


     
    
