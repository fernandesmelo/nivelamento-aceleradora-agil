// 13) Faça um programa que calcule e mostre a área de um triângulo. Sabe-se que: 
// Área = (base * altura)/2.

let base = 16;
let altura = 10;

const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}

console.log(`A área do trinagulo de base ${base} e altura ${altura} é ${areaTriangulo(base, altura)}`);