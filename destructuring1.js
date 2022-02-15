//novo recurso do ES2015

//desestruturando objetos ele usa {}

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'rua abc',
        numero: 1000,
    }
}

const {nome, idade} = pessoa  // a partir do objeto pessoa eu queira extrair a variavel nome e idade
// usando o operador destructuring para extrair esses atributos {}
console.log(nome, idade)

//trocando o nome dos atributos extraídos
const {nome: n, idade: i} = pessoa // atributo nome passa a ser n e atributo idade passa a ser i
console.log(n, i)

const { sobrenome, bemhumorada} = pessoa
console.log(sobrenome, bemhumorada)  //como ele não encontra essa atribuição ele retona undefined

//buscando atributo de um ojeto dentro do outro
const {endereco: { logradouro, numero}} = pessoa
console.log(logradouro, numero )



