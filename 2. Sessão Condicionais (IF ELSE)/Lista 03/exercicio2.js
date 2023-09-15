// 2. Escreva um algoritmo que leia o valor unitário e a quantidade vendida de um produto e apresente o valor total da venda.
// Caso o valor total da venda seja superior a R$ 100,00 mostrar a mensagem "Bonificação de 10% para o vendedor!"


let valorPeca = parseFloat((Math.random() * 100).toFixed(2));
let quantidade = Math.floor(Math.random() * 100);

const valorTotalVenda = (valorPeca, quantidade) => {
    return valorPeca * quantidade;
}

const totalVenda = valorTotalVenda(valorPeca, quantidade);

console.log(`O valor unitário é ${valorPeca} e a quantidade vendida é ${quantidade}`);

if(totalVenda > 100){
    console.log(`Bonificação de 10% para o vendedor!`);
}