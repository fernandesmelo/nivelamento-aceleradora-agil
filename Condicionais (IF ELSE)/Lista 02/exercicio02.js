//2 - Faça um programa que receba três números, calcule e mostre a multiplicaçãoentre eles.

const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);
const num3 = Math.floor(Math.random() * 100);

console.log(`Os números gerados são ${num1}, ${num2} e ${num3}`);

let multiplicacao = num1 * num2 * num3;

console.log(`O resultado é ${multiplicacao}`);
