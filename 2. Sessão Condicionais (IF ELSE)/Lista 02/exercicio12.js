// 12) Faça um programa que receba o valor dos catetos de um triângulo, calcule e mostre o valor da hipotenusa. 2 
// (h2=c12+c22).

let cateto1 = Math.floor(Math.random() * (10 - 1) + 1);
let cateto2 = Math.floor(Math.random() * (10 - 1) + 1);

function calcularHipotenusa(cateto1, cateto2) {
    const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
    return hipotenusa;
}

console.log("Cateto 1:", cateto1);
console.log("Cateto 2:", cateto2);
console.log(`A hipotenusa do triângulo é: ${calcularHipotenusa(cateto1, cateto2).toFixed(2)}`);
