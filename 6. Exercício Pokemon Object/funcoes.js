const formataNome = caracteristica => {
    return caracteristica.charAt(0).toUpperCase() + caracteristica.slice(1);
}

const formataTipo = pkm => {
    return pkm["types"].map((tipo) => tipo.charAt(0).toUpperCase() + tipo.slice(1));
}

const verificaNull = (caracteristica) => {
    return caracteristica === null ? 'Não possui' : formataNome(caracteristica);
}

const pegaAtributoHp = (atributos) => {
    return atributos.hp;
}

const pegaAtributoAtaque = (atributos) => {
    return atributos.attack;
}
const pegaAtributoAtaqueEspecial = (atributos) => {
    return atributos.specialAttack;
}

const pegaAtributoDefesa = (atributos) => {
    return atributos.defense;
}

const pegaAtributoDefesaEspecial = (atributos) => {
    return atributos.specialDefense;
}

const pegaAtributoVelocidade = (atributos) => {
    return atributos.speed;
}

const pegaMovimentoTackle = (pkm) => {
    return `${pkm.moves[0].lv} - ${formataNome(pkm.moves[0].name)}`;
}

const pegaMovimentoHyperFang = (pkm) => {
    return `${pkm.moves[1].lv} - ${formataNome(pkm.moves[1].name)}`;
}

const pegaMovimentoCrunch = (pkm) => {
    return `${pkm.moves[2].lv} - ${formataNome(pkm.moves[2].name)}`;
}

const pegaMovimentoQuickAttack = (pkm) => {
    return `${pkm.moves[3].lv} - ${formataNome(pkm.moves[3].name)}`;
}

const pegaMovimentoSuckerPunch = (pkm) => {
    return `${pkm.moves[4].lv} - ${formataNome(pkm.moves[4].name)}`;
}

const pegaMovimentoHyperbeam = (pkm) => {
    return `${pkm.moves[5].lv} - ${formataNome(pkm.moves[5].name)}`;
}

const pegaMovimentoTailwip = (pkm) => {
    return `${pkm.moves[6].lv} - ${formataNome(pkm.moves[6].name)}`;
}

const printPokemon = pkm => {
    console.log(`  Nome: ${formataNome(pkm.name)} - Tipo: ${formataTipo(pkm)}
    Habilidade: ${formataNome(pkm.ability)}
  
    Linha de evolução:
      ${verificaNull(pkm.preEvolution)} >> ${formataNome(pkm.name)} >> ${verificaNull(pkm.evolution)}
  
    Atributos:
  
      HP: ${pegaAtributoHp(pkm.attributes)}
      ATK: ${pegaAtributoAtaque(pkm.attributes)} SpATK: ${pegaAtributoAtaqueEspecial(pkm.attributes)}
      DEF: ${pegaAtributoDefesa(pkm.attributes)} SpDEF: ${pegaAtributoDefesaEspecial(pkm.attributes)}
      SPEED: ${pegaAtributoVelocidade(pkm.attributes)}
  
    Ataques:
      Lv ${pegaMovimentoTackle(pkm)}
      Lv ${pegaMovimentoHyperFang(pkm)}
      Lv ${pegaMovimentoCrunch(pkm)}
      Lv ${pegaMovimentoQuickAttack(pkm)}
      Lv ${pegaMovimentoSuckerPunch(pkm)}
      Lv ${pegaMovimentoHyperbeam(pkm)}
      Lv ${pegaMovimentoTailwip(pkm)}`)
}

module.exports = { printPokemon };
