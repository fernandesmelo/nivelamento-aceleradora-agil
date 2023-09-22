// Construir um algoritmo que leia um número e imprima se ele é igual a 5, a 200, a 400, se está no intervalo entre 500 
// e 1000, inclusive, ou se ela está fora dos escopos anteriores.

let num = Math.floor(Math.random() * 1001);

if (num === 5 || num === 200 || num === 400 || (num >= 500 && num <= 1000)) {
    console.log(num, "está dentro dos escopos.");
} else {
    console.log(num, "está fora dos escopos.");
}