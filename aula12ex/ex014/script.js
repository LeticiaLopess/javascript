function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() // para pegar a hora atual
    // var hora = data.getHours() // para pegar a hora atual
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#77771f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e3aa8f'
    } else {
        // BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#172e4d'
    }

}