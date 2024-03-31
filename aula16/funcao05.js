// Fatorial de forma recursiva
// Uma recurssão acontece quando uma função chama ela mesma

/*
5! = 5 x 4 x 3 x 2 x 1
5! 5 * 4!
n! = n x (n-1)!
1! = 1
*/

 // No caso abaixo, tem a função fatorial que possui um chamada pra ela mesma(RECURSIVIDADE)
 
 function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1) // o fatorial de um número é o número x o fatorial dele menos 1.
    }
}
 console.log(fatorial(4))

