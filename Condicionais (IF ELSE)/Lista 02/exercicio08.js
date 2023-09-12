// Faça um programa que recebe o salário de um funcionário e o percentual de aumento, calcule e mostre o valor do aumento 
// e o novo salário.

function novoSalario () {
    let salario = Math.floor(Math.random() * 5000);
    let percentualAumento = Math.floor(Math.random() * 100);

    let novoSalario = salario * (percentualAumento / 100) + salario;
    
    console.log("Salário: R$"+salario)
    console.log("Percentual de Aumento:", percentualAumento+"%");
    console.log("Novo Salário: R$"+novoSalario);
}

console.log(novoSalario());