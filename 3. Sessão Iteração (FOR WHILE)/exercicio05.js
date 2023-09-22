// 5) Faça um programa que leia dois números M e N. mostre todos os números pares de intervalo e ao final diga a quantidade 
// de números pares apresentados na tela.

let contador = 0;
const readline = require('readline');

const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe um número: ", (m) => {
    rl.question("Informe um número maior que o primeiro: ", (n) => {
        rl.close();
        
        console.log("Os números pares entre", m, "e", n, "são:");
        m++
        for (let menor = m; menor < n; menor++) {
            if (menor % 2 === 0) {
                console.log(menor);
                contador++;
            }
        }
        
        console.log(`Foram impressos ${contador} números pares.`);
    })
})

