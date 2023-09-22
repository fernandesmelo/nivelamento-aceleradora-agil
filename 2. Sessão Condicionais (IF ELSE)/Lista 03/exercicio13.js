//Dados três valores A, B e C, construa um algoritmo que mostre os valores de forma descendente.

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 100);

let maior;
let meio;
let menor;

if (a > b && a > c) {
    maior = a;
    if (b > c) {
        meio = b;
        menor = c;
    } else {
        meio = c;
        menor = b;
    }

} else if (b > a && b > c) {
    maior = b;
    if (a > c) {
        meio = a;
        menor = c;
    } else {
        meio = c;
        menor = a;
    }
} else {
    maior = c;
    if (b > a) {
        meio = b;
        menor = a;
    } else {
        meio = a;
        menor = b;
    }
}

console.log(`
Os números gerados são: ${a}, ${b} e ${c}.
Os número sem ordem descendente: ${maior}, ${meio} e ${menor}. `)