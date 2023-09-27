// 26) A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de 
// filhos. A prefeitura deseja saber:
// a. Média do salário da população; 
// b. média do número de filhos;
// b. Maior salário;
// c. Percentual de pessoas com salário até R$100,00.
// O final da leitura de dados se dará com a entrada de um salário negativo.

const mediaSalario = (array) => {
    let somaSalarios = 0;
    for (let i = 0; i < array.length; i++) {
        somaSalarios += array[i].salario;
    }
    return (somaSalarios / array.length);
}

const mediaNumeroFilhos = (array) => {
    let somaFilhos = 0;
    for (let i = 0; i < array.length; i++) {
        somaFilhos += array[i].numeroFilhos;
    }
    return (somaFilhos / array.length);
}

const maiorSalario = (array) => {
    let maior = array[0].salario;
    for (let i = 1; i < array.length; i++) {
        if (array[i].salario > maior) {
            maior = array[i].salario;
        }   
    }

    return maior;
}

const percentualPessoas = (array) => {
    let somaPessoas = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[j].salario === 100) {
            somaPessoas++;
        }
    }

    return (somaPessoas/array.length) * 100;
}

let dadosPopulacao = [
    {
        salario: 100.00,
        numeroFilhos: 2
    },
    {
        salario: 1000.00,
        numeroFilhos: 7
    },
    {
        salario: 1800.00,
        numeroFilhos: 10
    },
    {
        salario: 1020.00,
        numeroFilhos: 5
    }
]

console.log(`A média salarial da população é  R$${mediaSalario(dadosPopulacao).toFixed(2)}.`); 
console.log(`A média de número de filhos é de ${mediaNumeroFilhos(dadosPopulacao)} filhos.`); 
console.log(`O maior salário é R$${maiorSalario(dadosPopulacao)}.`); 
console.log(`O percentual de pessoas que recebem R100,00 de salário é de ${percentualPessoas(dadosPopulacao)}%.`); 


