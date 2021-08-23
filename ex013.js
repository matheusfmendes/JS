let agora = new Date()
let diaSem = agora.getDay()

switch (diaSem) {
	case 0:
	console.log("hoje e Domingo!")
		break
	case 1:
	console.log("hoje e Segunda-feira!")
		break

	case 2:
	console.log("hoje e Terca-feira!")
		break
	case 3:
	console.log("hoje e Quarta-feira!")
		break
	case 4:
	console.log("hoje e Quinta-feira!")
		break
	case 5:
	console.log("hoje e Sexta-feira!")
		break
	case 6:
	console.log("hoje e Sabado!")
		break
	default:
	console.log("Dia invalido")
		break
}