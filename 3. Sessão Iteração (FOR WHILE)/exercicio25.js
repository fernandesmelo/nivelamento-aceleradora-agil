// 25) Faça um programa que leia o código, sexo e o número de horas trabalhadas de cada funcionário de uma empresa e 
// informe o salário bruto e o salário liquido de cada um. Ao final da execução seu programa deverá informar também a 
// média dos salários líquidos dos funcionários do sexo masculino e do sexo feminino. Para elaborar seu programa considere
// que:
// a. Cada funcionário recebe R$ 26,90 por hora trabalhada.
// b. O salário líquido dos homens tem um desconto de 10%, e das mulheres de 6%;
// c. As entradas de dados terminarão quando for informado o código de usuário -11.

let totalSalarioMasculino = 0;
let totalSalarioFeminino = 0;
let contadorMasculino = 0;
let contadorFeminino = 0;

function calcularSalarioLiquido(sexo, horasTrabalhadas) {
  const valorPorHora = 26.9;
  const salarioBruto = valorPorHora * horasTrabalhadas;
  let desconto = 0;

  if (sexo === 'M') {
    desconto = salarioBruto * 0.1; // 10% de desconto para homens
    totalSalarioMasculino += salarioBruto - desconto;
    contadorMasculino++;
  } else if (sexo === 'F') {
    desconto = salarioBruto * 0.06; // 6% de desconto para mulheres
    totalSalarioFeminino += salarioBruto - desconto;
    contadorFeminino++;
  }

  return salarioBruto;
}

let codigoFuncionario;
while (true) {
  codigoFuncionario = parseInt(prompt('Digite o código do funcionário (-11 para sair):'));

  if (codigoFuncionario === -11) {
    break;
  }

  const sexo = prompt('Digite o sexo do funcionário (M/F):');
  const horasTrabalhadas = parseFloat(prompt('Digite o número de horas trabalhadas:'));
  const salarioLiquido = calcularSalarioLiquido(sexo, horasTrabalhadas);

  console.log(`Código do Funcionário: ${codigoFuncionario}`);
  console.log(`Sexo do Funcionário: ${sexo}`);
  console.log(`Salário Bruto: R$ ${salarioLiquido.toFixed(2)}`);
}

const mediaSalarioMasculino = totalSalarioMasculino / contadorMasculino;
const mediaSalarioFeminino = totalSalarioFeminino / contadorFeminino;

console.log(`Média salário líquido (Masculino): R$ ${mediaSalarioMasculino.toFixed(2)}`);
console.log(`Média salário líquido (Feminino): R$ ${mediaSalarioFeminino.toFixed(2)}`);
