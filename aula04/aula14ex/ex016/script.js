//alert("ola!")
function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.querySelector('div#res')
    //inicio = x; inicio <= y; inicio + z 
    for (inicio; inicio <= fim; inicio = inicio + passo) {
        res.style.textAlign = 'center'
        res.innerHTML = `contando ${inicio}`
    }
}