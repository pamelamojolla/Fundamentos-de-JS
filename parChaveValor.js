// par chave/valor
const saudacao = 'opa'  // contexto léxico 1
//léxico é o local onde sua variavél foi definida dentro do seu código

function exec(){
        const saudacao = 'fala' // contexto léxico 2 aqui temos outro contexto dentro de uma função
        return saudacao //não haverá conflito  pois essa constante está dentro do contexto de function
    }

    //Objetos são grupos aninhados de pares chave/valor

    const cliente = {
        nome:'pedro',
        idade:32,
        peso: 90,
        endereco: {
            logradouro:'rua muito legal',
            numero: 123
        }
    }
console.log(saudacao)//contexto léxico 1
console.log(exec())//contexto léxico 2
console.log(cliente)
