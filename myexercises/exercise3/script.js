const number = []

function Mostrar() {
    const num = document.getElementById('num')
    const resp = document.getElementById('resp')
    const nos = Number(num.value)

    if (number.length >= 5) {
        window.alert('Limite de números excedido!')
        return 
    }

    number.push(nos)
    resp.innerHTML += ` ${nos} `
    num.value = '' 

    

}