// 7) Faça um programa que leia um número inicial M, um valor de incremento I e o número de incrementos N e após mostre
// N números de I em I começando em M.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe um número inicial: ", (m) => {
    rl.question("Agora informe o valor de incremento: ", (i) => {
        rl.question("Agora informe a quantidade de incrementos: ", (n) => {
            rl.close();
            
            console.log(`Mostrando os próximos ${n} números a partir de ${m}, com incrementos de ${i}:`);
            for (let numero = 0; numero < n; numero++) {
                console.log(m);
                m += i;
            }
        });
    });
});
