function calcular() {
    let number;
    let dividendo = document.getElementById('divi')
    let result = document.getElementById('div#res')

  //  if (dividendo.value.length == -dividendo.value.length) {
        for (number = -10; number <= 0; number++) {
            let resultado = dividendo * number;
            result.innerHTML = 'calculando numeros negativos'
            console.log(`${dividendo} X ${number} = ${resultado}`);
            dividendo = Number(divi.value)
        }
    //} else {
        for (number = 0; number <= 10; number++) {
            let resultado = dividendo * number;
            result.innerHTML = 'calculando'
            result.innerHTML =(`${dividendo} X ${number} = ${resultado}`);

        }
    //}

}