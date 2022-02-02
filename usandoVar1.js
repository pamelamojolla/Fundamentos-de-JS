{
     {
          {
               {
                    var sera = 'Será???' //colocar a variavel var dentro de vários blocos ela ainda se torna visivel dentro do programa
                    //escopo é o local onde essa variavel é visivel até onde essa var é acessivel 
                    //uma variavel indicada por var ela só tem dois escopos possiveis 
                }
            }
        }
    }
             
 console.log(sera)       

 function teste () {
     var local = 123//nesse caso a var está dentro de um escopo da funcition e somente dentro dela ela é visivel 
     console.log(local)
 }
 
 teste()
 console.log(local)//acessando a variavel fora do bloco da function ela não se torna mais visivel 
 //quando você cria uma variavel fora de uma função ela está acessivel ou seja global
 //nesse caso ela sempre pode ser acessada mas tbm pode ser subescrita