// 14) Faça um programa que calcule e mostre a área de um círculo. Sabe-se que: Área = π * R2.

let raio = parseInt(Math.random() * 10);

const areaCirculo = (raio) => {
    return Math.PI * Math.pow(raio, 2);
}

console.log(`A área do círculo de raio ${raio} é ${areaCirculo(raio).toFixed(2)}`);
