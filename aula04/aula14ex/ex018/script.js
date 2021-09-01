function calcular() {
    let number = 0;
    let dividendo = document.getElementById('divi')
    let result = document.getElementById('res')

    if (dividendo = Number <= 0) {
        
        dividendo = Number(divi.value.length)
        
        result.innerHTML = "contando: "
        
             for (number = 0; number <= 10; number++) {

            let resultado = dividendo * number;
            result.innerHTML += `<option>${dividendo} X ${number} = ${resultado}</option>`
            
        // result.style.overflowY = 'scroll'
        // result.style.width = '162px'
        // result.style.height = '250px'
        }
    }

}
