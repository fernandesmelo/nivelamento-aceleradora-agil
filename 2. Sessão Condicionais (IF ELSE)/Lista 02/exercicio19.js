// 19) O custo ao consumidor de um carro novo é a soma do preço de fábrica com o percentual de lucro do distribuidor e 
// dos impostos aplicados ao preço de fábrica. Faça um programa que recebe o preço de fábrica de um veículo, o percentual 
// de lucro do distribuidor e o percentual de impostos, calcule e mostre:
// a) o valor correspondente ao lucro do distribuidor; 
// b) o valor correspondente aos impostos;
// c) o preço final do veículo.

let precoFabrica = Math.random() * 50000;
let percentualLucro = Math.floor(Math.random() * 100);
let percentualImpostos = Math.floor(Math.random() * 100);

function calculaLucroDistribuidor(precoFabrica, percentualLucro) {
    return lucroDistribuidor = (percentualLucro / 100) * precoFabrica;
}

function calculaValorImpostos(precoFabrica, percentualImpostos) {
    return imposto = (percentualImpostos / 100) * precoFabrica;
}

function precoFinalVeiculo(precoFabrica, lucroDistribuidor, imposto) {
    return precoFinal = precoFabrica + lucroDistribuidor + imposto;
}

console.log("Preçode Fábrica Geradao: R$"+precoFabrica.toFixed(2));
console.log("Percentual de Lucro Gerado:",percentualLucro+"%");
console.log("Percentual de Impostos Gerados:",percentualImpostos+"%");
console.log(`Lucro do Distribuidor: R$${calculaLucroDistribuidor(precoFabrica, percentualLucro).toFixed(2)}`);
console.log(`Impostos: R$${calculaValorImpostos(precoFabrica, percentualImpostos).toFixed(2)}`);
console.log(`Preço Final: R$${precoFinalVeiculo(precoFabrica, lucroDistribuidor, imposto).toFixed(2)}`);

