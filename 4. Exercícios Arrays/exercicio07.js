// 7. Uma pequena loja de artesanato possui apenas um vendedor e comercializa dez tipos de objetos. O vendedor
// recebe um salário de R$ 400,00 acrescido de 5% do valor total de suas vendas. O valor unitário dos objetos deve ser
// informado e armazenado em um vetor; a quantidade vendida de cada peça deve ficar em outro, mas na mesma posição, e o
// código do produto deve ficar em um terceiro vetor, sempre respeitando as posições. Crie um programa que receba o
// código, o preço e quantidade vendida, armazenando-os em seus respectivos vetores, determine e mostre:
// a. Um relatório contendo o código, a quantidade o valor unitário, e o valor total vendido para cada objeto. Ao
// final deverá ser mostrado o valor geral das vendas e o valor da comissão que será paga ao vendedor.
// b. O código e o valor do objeto mais vendido (não se preocupe com empates).

const codigoProduto = [1, 2 , 3, 4, 5, 6, 7];
const precoProduto = [6.00, 1.00, 8.50, 7.50, 3.00, 2.00, 4.00];
const quantidadeVendida = [3, 5, 8, 10, 23, 49, 7];

const relatorioVendas = (codigo, preco, quantidade) => {

    const totalVendas = [];
    
    for(let i=0; i<codigo.length; i++){
        totalVendas.push(preco[i] * quantidade[i]);
    }

    const maisVendido = totalVendas;

    //Emite o relatório de Vendas
    console.log(`=========================Relatório Vendas=======================`);
    console.log(`\tCódigo\t|\tPreço\t|\tQuantidade\t|Total de Vendas\t|Comissão`);
    for(let i = 0; i < codigo.length; i++){
        console.log(`\t${codigo[i]}\t|\t${preco[i].toFixed(2)}\t|\t${quantidade[i]}\t\t|\t\t${(totalVendas[i]).toFixed(2)}\t\tj|\t${(totalVendas[i] * 0.05).toFixed(2)}`);
    }

    console.log(`\nO produto mais vendido: ${maisVendido.sort().pop()}`);

    return;
}


relatorioVendas(codigoProduto, precoProduto, quantidadeVendida);




