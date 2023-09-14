// 15) Faça um programa que solicite um número positivo e maior que zero, calcule e mostre:
// a) o número digitado ao quadrado; 
// b) o número digitado ao cubo;
// c) a raiz quadrada do número digitado; 
// d) a raiz cúbica do número digitado.

let numero = Math.floor(Math.random() * (100 - 1) + 1);

let aoQuadrado = numero ** 2;
let aoCubo = numero ** 3;
let raizQuadrada = Math.sqrt(numero);
let raizCubica =  Math.cbrt(numero);

console.log("Numero gerado:", numero);
console.log("a) O número", numero, "ao quadrado:", aoQuadrado);
console.log("b) O número", numero, "ao cubo:", aoCubo);
console.log("c) A raiz quadrada de", numero+":", raizQuadrada.toFixed(2));
console.log("d) A raiz cúbica de", numero+":", raizCubica.toFixed(2));


