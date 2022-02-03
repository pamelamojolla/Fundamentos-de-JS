//içamento - o código é lido linha por linha mas nesse caso usando var ocorre o efeito içamento
//içamento eh quando a linguagem pega a variavel e eleva para o topo

console.log('a =', a ); // nessa linha não foi declar a variavel = resultado undefined mas ela existe
var a = 2               //a varaivel foi declarada 
console.log('a =', a);  //aqui ele já entende que a variavel a existe e foi declarada

console.log('b =', b) //quando você trabalha com let isso não ocorre
let b = 2             //com a palavra reserva let ele não faz o içamento  
console.log('b =', b)