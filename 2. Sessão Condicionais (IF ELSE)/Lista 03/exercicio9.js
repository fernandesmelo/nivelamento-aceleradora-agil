// Construa um algoritmo que imprima qual o menor e qual o maior valor de dois números A e B, lidos através do teclado.

const readline = require('readline');

let rl = readline.createInterface(
                process.stdin, process.stdout);

rl.question('Digite um número: ', (numA) => { 
    rl.question('Digite mais um número: ', (numB) => { 
        // Fechar a interface de leitura
        rl.close();

        if (numA > numB) {
            console.log(numA, "é maior que", numB);
        } else if (numA < numB) {
            console.log(numA, "é menor que", numB);
        }
    });
});