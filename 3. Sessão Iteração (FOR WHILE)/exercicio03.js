// 3) Faça um programa que leia dois números M e N e mostre todos os números entre estes valores na tela (o usuário deve 
// informar um valor para M menor que o valor de N).

const readline = require('readline');

const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe um número: ", (m) => {
    rl.question("Informe um número maior que o primeiro: ", (n) => {
        rl.close();
        
        console.log("Os números entre", m, "e", n, "são:");
        m++
        for (let menor = m; menor < n; menor++) {
            console.log(menor);
        }
    })
})