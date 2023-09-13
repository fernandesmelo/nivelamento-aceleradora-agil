// 2.1. DN Dividir I:
// PASSO 01 - Receber os dois números que serão divididos;
// PASSO 02 - Se o segundo número for igual a zero, não poderá ser feita a divisão, pois não existe divisão por zero; 
// caso contrário, dividir os números e mostrar o resultado da divisão.

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

console.log(`Números Gerados: ${num1}, ${num2}`);

if (num2 === 0) {
    console.log("Não é possível realizar divisão por zero.");
} else {
    let resultado =(num1 / num2).toFixed(2);
    console.log(`O resultado da divisão é ${resultado}.`);
}
