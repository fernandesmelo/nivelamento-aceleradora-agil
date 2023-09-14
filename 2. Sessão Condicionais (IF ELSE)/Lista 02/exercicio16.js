// 16) Faça um programa que receba dois números, calcule e mostre o primeiro número elevado ao segundo.

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);


function numeroElevadoAoSegundo (x, y) {
     let valor = x ** y;
     return valor
}

console.log("O número", num1, "elevado ao número", num2, "é:", numeroElevadoAoSegundo(num1, num2));