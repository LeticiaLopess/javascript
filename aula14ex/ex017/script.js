function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // para limpar o quadro da tabuada antes de aparecer outra se não vai aparecer todas uma em baixo da outra
        while (c <= 10) {
            let item = document.createElement('option') // tem option em HTML também
            item.text = `${n} x ${c} = ${n*c}` // QUE MANEIROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
            item.value = `tab${c}` // para que você consiga selecionar uma linha de conta da tabuada
            tab.appendChild(item) // para aparecer a conta, se não, não aparece
            c++
        }
    }

}
