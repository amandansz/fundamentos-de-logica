
const herois = [
    { nome: "Homem Aranha", vitorias: 56, derrotas: 18 },
    { nome: "Homem de Ferro", vitorias: 34, derrotas: 11 },
    { nome: "Super Homem", vitorias: 132, derrotas: 43 }
];


function saldoRanqueada(nome, vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log(`O herói ${nome} tem o saldo de vitórias de: ${saldoVitorias} e está no nível: ${nivel}`);
}

for (let i = 0; i < herois.length; i++) {
    saldoRanqueada(herois[i].nome, herois[i].vitorias, herois[i].derrotas);
}
