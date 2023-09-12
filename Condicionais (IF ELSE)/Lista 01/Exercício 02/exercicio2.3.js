let salario =  Math.floor(Math.random() * 5000);
console.log(`Salário: R$${salario.toFixed(2)}`);

if (salario <= 2500) {
    const aumento20 = salario * 0.20;
    let novoSalario = salario + aumento20;
    console.log(`Seu novo salário teve um aumento de 20% totalizando R$${novoSalario.toFixed(2)}`);
} else {
    const aumento10 = salario * 0.10;
    let novoSalario = salario + aumento10;
    console.log(`Seu novo salário teve um aumento de 10% totalizando R$${novoSalario.toFixed(2)}`);
} 