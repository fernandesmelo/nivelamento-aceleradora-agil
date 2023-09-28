// 8. Faça um algoritmo que leia o nome, o custo e o preço de venda de 50 produtos. Ao final deverá informar a
// quantidade de produtos que:
// a. Tem lucro menor que 10%;
// b. Tem lucro entre 10% e 30%;
// c. Tem lucro maior que 30%.

function calcularLucroPercentual(custo, precoVenda) {
    return ((precoVenda - custo) / custo) * 100;
}

const nomes = [];
const custos = [];
const precosVendas = [];

for (let i = 0; i < 10; i++) {
    nomes.push(`Produto ${i + 1}`);
    custos.push(parseFloat((Math.random() * 100).toFixed(2)));
    precosVendas.push(parseFloat((Math.random() * 150 + 50).toFixed(2)));
}

let produtosLucroMenor10 = 0;
let produtosLucroEntre10e30 = 0;
let produtosLucroMaior30 = 0;

for (let i = 0; i < 10; i++) {
    const lucroPercentual = calcularLucroPercentual(custos[i], precosVendas[i]);

    if (lucroPercentual < 10) {
        produtosLucroMenor10++;
    } else if (lucroPercentual >= 10 && lucroPercentual <= 30) {
        produtosLucroEntre10e30++
    } else {
        produtosLucroMaior30++
    }
}

console.log(`Nomes Gerados: ${nomes}`);
console.log(`Custos Gerados: ${custos}`);
console.log(`Preços de Vendas Gerados: ${precosVendas}`);
console.log(`Produtos com lucro menor que 10%: ${produtosLucroMenor10}`);
console.log(`Produtos com lucro entre 10% e 30%: ${produtosLucroEntre10e30}`);
console.log(`Produtos com lucro maior que 30%: ${produtosLucroMaior30}`);