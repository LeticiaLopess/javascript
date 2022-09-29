function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') // colocar um id na própria imagem lá em HTML, não considerar a div da foto...
    // var data = new Date() -> para pegar a data atual
    // var hora = data.getHours() -> para pegar a hora atual
    var hora = 13

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#77771f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e3aa8f'
    } else { // é o último, nem é necessário especificar
        // BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#172e4d'
    }
}