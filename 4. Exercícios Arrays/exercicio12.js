// 12. Construa um algoritmo que leia um vetor com 20 posições. Este vetor deverá conter apenas números inteiros e
// positivos. Após ele deve permitir que o usuário informe um valor para que o algoritmo verifique se este valor está presente
// no vetor ou não. A interação com o usuário terminará quando este informar um valor negativo.

function criarVetor() {
    const vetor = [];
    for (let i = 0; i < 20; i++) {
      vetor.push(Math.floor(Math.random() * 100) + 1); 
    }
    
    return vetor;
  }
  
  function verificarValorNoVetor(vetor, valor) {
    return vetor.includes(valor); 
  }
  
  function main() {
    const vetor = criarVetor(); 
    console.log("Vetor gerado:", vetor);
  
    while (true) {
      const valor = parseInt(prompt("Digite um valor para verificar (digite um valor negativo para sair):"));
  
      if (valor < 0) {
        console.log("Programa encerrado.");
        break; 
      }
  
      const estaNoVetor = verificarValorNoVetor(vetor, valor);
  
      if (estaNoVetor) {
        console.log(`O valor ${valor} está presente no vetor.`);
      } else {
        console.log(`O valor ${valor} não está presente no vetor.`);
      }
    }
  }
  
  main();
  