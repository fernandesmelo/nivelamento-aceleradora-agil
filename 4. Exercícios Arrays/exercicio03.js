// 3. Faça um programa que preencha um vetor com oito números inteiros, calcule e mostre dois vetores resultantes. O
// primeiro deve conter os números positivos; o segundo deve conter os números negativos. Cada vetor resultante vai ter, 
// no máximo, oito posições, que poderão não ser completamente utilizadas.

let array = [-1, -3, 0, -2, -1, 4, 8, 10];

const vetoresResultantes = (array) => {
    let vetorPositivos = [];
    let vetorNegativos = [];

    for (let i=0; i<array.length; i++) {
        if (array[i] >= 0) {
            vetorPositivos.push(array[i]);
        } else {
            vetorNegativos.push(array[i]);
        }
    }

    console.log(`
    Vetor Positivo: ${vetorPositivos}
    Vetor Negativo: ${vetorNegativos}
    `)

    return;
}

vetoresResultantes(array);