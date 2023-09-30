// 16. Desenvolva um algoritmo que leia um vetor de 20 posições inteiras e o coloque em ordem crescente, utilizando a
// seguinte estratégia:
// i. Selecione o elemento do vetor de 20 posições que apresenta o menor valor;
// ii. Troque este elemento pelo primeiro;
// iii. Repita estas operações envolvendo agora apenas os 19 elementos restantes (trocando o de menor valor com a
// segunda posição), depois os 17, os 16 e assim por diante, até restar um único elemento, o maior deles.

function trocarElementos(vetor, i, j) {
    const temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
  }
  
  function ordenarVetor(vetor) {
    const n = vetor.length;
  
    for (let i = 0; i < n - 1; i++) {
      let indiceMenor = i;
  
      for (let j = i + 1; j < n; j++) {
        if (vetor[j] < vetor[indiceMenor]) {
          indiceMenor = j;
        }
      }
  
      if (indiceMenor !== i) {
        trocarElementos(vetor, i, indiceMenor);
      }
    }
  }
  
  const vetor = [30, 10, 15, 5, 25, 20, 35, 45, 40, 50, 60, 55, 65, 70, 75, 80, 85, 90, 95, 100];
  
  console.log("Vetor original:", vetor);
 
  ordenarVetor(vetor);
  
  console.log("Vetor ordenado:", vetor);
  