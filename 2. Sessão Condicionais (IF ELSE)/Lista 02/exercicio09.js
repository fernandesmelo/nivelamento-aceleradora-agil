// 9) Faça um programa que receba o salário base de um funcionário, calcule e mostre o salário a receber sabendo- se que o 
// funcionário tem gratificação de 5% sobre o salário base e paga imposto de 7% sobre o salário com a gratificação.

let salario = parseFloat((Math.random() * 5000).toFixed(2));

console.log("Salário incial: R$", salario);

const salarioComGratificacao = (salario) => {
    return (salario + (salario* 0.05));
}

const salarioMenosImposto = (salarioComGratificacao) => {
    return salarioComGratificacao - (salarioComGratificacao * 0.07);
}

console.log(`O salário com gratificação de 5% é R$${salarioComGratificacao(salario).toFixed(2)}`);
console.log(`O salário total depois do imposto de 7% pago é R$${salarioMenosImposto(salarioComGratificacao(salario)).toFixed(2)}`);

