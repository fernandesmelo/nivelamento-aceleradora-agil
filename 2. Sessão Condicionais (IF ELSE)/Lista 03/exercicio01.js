// 1 . Construa um algoritmo que leia dois valores numéricos e efetue a adição; caso o resultado seja maior que 50, 
// apresentá-lo.

let valor1 = Math.floor(Math.random() * 100);
let valor2 = Math.floor(Math.random() * 100);

const soma = (value, value2) => {
    return value + value2;
}

const resultado = soma(valor1, valor2);

console.log(`Os valores gerados são ${valor1} e ${valor2}.`)

if (resultado > 50) {
    console.log(`O resultado da soma é ${resultado}.`);
}