// 18) Faça um programa que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
// a) a idade desta pessoa;
// b) quantos anos ela terá em 2050.

let anoNascimento = 2011;

const calculaIdadeHoje = anoNascimento => {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

const calculaIdade2050 = anoNascimento => {
    return 2050 - anoNascimento;
}

console.log(`
Hoje você tem ${calculaIdadeHoje(anoNascimento)} anos de idade.
Em 2050 você terá ${calculaIdade2050(anoNascimento)} anos de idade.
`)
