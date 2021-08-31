function calcular() {
    let number = 0;
    let dividendo = document.getElementById('divi')
    let result = document.getElementById('res')

    if (dividendo = Number <= 0) {
        dividendo = Number(divi.value.length)

        for (number = -10; number <= 0; number++) {
            let resultado = dividendo * number;

            result.innerHTML += `${dividendo} X ${number} = ${resultado} `
        }
    } else {
        result.innerHTML = "contando: "
        result.style.overflowY = 'scroll'
        result.style.width = '162px'
        result.style.height = '250px'

        for (number = 0; number <= 10; number++) {

            dividendo = Number(divi.value)

            let resultado = dividendo * number;
            result.innerHTML += `<ul>${dividendo} X ${number} = ${resultado}</ul>`
        }
    }

}