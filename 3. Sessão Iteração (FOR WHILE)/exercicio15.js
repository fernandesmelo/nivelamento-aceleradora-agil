// 15) Faça um algoritmo que leia uma quantidade não determinada de números positivos. Calcule a quantidade de números 
// pares e impares, a média de valores pares e a média geral dos números lidos. O número que encerrará a leitura será zero.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculaMedia() {
  let qtdPar = 0;
  let qtdImpar = 0;
  let qtdGlobal = 0;
  let numero;
  let somaPar = 0;
  let mediaPar = 0;
  let somaGlobal = 0;
  let mediaGlobal = 0;

  function getInput() {
    rl.question('Digite um número positivo (ou 0 para sair): ', (input) => {
      numero = parseInt(input);

      if (!isNaN(numero)) {
        if (numero !== 0 && numero > 0) {
          
          if (numero % 2 === 0) {
            qtdPar++;
            somaPar = somaPar + numero;
            mediaPar = somaPar / qtdPar;
          } else {
            qtdImpar++;
          }
          
          qtdGlobal = qtdPar + qtdImpar;
          somaGlobal = somaGlobal + numero;
          mediaGlobal = somaGlobal / qtdGlobal;
          getInput();
        } else if (numero !== 0) {
          console.log('Por favor, digite um número positivo.');
          getInput();
        } else {
          rl.close();
          console.log(`Números Pares: ${qtdPar}`);
          console.log(`Números Ímpares: ${qtdImpar}`);
          console.log(`Média dos Números Pares: ${mediaGlobal}`);
          console.log(`Média dos Números Globais: ${mediaGlobal}`);
        }
      } else {
        console.log('Por favor, digite um número válido.');
        getInput();
      }
    });
  }

  getInput();
}

calculaMedia();
