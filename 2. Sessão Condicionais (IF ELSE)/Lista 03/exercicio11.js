// Construa um algoritmo que, dado quatro valores, A, B, C e D, o algoritmo diga qual é o maior e o menor valor.

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 100);
let d = Math.floor(Math.random() * 100);

let maior = a;
let menor = a;

if (b > maior) {
    maior = b;
} else if (b < menor) {
    menor = b;
}

if (c > maior) {
    maior = c;
} else if (c < menor) {
    menor = c;
}

if (d > maior) {
    maior = d;
} else if (d < menor) {
    menor = d;
}

console.log("Números Gerados:");
console.log("A:", a);
console.log("B:", b);
console.log("C:", c);
console.log("D:", d);
console.log("O maior valor é: " + maior);
console.log("O menor valor é: " + menor);

