// Escreva um algoritmo que leia um número e imprima a raiz quadrada do número, caso ele seja positivo ou igual a zero; 
// e o quadrado do número, caso ele seja negativo.

let numero = -10;

if (numero >= 0) {
    console.log(`${Math.sqrt(numero)} é a raiz quadrada de ${numero}.`);
} else {
    console.log(`${Math.pow(numero, 2)} é o quadrado do número ${numero}.`);
} 