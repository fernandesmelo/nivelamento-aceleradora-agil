// Escreva um algoritmo para determinar se um número A é divisível por um outro número B.
// Esses valores devem ser fornecidos pelo usuário.

const readline = require('readline');

let rl = readline.createInterface(
                process.stdin, process.stdout);

rl.question('Digite um número: ', (numA) => { 
    rl.question('Digite mais um número: ', (numB) => { 
        // Fechar a interface de leitura
        rl.close();

        if (numA % numB === 0) {
            console.log(numA, "é divisível por", numB);
        } else {
            console.log(numA, "não é divisível por", numB);
        }
    });
});