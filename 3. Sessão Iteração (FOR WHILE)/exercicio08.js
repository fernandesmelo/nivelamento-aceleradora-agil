// 8) Faça um programa que leia N números (o usuário deverá informar a quantidade de números que será informada) 
// e ao final diga qual o valor do maior e do menor número digitado.

// Pergunta ao usuário quantos números serão inseridos
rl.question("Quantos números você deseja informar? ", (n) => {
    n = parseInt(n); // Converte N para um número inteiro

    if (isNaN(n) || n <= 0) {
        console.log("Quantidade inválida. Por favor, insira um número inteiro positivo.");
        rl.close();
        return;
    }

    // Inicializa as variáveis para o maior e o menor números
    let maior = Number.MIN_SAFE_INTEGER;
    let menor = Number.MAX_SAFE_INTEGER;

    // Função recursiva para ler os números
    function lerNumero(count) {
        rl.question(`Informe o ${count}º número: `, (numero) => {
            numero = parseFloat(numero); // Converte o número para um valor de ponto flutuante

            if (!isNaN(numero)) {
                if (numero > maior) {
                    maior = numero;
                }
                if (numero < menor) {
                    menor = numero;
                }

                if (count < n) {
                    lerNumero(count + 1); // Continue lendo os números
                } else {
                    // Todos os números foram lidos, exiba o resultado
                    console.log(`Maior número: ${maior}`);
                    console.log(`Menor número: ${menor}`);
                    rl.close();
                }
            } else {
                console.log("Número inválido. Por favor, insira um número válido.");
                lerNumero(count); // Peça novamente o mesmo número
            }
        });
    }

    lerNumero(1); // Comece a ler os números a partir do primeiro
});
