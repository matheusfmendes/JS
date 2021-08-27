//alert("ola!")
function carregar() {
        let msg = document.getElementById('msg')
        let img = document.getElementById('imagem')
        let data = new Date()
        let hora = data.getHours()
        msg.innerHTML = `Agora sao ${hora} horas`
        if (hora >= 0 && hora < 12) {
                document.body.style.backgroundColor = '#fdf5c6'
                img.src = 'manha.png'
        } else if (hora >= 12 && hora < 18) {
                document.body.style.backgroundColor = '#f86e34'
                img.src = "tarde.png"
        } else {
                document.body.style.backgroundColor = '#252c49'
                img.src = "noite.png"
        }
}