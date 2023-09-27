// 1. Crie um algoritmo que leia um vetor de 10 posições depois apresente este vetor em ordem inversa na tela.

function vetorEmOrdemInversa() {
  const vetor = new Array(10);

  for (let i = 0; i < 10; i++) {
    const valor = parseInt(prompt(`Digite o valor da posição ${i + 1}:`))
    vetor[i] = valor;
  }

  const vetorInverso = vetor.reverse();

  console.log("Vetor em ordem inversa:", vetorInverso);
}

vetorEmOrdemInversa();