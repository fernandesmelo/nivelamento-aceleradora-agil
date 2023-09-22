//Construa um algoritmo que determine (imprima) se um dado número N inteiro, recebidoa através do teclado é PAR ou ÍMPAR.

let numero = Math.floor(Math.random() * 100);

if (numero % 2 === 0) {
    console.log(numero, "é um número par.")
} else {
    console.log(numero, "é um número ímpar.");
}