console.log(typeof console) //aqui você já identifica a notação ponto

console.log(Math.ceil(9.1)) //você usa anotação ponto em Math para acessar funçoes desse objetivo (math em JS é um objeto)

const pamela = {}
pamela.nome = 'mojolla'// criar dinamicamente um atributo se uso notação ponto
console.log(pamela)

function Jefferson (nome) {
    this.nome = nome // a palavra this vai criar um atributo publico
}

// anotação ponto (.) te ajuda acessar  os membros de um obejeto / função por meio do ponto


