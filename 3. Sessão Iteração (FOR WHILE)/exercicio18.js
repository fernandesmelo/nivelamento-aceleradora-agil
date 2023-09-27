// 18) Faça um programa que gera uma tabela de conversão de polegadas para centimetros, de 1 a 20. 
// Considere que 1 pol = 2.54 cm.

const taxaConversao = 2.54;
let myArray = [];

for (let numero = 0; numero <= 20; numero++) {
    myArray.push(numero * taxaConversao);
}

console.table(myArray);