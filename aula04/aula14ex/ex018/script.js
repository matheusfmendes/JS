function calcular() {
    let number;
    let dividendo = document.getElementById('divi')
    let result = document.getElementById('res')
 
    if (dividendo = Number <= 0) {
        dividendo = Number(divi.value)

        for (number = -10; number <= 0; number++) {
            result.innerHTML = 'calculando numeros negativos: <br/>'
            let resultado = dividendo * number;
        
            result.innerHTML += `${dividendo} X ${number} = ${resultado}`
            // console.log(`${dividendo} X ${number} = ${resultado}`);
            // dividendo = Number(divi.value)
        }
    } else {
        for (number = 0; number <= 10; number++) {
            result.innerHTML = 'calculando: <br/>'
      
            let resultado = dividendo * number;
            dividendo = Number(divi.value)
            result.innerHTML+= `${dividendo} X ${number} = ${resultado}<br />`

        }
    }

}