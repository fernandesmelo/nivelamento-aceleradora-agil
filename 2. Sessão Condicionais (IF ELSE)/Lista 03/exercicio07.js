//Escreva um algoritmo que receba um número e imprima uma das mensagens: "é múltiplo de 3" ou "não é múltiplo de 3".

let numero = Math.floor(Math.random() * 100);

if (numero % 3 === 0) {
    console.log(numero, "é múltiplo de 3.");
} else {
    console.log(numero, "não é múltiplo de 3.");
}