function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 5))

/* 
Caso não sejam atribuidos dois valores (apenas 1 por exemplo), retornará NaN, pois o que não foi atribuído será entendido como indefinido, para isso, podemos escrever da seguinte forma (fazendo com que n1 e n2 recebam 0):

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(7))
*/