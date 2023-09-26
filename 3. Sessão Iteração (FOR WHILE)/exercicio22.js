// 22) Dados dois números, obter o quociente inteiro através de subtrações sucessivas.

// Para obter o quociente inteiro de dois números através de subtrações sucessivas, você pode seguir os seguintes passos:

// Inicialize uma variável para armazenar o quociente inteiro com zero.
// Subtraia o segundo número do primeiro número até que o primeiro número seja menor do que o segundo.
// A cada subtração bem-sucedida, aumente o valor da variável de quociente em 1.
// O valor final da variável de quociente será o quociente inteiro desejado.

let quociente = 0;

let dividendo = parseFloat(prompt("Informe o dividendo: "));
let divisor = parseInt(prompt("Informe o divisor: "));

while (dividendo >= divisor) {
    dividendo -= divisor;
    quociente++;
}

console.log(`O quociente inteiro é ${quociente}`);