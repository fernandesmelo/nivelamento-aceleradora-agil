//Faça um programa que leia o nome e a média de alunos. O programa deverá parar quando o nome de aluno informado for igual a "fim". 
//Quando terminar o programa deverá informar a média de todos os alunos e o número de alunos que tiveram suas médias informadas.
let continuar = true;
let nome;
let media;
let totalAlunos = 0;
let listaAlunos = "";

do{

    nome = prompt("Digite o nome do aluno (ou fim para Sair):  ");
   
    if(nome.toLowerCase() == "fim"){
        continuar = false;
        break;
    }
    if(nome === null){
        alert("Digite o nome ou fim para Sair");
        continuar = false;
    }

    listaAlunos += `Nome: ${nome} \n`;

    media = prompt(`Digite a média do aluno ${nome}: `);
    listaAlunos += `Média: ${media} \n`;

    totalAlunos++;

}while(true);

console.log(`
Médias Informadas:
${listaAlunos}           
Total de Alunos: ${totalAlunos}.`);

