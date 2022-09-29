let amigo = {nome: 'Jose',
sexo: 'M',
peso: '85,4',
engordar(p=0){ // podemos colocar uma função dentro de um objeto
    console.log('Engordou')
    this.peso += p // this. - referencia o objeto
}}

amigo.engordar(2) // acresce o peso de amigo no valor de 2, de acordo com a função definida acima
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`) 