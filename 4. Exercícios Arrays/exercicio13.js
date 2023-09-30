// 13. Faça um programa que receba o nome de oito clientes e armazene-os em um vetor. Em um segundo vetor, armazene a
// quantidade de DVDs locados em 2012 por cada um destes clientes. Sabe-se que, para cada dez locações, o cliente tem
// direito a uma locação grátis. Faça um programa que mostre o nome de todos os clientes, com a quantidade de locações
// grátis a que tem direito.

function calcularLocacoesGratis(dvdsLocados) {
    return Math.floor(dvdsLocados / 10);
  }
  
  const nomesClientes = [];
  const dvdsLocadosPorCliente = [];
  
  for (let i = 1; i <= 3; i++) {
    const nome = prompt(`Digite o nome do cliente ${i}:`);
    const dvdsLocados = parseInt(prompt(`Digite a quantidade de DVDs locados em 2012 por ${nome}:`));
    
    nomesClientes.push(nome);
    dvdsLocadosPorCliente.push(dvdsLocados);
  }
  
  console.log("Nome dos clientes e quantidade de locações grátis:");
  for (let i = 0; i < nomesClientes.length; i++) {
    const nome = nomesClientes[i];
    const dvdsLocados = dvdsLocadosPorCliente[i];
    const locacoesGratis = calcularLocacoesGratis(dvdsLocados);
  
    console.log(`${nome}: ${locacoesGratis} locações grátis`);
  }
  