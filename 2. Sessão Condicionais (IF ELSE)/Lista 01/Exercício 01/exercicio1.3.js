// 1.3. A partir do ano de nascimento de uma pessoa, calcular, aproximadamente, a sua idade e informar se esta pessoa é 
// maior de idade ou não:

let anoNasc = Math.floor(Math.random() * (2023 - 1940) + 1940);

console.log("Ano de Nascimento:", anoNasc)

const anoAtual = 2023
let idade = anoAtual - anoNasc;

console.log(`Sua idade é: ${idade}`);

if (idade >= 18) {
    console.log("É maior de idade.")
} else {
    console.log("É menor de idade.")
}

// Math.random() * (max - min) + min;