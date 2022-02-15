let a = 7 
let b = 94

/* a = 94 // podemos mudar variavel desse forma porem, em caso em que a variavel está
b = 7 // sendo constantemente recalculado optar pela opção abaixo
*/ 

let temp = a; // criando uma variavel temporaria
a = 94;
b = temp;


// fazer a troca de valor e depois da troca.... a = 94 e b = 7

console.log(a);
console.log(b);