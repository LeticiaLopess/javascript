let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { // não é "1" é "L minúsculo"
    if (l.indexOf(Number(n)) != -1) { // verifica se o número está dentro da lista, pois se não estiver ele retorna -1 ([index=índice, indicador] verifica se algum número da lista é diferente de -1, pois se for igual significa que ele não está na lista)

        // O método .indexOf() busca valores dentro do array
        
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // se ele não estiver na lista, ai vai adicionar
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''        
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' // limpa o search
    num.focus() // pro mouse continuar no search
}

function Finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0] 
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) { // para cada posição em valores (array), vai acontecer o que está entre colchetes | percorrerá todo array, é uma repetição, e comecará na primeira posição -> [0]
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos] // se o novo número analisado for maior do que o que foi analisado antes, o maior será reescrito, tudo por conta do sinal ">"
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}