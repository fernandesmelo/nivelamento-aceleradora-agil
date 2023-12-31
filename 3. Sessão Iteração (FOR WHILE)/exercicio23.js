// 23) Uma das maneiras de se conseguir calcular a raiz quadrada de um número é subtrair dele os números impares 
// consecutivos a partir de 1, até que o resultado seja menor ou igual a zero. O número de vezes que se conseguir fazer as 
// subtrações é a raiz quadrada. Faça um algoritmo que calcule a raiz quadrada de dado número conforme essa regra.

const calculaRaizQuadrada = (num) => {
    let numerosImpares = 1;
    let raizQuadrada = 0;
    let resultado = num;

    while (resultado > 0) {
        resultado -= numerosImpares;
        raizQuadrada++;
        numerosImpares += 2;
    }

    return raizQuadrada;
}

console.log(calculaRaizQuadrada(81));