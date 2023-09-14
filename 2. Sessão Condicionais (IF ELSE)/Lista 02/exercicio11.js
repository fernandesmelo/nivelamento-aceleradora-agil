// 11)Faça um programa que leia duas informações do usuário, primeiro deve ser lido o SOBRENOME e depois o NOME de uma 
// pessoa, e após o programa deve exibir a seguinte mensagem: "Sr(a). <NOME> <SOBRENOME>, é uma honra contar com sua 
// presença!".

const readline = require('readline');

const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o sobrenome: ', (sobrenome) => { 
  rl.question('Digite o nome: ', (nome) => { 
    // Fechar a interface de leitura
    rl.close();

    console.log(`Sr(a). ${nome} ${sobrenome}, é uma honra contar com sua presença!`);
  });
});
