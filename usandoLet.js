var numero = 1  //nesse exemplo foi usado var
{ 
    let numero = 2  //a palavra reservada let ela tem um escopo mais restrito 
    console.log('dentro =',  numero)  //ela tem o escopo global/função/bloco
}

console.log('fora =', numero)
//ela executa primeiro oque está dentro do escopo menor se não encontrar ela fica mais abrangente


var numero = 1 //nesse exemplo foi usado let
{ 
    let numero = 2  
    console.log('dentro =',  numero)  
}

console.log('fora =', numero)

// a linguagem JS criou uma nova palavra reservada pois se fosse mudado o comportamento da palavra reservada var
// teria muito problema com programas anteriores usando o antigo comportamento


var numero = 1 //nesse exemplo mudei o nome da variavel let e ele fez uma busca abrangente
{ 
    let pamela = 2  
    console.log('dentro =',  numero)  // nesse caso dentro do escopo de bloco ele não achou a variavel
}

console.log('fora =', numero)