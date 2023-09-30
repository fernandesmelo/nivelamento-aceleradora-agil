// 14. Faça um programa que leia um vetor A de 10 elementos contendo números inteiros. Determine e mostre, a seguir,
// quais elementos de A estão repetidos e quantas vezes cada um se repete.

function contarElementosRepetidos(vetor) {
    const ocorrencias = {}; 
  
    for (const elemento of vetor) {
      if (ocorrencias[elemento]) {
        ocorrencias[elemento]++;
      } else {
        ocorrencias[elemento] = 1;
      }
    }
  
    return ocorrencias;
  }
  
  const vetorA = [2, 4, 2, 5, 7, 5, 8, 8, 8, 1];
  
  const ocorrencias = contarElementosRepetidos(vetorA);
  
  console.log("Elementos repetidos e suas ocorrências:");
  for (const elemento in ocorrencias) {
    if (ocorrencias[elemento] > 1) {
      console.log(`${elemento}: ${ocorrencias[elemento]} vezes.`);
    }
  }
  