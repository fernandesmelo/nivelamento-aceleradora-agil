// 3) Faça um algoritmo que recebe quatro números inteiros, calcule e mostre a soma desses números.

function soma (num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4
}

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);
let num4 = Math.floor(Math.random() * 100);

console.log(`Números Gerados: ${num1}, ${num2}, ${num3} e ${num4}`);
console.log("Soma:", soma(num1, num2, num3, num4)); 
