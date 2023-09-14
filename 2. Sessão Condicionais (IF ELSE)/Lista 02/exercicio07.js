// 7) Faça um programa que receba o salário de um funcionário, calcule e mostre o novo salário, sabendo-se que este sofreu 
// um aumento de 25%.

let salario = Math.floor(Math.random() * 5000);

function novoSalario(salario) {
    let novoSalario = (salario * 0.25) + salario;
    return novoSalario
}

console.log("Salário: R$", salario);
console.log("Aumento: 25%");
console.log("Novo Salário: R$",novoSalario(salario));