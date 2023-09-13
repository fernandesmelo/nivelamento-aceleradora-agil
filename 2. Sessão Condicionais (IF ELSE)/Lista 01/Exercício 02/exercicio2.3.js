// 2.3. DN Reajuste:
// PASSO 01 - Receber o salário atual do funcionário;
// PASSO 02 - Se o salário atual do funcionário for de até R$ 2.500,00, calcular o novo salário com percentual de aumento 
// de 20%; caso contrário, calcular o novo salário com percentual de aumento de 10%;
// PASSO 03 - Mostrar o novo salário.

let salario = Math.floor(Math.random() * 5000);

console.log(`Salário: R$${salario.toFixed(2)}`);

if (salario <= 2500) {
    const aumento20 = salario * 0.20;
    let novoSalario = salario + aumento20;
    console.log(`Seu novo salário teve um aumento de 20% totalizando R$${novoSalario.toFixed(2)}.`);
} else {
    const aumento10 = salario * 0.10;
    let novoSalario = salario + aumento10;
    console.log(`Seu novo salário teve um aumento de 10% totalizando R$${novoSalario.toFixed(2)}.`);
} 