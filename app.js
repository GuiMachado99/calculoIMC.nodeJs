function calcularImc(digitarAltura , digitarPeso) {
    const altura = digitarAltura
    const peso = digitarPeso
    const imc = peso / (altura *  altura)
    
let mensagem;

if (imc < 18.5) {
    mensagem = `- Indivíduo abaixo de seu peso ideal`;
} else if (imc >= 18.5 && imc < 24.9) {
    mensagem = `- Indivíduo no seu peso ideal`;
} else if (imc >= 25 && imc < 29.9) {
    mensagem = `- Indivíduo com sobrepeso`;
} else if (imc >= 30 && imc < 34.9) {
    mensagem = `- Indivíduo com obesidade grau 1`;
} else if (imc >= 35 && imc < 39.9) {
    mensagem = `- Indivíduo com obesidade grau 2`;
} else {
    mensagem = `- Indivíduo com obesidade grau 3`;
}

console.log(`IMC ${imc.toFixed(2)} ${mensagem}`)

}

calcularImc(1.89, 300)

