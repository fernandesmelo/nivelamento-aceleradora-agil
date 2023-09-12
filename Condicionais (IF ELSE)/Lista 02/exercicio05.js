// Faça um programa que receba o peso de uma pessoa em quilos, calcule e mostre esse peso em gramas

const calculaPeso = function (peso){
    return (peso * 1000);
}

let peso = (Math.random() * 150).toFixed(2);

console.log(peso);

let result = calculaPeso(peso);

console.log(`O peso em gramas é ${result} gramas`);