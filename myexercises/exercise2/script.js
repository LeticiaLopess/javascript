const number = []

function Adicionar () {
    let num = document.getElementById('numb')
    let values = document.getElementById('values')
    let n1 = Number(num.value)
    if (number.length >= 5 || number.includes(n1)) { // number.includes(n1) verifica se o elemento já está dentro do array, se já estiver, dará erro.
        window.alert('Erro! (Repetição ou excedeu 5 números)')
        return // para a função
    } 

    number.push(n1) // push só funciona para array
    values.innerHTML += ` ${n1} `
    num.value = ''
}

function Calcular () {
    let resp = document.getElementById('resp')
    let quadrado = number.map(num => num**2) // map percorre todos os elementos do array modificando todos de uma vez
    resp.innerHTML += ` ${quadrado} `
    return quadrado
}