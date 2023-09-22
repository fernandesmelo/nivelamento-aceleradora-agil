// 10) Faça um programa que leia um número não determinado de pares de valores [M,N], todos inteiros e positivos, um par 
// de cada vez, e que calcule e mostre a soma de todos os números inteiros de M até N (inclusive). A digitação de pares 
// terminará quando M for maior ou igual a N.


const somaIntervalo = (M, N) => {
    if(M >= 0 && N >= 0 && Number.isInteger(M) && Number.isInteger(N)) {
        let soma = 0;

        for(let numero = M; numero <=N; numero++) {
            soma += numero;
        }

        return `A soma do intervalo entre ${M} e ${N} é ${soma}`;

    }else{
            return 'Valores inválidos';
    }

    
}


console.log(somaIntervalo(2, 9));
