// 2.2. DN Dividir II:
// PASSO 01 - Receber o numerador da divisão;
// PASSO 02 - Receber o denominador da divisão;
// PASSO 03 - Se o denominador da divisão for igual a zero, receber novamente o denominador da divisão;
// PASSO 04 - Dividir o numerador pelo denominador e mostrar o resultado.

const readline = require('readline');

let numerador = Math.floor(Math.random() * 10);
let denominador = Math.floor(Math.random() * 10);

console.log(`Números Gerados: ${numerador}, ${denominador}`);

if (denominador === 0) {
    console.log("Digite um número diferente de zero para o denominador.");

    let denominador2 = Math.floor(Math.random() * 100);
    console.log(`O novo denominador é ${denominador2}.`);

    let resultado2 = (numerador/ denominador2).toFixed(2);
    console.log(`O resultado da divisão é ${resultado2}.`);
} else {
    let resultado = (numerador / denominador).toFixed(2);
    console.log(`O resultado da divisão é ${resultado}.`);
}
