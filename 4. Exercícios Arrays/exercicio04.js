// 4. Desenvolva um algoritmo que permita a leitura de um vetor de 30 números inteiros, e gere um segundo vetor com os
// mesmos dados, mas de maneira invertida, ou seja, o primeiro elemento ficará na última posição, o segundo na penúltima, 
// e assim por diante.

// const geraVetor = () =>{
//     let array = new Array(30);
//     for (let i = 0; i < array.length; i++){
//         array.push(Math.floor(Math.random() * 50));
//     }
//     console.log(array);
    
//     return array;
// }



const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

const vetorReverso = (lista) =>{
    return lista.reverse();
}

console.log(vetorReverso(vetor));