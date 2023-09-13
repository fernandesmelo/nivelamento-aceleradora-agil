// 1) Faça um programa que receba dois números, calcule e mostre a subtração do primeiro pelo segundo.

const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);

console.log(`Números Gerados: ${num1}, ${num2}`);

let resultado = num1 - num2;

console.log("O resultado da subtração é " + resultado,".");