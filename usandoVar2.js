var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//a palavra reservada var mesmo estando fora e dentro do bloco ela pode ser subescrita
//isso somente não ocorrerá caso ela esteja dentro de uma function
//a palavra reservada var tem escopo global e de função
//usando JS no front evitar usar a palavra reservada var para que ela não seja subescrita
//no node como cada arquivo é um modulo isso não ocorre a não ser que esteja dentro do mesmo arquivo