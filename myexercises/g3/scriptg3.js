function Contar() {
    const ini = Number(document.getElementById('txti').value)
    const fim = Number(document.getElementById('txtf').value)
    let pas = Number(document.getElementById('txtp').value)
    let res = document.getElementById('res')
    if ( !ini || !fim ) { // .length não funciona com variável convertida pra Number, usamos o !(negação)
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contagem: <br>'
        if (pas <= 0 || !pas) {
            window.alert('Passo inválido! Considerando Passo = 1')
            pas = 1
        }
        if (ini < fim) {
            // Contagem crescente
            for (let i = ini; i <= fim; i += pas) {
                res.innerHTML += ` ${i} \u{1F449}`
            } 
        } else {
            // Contagem regressiva
            for (let i = ini; i >= fim; i -= pas) {
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}