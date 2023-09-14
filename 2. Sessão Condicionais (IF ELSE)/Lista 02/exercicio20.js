// 20) Faça um programa que receba o número de horas trabalhadas e o valor do salário mínimo, calcule e mostre o salário a
// receber seguindo estas regras:
// a) a hora trabalhada vale 1/10 do salário mínimo;
// b) o salário bruto equivale ao número de horas trabalhadas multiplicado pelo valor da hora trabalhada;
// c) o imposto equivale a 3% do salário bruto;
// d) o salário a receber equivale ao salário bruto menos o imposto.

let horasTrabalhadas = Math.floor(Math.random() * 200);
let salarioMinimo = 1320

function calculoHoraTrabalhada(salarioMinimo) {
    return (1 / 10) * salarioMinimo;
}
let valorHora = calculoHoraTrabalhada(salarioMinimo);

function calculaSalarioBruto(horasTrabalhadas, valorHora) {
    return horasTrabalhadas * valorHora;
}
let salarioBruto = calculaSalarioBruto(horasTrabalhadas, valorHora);

function calculaImposto(salarioBruto) {
    return 0.03 * salarioBruto;
}
let imposto = calculaImposto(salarioBruto);

function calculaSalarioReceber(salarioBruto, imposto) {
    return salarioBruto - imposto;
}
let salarioReceber = calculaSalarioReceber(salarioBruto, imposto);


console.log("Horas Trabalhadas Geradas:", horasTrabalhadas);
console.log("Salário Mínimo: R$"+salarioMinimo);
console.log(`Valor da Hora Trabalhada: R$${valorHora.toFixed(2)}`);
console.log(`Salário Bruto: R$${salarioBruto.toFixed(2)}`);
console.log(`Imposto: R$${imposto.toFixed(2)}`);
console.log(`Salário à Receber: R$${salarioReceber.toFixed(2)}`);
