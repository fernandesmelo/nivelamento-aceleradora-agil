// 6) Faça um programa que leia dois números M e N e mostre todos os números divisíveis por 3 do intervalo.

const readline = require('readline');

const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe um número: ", (m) => {
    rl.question("Informe um número maior que o primeiro: ", (n) => {
        rl.close();
        
        console.log("Os números divisíveis por 3 entre", m, "e", n, "são:");
        m++
        for (let menor = m; menor < n; menor++) {
            if (menor % 3 === 0) {
                console.log(menor);
            }
        }
    })
})

