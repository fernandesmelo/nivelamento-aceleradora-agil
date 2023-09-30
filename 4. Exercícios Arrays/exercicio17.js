// 17. Crie um algoritmo para ler um vetor de 15 posições inteiras e o coloque em ordem crescente, utilizando como
// estratégia de ordenação a comparação de pares de elementos adjacentes, permutando-os quando estiverem fora de ordem,
// até que todos estejam ordenados.

function trocarElementos(vetor, i, j) {
    const temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
  }
  
  function bubbleSort(vetor) {
    const n = vetor.length;
    let troca;
  
    do {
      troca = false;
  
      for (let i = 0; i < n - 1; i++) {
        if (vetor[i] > vetor[i + 1]) {
          trocarElementos(vetor, i, i + 1);
          troca = true;
        }
      }
    } while (troca);
  }
  
  const vetor = [30, 10, 15, 5, 25, 20, 35, 45, 40, 50, 60, 55, 65, 70, 75];
  
  console.log("Vetor original:", vetor);
  
  bubbleSort(vetor);
  
  console.log("Vetor ordenado:", vetor);
  