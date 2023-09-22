// 11) Faça um programa no qual o usuários insira valores numéricos positivos até digitar -1 e ao final diga quantos 
// números foram digitados.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarNumeros() {
  let numeros = [];
  let numero;

  function getInput() {
    rl.question('Digite um número positivo (ou -1 para sair): ', (input) => {
      numero = parseInt(input);

      if (!isNaN(numero)) {
        if (numero !== -1 && numero >= 0) {
          numeros.push(numero);
          getInput();
        } else if (numero !== -1) {
          console.log('Por favor, digite um número positivo.');
          getInput();
        } else {
          rl.close();
          const totalNumeros = numeros.length;
          console.log(`Total de números digitados: ${totalNumeros}`);
        }
      } else {
        console.log('Por favor, digite um número válido.');
        getInput();
      }
    });
  }

  getInput();
}

contarNumeros();
