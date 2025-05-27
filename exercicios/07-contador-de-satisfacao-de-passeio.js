






let voltasParaDogFicarSatisfeito = 5
let volta = 1


while (volta <= voltasParaDogFicarSatisfeito) {
    console.log(`volta de n ${volta} com pitoco`)

    volta++
}

console.log("Acabou o passeio, Satisfeito")
console.log("-------------------------")

//exemplo com função


function VerificarSeEstarSatisfeito() {
    while (volta <= voltasParaDogFicarSatisfeito) {
        console.log(`volta de n ${volta} com pitoco`)

        volta++
    }

    console.log("Acabou o passeio, Satisfeito")
}

VerificarSeEstarSatisfeito()