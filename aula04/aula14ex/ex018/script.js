//alert("ola!")
function contar() {
    // let dados = document.querySelector('div#dados')
    let inicio = document.getElementById('iniciox')
    let fim = document.getElementById('fimx')
    let passo = document.getElementById('passox')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossivel contar!"
        // alert("[Error] Falta dados")
    } else {
        res.innerHTML = "contando:<br> "
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)
        if (pas <= 0){
            window.alert("Passo invalido, considerando passo 1")
            pas = 1
        }
        if (ini < fi) {
            for (let c = ini; c <= fi; c += pas) {
                res.style.textAlign = 'center'
                res.innerHTML += `\u{1F449} ${c} `
            }
        }
     else {
        res.innerHTML = "contando: "
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)
        //inicio = x; inicio <= y; inicio + z 
        for (let c = ini; c >= fi; c -= pas) {
            res.style.textAlign = 'center'
            res.innerHTML += `\u{1F449} ${c} `
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
}