function verificar () {
    var data = new Date()
    var ano = data.getFullYear() // ano com 4 dígitos
    var fano = document.getElementById('txtano') // formulário ano
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { // length = comprimento, duração, extensão
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // se fosse em HTML seria tipo: "<img id='foto'>"
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/bebe-f.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // é o que usamos para que a imagem apareça
    }
}