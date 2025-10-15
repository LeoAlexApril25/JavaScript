function carregar() {
    var msg = document.getElementById('msg')
        var foto_p = /** @type {HTMLImageElement} */ (document.getElementsByClassName('foto_p')[0])
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas.'

    if (hora >= 0 && hora < 12) {
        foto_p.src='imagens/Manha.jpg'
        document.body.style.background = '#dda52cff'
        msg.innerHTML += ' Bom dia!'
    }

    else if (hora >= 12 && hora < 18) {
        foto_p.src = 'imagens/Tarde.jpg'
        document.body.style.background = '#b9532aff'
        msg.innerHTML += ' Boa tarde!'
    }

    else {
        foto_p.src = 'imagens/Noite.jpg'
        document.body.style.background = '#161696ff'
        msg.innerHTML += ' Boa noite!'
    }
    
}
