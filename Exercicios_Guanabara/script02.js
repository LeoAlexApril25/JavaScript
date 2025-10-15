function Verificar(){
    let data = new Date()
    let ano = data.getFullYear() 
    let Fano = document.getElementById('txtano') 
    let res = document.querySelector('div#res')

    if (Fano.value.length == 0 || Number(Fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let Fsex = document.getElementsByName('radsex')
        let idade = ano - Number(Fano.value)
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        let genero = ''
        if (idade >= 0 && idade < 10){
            //Criança
            if (Fsex[0].checked){
                img.setAttribute('src', 'imagens/CRIANÇA-M.jpg')
            } else if (Fsex[1].checked){
                img.setAttribute('src', 'imagens/CRIANÇA-F.jpg')
            }
        } else if (idade < 21){
            //Jovem
            if (Fsex[0].checked){
                img.setAttribute('src', 'imagens/Jovem-M.jpg')
            } else if (Fsex[1].checked){
                img.setAttribute('src', 'imagens/Jovem-F.jpg')
            }
        } else if (idade < 50){
            //Adulto
            if (Fsex[0].checked){
                img.setAttribute('src', 'imagens/Adulto-M.jpg')
            } else if (Fsex[1].checked){
                img.setAttribute('src', 'imagens/Adulto-F.jpg')
            }
        } else {
            //Idoso
            if (Fsex[0].checked){
                img.setAttribute('src', 'imagens/SENHOR.jpg')
            } else if (Fsex[1].checked){
                img.setAttribute('src', 'imagens/SENHORA.jpg')
            }
        }

        if (Fsex[0].checked){
            genero = 'Homem'
        } else if (Fsex[1].checked){
            genero = 'Mulher'
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}