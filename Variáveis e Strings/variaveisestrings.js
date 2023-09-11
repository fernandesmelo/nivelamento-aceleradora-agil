/* 
    Transforme a string pokemon no seguinte texto:

    Name: Pikachu
    Lv: 3 - Type: ELETRIC
    Ability: static
    Attacks:
        - Thundershock,
        - Quick attack
        - Thunder

    Places:
        - veridian
        - pallet
        - cerulean
*/

//Laercio
const pokemon = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)"

//Divide a string, utilizando a virgula como parametro de separação:
let partes = pokemon.split(",");

//Transformando a primeira letra do picachu teste:
const pikachu = partes[0].charAt(0).toUpperCase() + partes[0].slice(1);
const nivel = partes[1];

//Formatando a palavra eletric:
const electric = partes[2].toUpperCase();


//Joy 
// Remove parênteses vazios da quarta parte do array 'partes':
partes[3] = partes[3].replace("(", "").replace(")", ""); 
// Converte a quarta parte do array 'partes' para letras minúsculas:
partes[3] = partes[3].toLocaleLowerCase();
// Divide a quarta parte do array 'partes' em um novo array 'attacks' usando '-' como delimitador:
let attacks = partes[3].split("-");

//Joyce 
//Thundershock
let thundershock = attacks[0].trim(); // Obtém o primeiro ataque da array 'attacks', remove espaços em branco no início e no final e armazena em 'thundershock'.
thundershock = thundershock.charAt(0).toUpperCase() + thundershock.slice(1); // Converte a primeira letra de 'thundershock' para maiúscula.

//Quick 
let quickAttack = attacks[1].trim(); // Obtém o segundo ataque da array 'attacks', remove espaços em branco no início e no final e armazena em 'quickAttack'.
quickAttack = quickAttack.charAt(0).toUpperCase() + quickAttack.slice(1); // Converte a primeira letra de 'quickAttack' para maiúscula.

//Thunder
let thunder = attacks[2].trim(); // Obtém o terceiro ataque da array 'attacks', remove espaços em branco no início e no final e armazena em 'thunder'.
thunder = thunder.charAt(0).toUpperCase() + thunder.slice(1); // Convrete a primeira letra de 'thunder' para maiúscula.
// Obtém a quinta parte do array 'partes' e a converte para letras minúsculas:
const palavraStatic = partes[4].toLocaleLowerCase();

// Laércio 
let veridian = partes[5].replace("(", "").replace(")", "");
veridian = veridian.toLowerCase();

const cerulean = partes[6].toLowerCase();

let pallet = partes[7].replace("(", "").replace(")", "");
pallet = pallet.toLowerCase();

//Joyce e Laércio
let resultado = `
Name: ${pikachu}
Lv: ${nivel} - Type: ${electric}
Ability: ${palavraStatic}
Attacks:
    - ${thundershock},
    - ${quickAttack}
    - ${thunder}

Places:
    - ${veridian}
    - ${pallet}
    - ${cerulean}
`

console.log(resultado);






