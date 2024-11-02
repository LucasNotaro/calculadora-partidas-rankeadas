function verificarNivel(vitorias) {
    if (vitorias < 10) return "Ferro";
    if (vitorias <= 20) return "Bronze";
    if (vitorias <= 50) return "Prata";
    if (vitorias <= 80) return "Ouro";
    if (vitorias <= 90) return "Diamante";
    if (vitorias <= 100) return "Lendário";
    return "Imortal";
}

function calculadoraRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    const nivel = verificarNivel(saldoVitorias);
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

calculadoraRank(85, 20);
