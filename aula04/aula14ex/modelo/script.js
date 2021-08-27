//alert("ola!")
function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtAno')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value.length > ano) {
        alert('verifique os dados e digite novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca_homen.png')

            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'jovem_homem.png')
                
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'jovem_homem.png')

            } else {
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca_mulher.png')

            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'jovem_mulher.png')

            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'mulher.png')

            } else {
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Identificamos ${genero} com  ${idade} anos`
        res.appendChild(img)
    }
}