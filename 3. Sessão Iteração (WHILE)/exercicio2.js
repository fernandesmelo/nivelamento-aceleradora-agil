//2) Faça um programa que leia um número N e mostre na tela todos os números de 0 a N.

let n = Math.floor(Math.random() * 100);

const imprimeNumeros = (n) => {
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }     
}

imprimeNumeros(n);