// A prefeitura de Contagem abriu uma linha de crédito para os funcionários estatutários. O valor máximo da prestação não 
// poderá ultrapassar 30% do salário bruto. Fazer um algoritmo que permita entrar com o salário bruto e o valor da 
// prestação, e informar se o empréstimo pode ou não ser concedido.

const readline = require('readline');

const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor do salário bruto: ', (salario) => { 
    rl.question('Digite o valor da prestção: ', (prestacao) => { 
        rl.close();

        if (prestacao > (salario * 0.3)) {
            console.log("Empréstimo não pode ser concedido. Valor da prestação é maior que 30% do salário bruto.");
        } else  {
            console.log("Empréstimo pode ser concedido!");
        }
    });
});