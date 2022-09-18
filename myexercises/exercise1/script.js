function calcular () {
    const n1 = document.getElementById('1bim')
    const n2 = document.getElementById('2bim')
    const n3 = document.getElementById('3bim')
    const n4 = document.getElementById('4bim')
    const resp = document.getElementById('resp')
    const a = Number(n1.value)
    const b = Number(n2.value)
    const c = Number(n3.value)
    const d = Number(n4.value)
    const media = (a + b + c + d) / 4
    resp.innerHTML = `A média das notas é igual a ${media}` 
    console.log('teste')
}