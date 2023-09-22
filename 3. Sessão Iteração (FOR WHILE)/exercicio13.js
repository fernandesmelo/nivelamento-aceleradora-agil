// 13) Faça um programa no qual o usuário insira valores numéricos positivos até digitar -1 e ao final informe quantos 
// números pares e quantos números impares foram digitados.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contaParImpar() {
  let contPar = 0;
  let contImpar = 0;
  let numero;

  function getInput() {
    rl.question('Digite um número positivo (ou -1 para sair): ', (input) => {
      numero = parseInt(input);

      if (!isNaN(numero)) {
        if (numero !== -1 && numero >= 0) {
          if(numero % 2 ===0){
            contPar++;
          }else{
            contImpar++;
          }
          getInput();
        } else if (numero !== -1) {
          console.log('Por favor, digite um número positivo.');
          getInput();
        } else {
          rl.close();
          console.log(`O total de números pares digitados é ${contPar} e o total de números ímpares digitados é ${contImpar}`);
        }
      } else {
        console.log('Por favor, digite um número válido.');
        getInput();
      }
    });
  }

  getInput();
}

contaParImpar();
