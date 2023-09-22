// Criar um algoritmo que leia dois números e mostre o quadrado do menor número e raiz quadrada do maior número, se for 
// possível.

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

let maior, menor;

if (num1 < num2) {
    maior = num2;
    menor = num1;
} else {
    maior = num1;
    menor = num2;
}

const quadrado = menor ** 2;
const raizQuadrada = Math.sqrt(maior);

console.log("Números Gerados:", num1, "e", num2);
console.log("Maior Número:", maior);
console.log("Menor Número:", menor);
console.log("Quadrado do menor número é:", quadrado);
console.log("Raiz Quadrada do maior número é:", raizQuadrada.toFixed(2));
