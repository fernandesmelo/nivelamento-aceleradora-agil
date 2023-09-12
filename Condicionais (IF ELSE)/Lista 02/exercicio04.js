// Fça um programa que receba três notas, calcule e mostre a média artimética entre elas.

function media (nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3).toFixed(1)
}

let nota1 = Math.floor(Math.random() * 10);
let nota2 = Math.floor(Math.random() * 10);
let nota3 = Math.floor(Math.random() * 10);

console.log(`Notas Geradas: ${nota1}, ${nota2} e ${nota3}`);
console.log("Media:", media(nota1, nota2, nota3));
