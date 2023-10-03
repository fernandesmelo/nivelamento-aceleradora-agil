//2.Fazer uma função que retorne um array de nomes das aprovadas


const alunas = [
    { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
    { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
    { nome: "Samantha", prova: { p1: 8, p2: 9.2, p3: 7 } },
    { nome: "Andreia", prova: { p1: 9, p2: 8, p3: 10 } },
    { nome: "Raquel", prova: { p1: 10, p2: 9.7, p3: 5 } },
    { nome: "Amanda", prova: { p1: 2, p2: 4.6, p3: 9.9 } },
    { nome: "Pietra", prova: { p1: 8.3, p2: 3.1, p3: 9.8 } },
    { nome: "Jaqueline", prova: { p1: 3.4, p2: 7.2, p3: 6.8 } },
    { nome: "Alessandra", prova: { p1: 1.4, p2: 2.7, p3: 6.9 } },
    { nome: "Jane Kelly", prova: { p1: 7, p2: 5.5, p3: 9.1 } },
]

const calculaMedia = (prova) => {
    const soma = prova.p1 + prova.p2 + prova.p3;
    return parseFloat(soma / 3);
}



const retornaResultados = () =>{
    let alunasResultados = alunas.map((aluna) => {
        return {
            Nome: aluna.nome, 
            Resultado: Number((calculaMedia(aluna.prova)).toFixed(1)) >= 7 ? "Aprovada" : "Reprovada"
        };
    })
    return alunasResultados;
}

const resultados = retornaResultados(alunas);

console.log("Resultados das Médias");
console.log(resultados);

const retornaAprovadas = (resultados) => {
    const aprovadas = resultados.filter((resultado) => {
        return resultado.Resultado === "Aprovada"; 
    })

    return aprovadas;
}

console.log("Alunas aprovadas:");
console.log(retornaAprovadas(resultados));















// // Função para calcular a média
// const calcularMedia = (prova) => {
//     const soma = prova.p1 + prova.p2 + prova.p3;
//     return parseFloat((soma / 3).toFixed(1));
// };

// // Função para verificar se uma aluna foi aprovada
// const foiAprovada = (aluna) => {
//     return calcularMedia(aluna.prova) >= 7;
// };

// // Função para retornar o array de médias
// const medias = alunas.map((aluna) => ({
//     nome: aluna.nome,
//     media: calcularMedia(aluna.prova),
//     aprovada: foiAprovada(aluna),
// }));

// // Função para retornar o array de nomes das aprovadas
// const aprovadas = alunas.filter((aluna) => foiAprovada(aluna)).map((aluna) => aluna.nome);

// console.log("Médias:", medias);
// console.log("Aprovadas:", aprovadas);