const array = []

const num = document.querySelector('input#num')
const lista = document.querySelector('select#lista')
const res = document.querySelector('div#res')

function Adicionar() {
    if (!num) {
        window.alert('Por favor, insira um número e tente novamente!')
    } else {
        if (array.includes(num)) {
            window.alert('Valor inválido ou já encontrado na lista')
        } else {
            array.push(num)
            item.innerHTML = `Valor ${num} adicionado.`
            sel.appendChild(item)
        }
    }
}

// sel.appendChild(item) está no fim de else pois só irá aparecer se passar nas condições