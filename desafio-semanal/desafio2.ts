// Desafio semanal - Semana 2

// Descrição:  Vamos elaborar uma lógica para um campeonato de filmes, o objetivo é simular uma competição entre filmes que estão na lista, usando notas atribuídas a cada filme para determinar etapas de eliminação de cada fase. 

// Regras do campeonato
// Sempre compare as notas dos filmes para decidir o vencedor da partida.
// Em caso de empate, utilize a ordem alfabética do título para desempatar.
// O resultado final deve mostrar:
// 🏆 Campeão: título e nota
// 🥈 Vice-campeão: título e nota

type Filme = {
    titulo: string;
    nota: number;
};

const filmes: Filme[] = [
    { titulo: "Mulan", nota: 9 },
    { titulo: "Matilda - O musical", nota: 10 },
    { titulo: "O Rei do Show", nota: 9 },
    { titulo: "Shooting Stars - A Vida de LeBron James", nota: 8 },
    { titulo: "Space Jam: O Jogo do Século", nota: 8 },
    { titulo: "Dreamgirls", nota: 10 },
    { titulo: "Cada Um tem a Gêmea que Merece", nota: 1 },
    { titulo: "O Rei Leão", nota: 9 },
];

// Função auxiliar
function decidirVencedor(filmeA: Filme, filmeB: Filme): Filme {
    if (filmeA.nota > filmeB.nota) {
        return filmeA
    } else if (filmeB.nota > filmeA.nota) {
        return filmeB
    } else {
        // return filmeA.titulo < filmeB.titulo ? filmeA : filmeB;
        // com localeCompare (Feito em aula)
        return filmeA.titulo.localeCompare(filmeB.titulo) < 0 ? filmeA : filmeB;
    }
};

// Primeira Partida
// Os filmes do início da lista competem com os filmes do final.
// Para cada confronto, o filme com a nota mais alta avança para a próxima fase.
// Em caso de empate, o vencedor será definido pela ordem alfabética do título.

const vencedoresPrimeiraFase: Filme[] = [];

for (let i = 0; i < filmes.length / 2; i++) {
    const filme1 = filmes[i];
    const filme2 = filmes[filmes.length - i - 1];

    if (filme1 && filme2) {
        const vencedor = decidirVencedor(filme1, filme2);
        vencedoresPrimeiraFase.push(vencedor);
    }
}

// Escrevendo na função (Feito em aula)
// function primeiraFase(filmes: Filme[]): Filme[] {
//     for (let i = 0; i < filmes.length / 2; i++) {
//         const primeiroFilme = filmes[i];
//         const ultimoFilme = filmes[filmes.length - i - 1];
//         let vencedores: Filme[] = []

//         let comparadorFilmes = decidirVencedor(primeiroFilme, ultimoFilme)
//         vencedores.push(comparardorFilmes)
//     }
//     return vencedores
// }



console.log("Vencedores da Primeira Partida:", vencedoresPrimeiraFase);

// Segunda partida (semifinal):
// Os vencedores da primeira fase competem entre si, em duplas consecutivas da lista.
// A mesma regra de comparação de notas e desempate por ordem alfabética se aplica.

const vencedoresSemifinal: Filme[] = [];
// O loop incrementa `i` de 2 em 2 (i += 2) porque, a cada interação,
// processamos um par de filmes (filme1 e filme2) para o confronto.
// Isso garante que peguemos as duplas corretas (índice 0 vs 1, depois 2 vs 3, etc.).
for (let i = 0; i < vencedoresPrimeiraFase.length; i += 2) {
    const vencedoresSemi1 = vencedoresPrimeiraFase[i];
    const vencedoresSemi2 = vencedoresPrimeiraFase[i + 1];

    if (vencedoresSemi1 && vencedoresSemi2) {
        const vencedor = decidirVencedor(vencedoresSemi1, vencedoresSemi2);
        vencedoresSemifinal.push(vencedor);
    }
}
console.log("Finalistas:", vencedoresSemifinal);

// Última partida (final):
// Os dois finalistas disputam o campeonato.
// O resultado final mostra o campeão e o vice-campeão.
// 🏆 Campeão:  Nota:
// 🥈 Vice:  Nota: 

if (vencedoresSemifinal.length === 2) {
    const campeao = decidirVencedor(vencedoresSemifinal[0]!, vencedoresSemifinal[1]!);
    const viceCampeao = campeao === vencedoresSemifinal[0] ? vencedoresSemifinal[1] : vencedoresSemifinal[0]; // O campeão é o primeiro filme da lista de finalistas? Se sim (?), o vice é o segundo. Se não (:), o vice é o primeiro.

    console.log(`🏆 Campeão: ${campeao.titulo} (Nota: ${campeao.nota})`);
    console.log(`🥈 Vice-campeão: ${viceCampeao!.titulo} (Nota: ${viceCampeao!.nota})`);
}




