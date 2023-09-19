// Dados três valores A, B e C, construa um algoritmo que mostre os valores de forma ascendente (do menor para o maior).

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 100);

let menor, meio, maior;

if (a <= b && a <= c) {
    menor = a;
    if (b <= c) {
        meio = b;
        maior = c;
    } else {
        meio = c;
        maior = b;
    }
} else if (b <= a && b <= c) {
    menor = b;
    if (a <= c) {
        meio = a;
        maior = c;
    } else {
        meio = c;
        maior = a;
    }
} else {
    menor = c;
    if (a <= b) {
        meio = a;
        maior = b;
    } else {
        meio = b;
        maior = a;
    }
}
console.log("Números Gerados:", a, b, c);
console.log("Valores em ordem ascendente:", menor, meio, maior);
