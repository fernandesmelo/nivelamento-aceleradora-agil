// 9) Faça um programa que leia N números e ao final mostre os 3 maiores números digitados.

const numeros = (quantity) => {
    let listaNumeros = [];

    //Leitura dos números
    for(let i = 0; i < quantity; i++) {
        listaNumeros.push(Math.floor(Math.random() * 100));
    }

    const listaOrdenada = listaNumeros.sort();


    return `
    Os três maiores números do array [${listaOrdenada}] são:
    ${listaOrdenada[quantity - 1]}, ${listaOrdenada[quantity - 2]} e ${listaOrdenada[quantity - 3]}.
    `;


}

console.log(numeros(10));