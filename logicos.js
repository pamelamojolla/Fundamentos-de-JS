function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2 // != ou exclusivo
    const manterSaudavel = !comprarSorvete // operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true,true)) // nesse momento eu exibo no terminal a function comprar e
// definir nesse caso que seus parametros (trabalho1 e trabalho2) ambos são verdadeiros dessa
// forma ele resolver a lógica dentro da funciotion
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

