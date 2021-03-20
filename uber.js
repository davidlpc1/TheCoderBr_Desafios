function descobrirMelhorMotorista(motoristas){
    const formulaDoMelhorMotorista = (corridas,estrelas,distancia) => parseFloat((corridas / (estrelas * distancia)).toFixed(2))

    let maiorNota = 0
    let motoristaComMaiorNota = {}

    motoristas.forEach(motorista => {
        const { corridas,estrelas,distancia } = motorista
        motorista.nota = formulaDoMelhorMotorista(corridas,estrelas,distancia)
        if(maiorNota < motorista.nota) {
            maiorNota = motorista.nota 
            motoristaComMaiorNota = motorista
        }
    })

    return motoristaComMaiorNota
}

const motoristas = [
    { distancia:3 ,estrelas:4.7,corridas: 3000 },
    { distancia:5 ,estrelas:4.2,corridas: 2700 },
    { distancia:4.5 ,estrelas:3.7,corridas: 2800 },
    { distancia:7 ,estrelas:4.8,corridas:1900 },
    { distancia:6 ,estrelas:4.4,corridas:4400 },
]

console.log( descobrirMelhorMotorista(motoristas)) 
//Result: { distancia: 3, estrelas: 4.7, corridas: 3000, nota: 212.77 }