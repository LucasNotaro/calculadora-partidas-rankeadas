let vitorias = 89;
let derrotas = 21;

function verificarNivel(Saldovitorias) {
    if (Saldovitorias < 10) return "Ferro";
    if (Saldovitorias <= 20) return "Bronze";
    if (Saldovitorias <= 50) return "Prata";
    if (Saldovitorias <= 80) return "Ouro";
    if (Saldovitorias <= 90) return "Diamante";
    if (Saldovitorias <= 100) return "Lendário";
    return "Imortal";
}

function calculadoraRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    const nivel = verificarNivel(saldoVitorias);
    return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

const resultado = calculadoraRank(vitorias, derrotas);

console.log(resultado);