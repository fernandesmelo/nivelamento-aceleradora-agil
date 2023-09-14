// 10) Faça um programa que leia o nome e a data de nascimento de uma pessoa (dia, mês e ano), e após informe, junto ao nome 
// da pessoa, quantos dias esta pessoa já viveu. Para simplificar o cálculo considere que todos os meses possuem 30 dias, e 
// todos os anos 365 dias.

let nome = "Laércio"
let diaNasc = 7;
let mesNasc = 9;
let anoNasc = 1998;

function diasDeVida(diaNasc, mesNasc, anoNasc) {
    const diasNoAno = 365;
    const diasNoMes = 30;

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diasAtual = dataAtual.getDate();

    const dias = diasAtual - diaNasc;
    const mes = mesAtual - mesNasc;
    const anos = anoAtual - anoNasc;

    const diasDeVida = (anos * diasNoAno) + (mes * diasNoMes) + dias;

    return diasDeVida;
}

console.log(`${nome} tem ${diasDeVida(diaNasc, mesNasc, anoNasc)} dias de vida.`);










