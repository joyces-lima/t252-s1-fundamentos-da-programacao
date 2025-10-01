// Você trabalha como analista de dados em uma empresa de tecnologia.
// O time de pesquisa enviou uma planilha com respostas de usuários 
// sobre um novo aplicativo.

// Cada registro de resposta tem:
// id: número identificador da resposta;
// usuario: nome do usuário que respondeu;
// notaSatisfacao: número de 1 a 5;
// duplicado: boolean indica se a resposta é duplicada.
// comentario: string com o comentário do usuário.

// O sistema precisa:
//  Buscar um usuário pelo nome e exibir sua nota e comentário.

// Crie uma função `buscarUsuario` que receba o array e um nome, 
// e retorne a nota e comentário do usuário ou "Usuário não encontrado".

interface RespostaPesquisa {
    id: number;
    usuario: string;
    notaSatisfacao: number; // 1 a 5
    duplicado: boolean;
    comentario: string;
}

const respostas: RespostaPesquisa[] = [
    { id: 1, usuario: "Thais", notaSatisfacao: 5, duplicado: false, comentario: "Amei o app!" },
    { id: 2, usuario: "Jessica", notaSatisfacao: 2, duplicado: false, comentario: "Poderia ser mais rápido." },
    { id: 3, usuario: "Thais", notaSatisfacao: 5, duplicado: true, comentario: "Registro duplicado." },
    { id: 4, usuario: "Ana bia", notaSatisfacao: 4, duplicado: false, comentario: "Curti a navegação." },
    { id: 5, usuario: "Carol", notaSatisfacao: 1, duplicado: false, comentario: "Muitos bugs." },
    { id: 6, usuario: "Carol", notaSatisfacao: 1, duplicado: true, comentario: "Muitos bugs." },
];
// O QUE NAO FAZER:
//   function buscarUsuario(respostas: RespostaPesquisa[], nomeBuscado: string ): string {
//   const resposta0 = respostas[0];
//   const resposta1 = respostas[1];
//   const resposta2 = respostas[2];
//   const resposta3 = respostas[3];
//   const resposta4 = respostas[4];

//   if (resposta0 && !resposta0.duplicado && resposta0.usuario === nomeBuscado) {
//     return `Usuário: ${resposta0.usuario} | Nota: ${resposta0.notaSatisfacao} | "${resposta0.comentario}"`;
//   }
//   if (resposta1 && !resposta1.duplicado && resposta1.usuario === nomeBuscado) {
//     return `Usuário: ${resposta1.usuario} | Nota: ${resposta1.notaSatisfacao} | "${resposta1.comentario}"`;
//   }
//   if (resposta2 && !resposta2.duplicado && resposta2.usuario === nomeBuscado) {
//     return `Usuário: ${resposta2.usuario} | Nota: ${resposta2.notaSatisfacao} | "${resposta2.comentario}"`;
//   }
//   if (resposta3 && !resposta3.duplicado && resposta3.usuario === nomeBuscado) {
//     return `Usuário: ${resposta3.usuario} | Nota: ${resposta3.notaSatisfacao} | "${resposta3.comentario}"`;
//   }
//   if (resposta4 && !resposta4.duplicado && resposta4.usuario === nomeBuscado) {
//     return `Usuário: ${resposta4.usuario} | Nota: ${resposta4.notaSatisfacao} | "${resposta4.comentario}"`;
//   }

//   return "Usuário não encontrado";
// }

function buscarUsuario(respostas: RespostaPesquisa[], nomeBuscado: string): string {
    for (let resposta of respostas) {
        if (resposta.usuario === nomeBuscado) {
            return `nome: ${resposta.usuario}, nota ${resposta.notaSatisfacao}, comentário: ${resposta.comentario}`;
        }
    }
    return "Usuário não encontrado";
}

console.log(buscarUsuario(respostas, "Ana bia"));

// 4. Crie uma função `removerDuplicados` que receba o array e retorne um novo array sem respostas duplicadas.
const removerDuplicados = (respostas: RespostaPesquisa[]): RespostaPesquisa[] => {
    const respostasUnicas: RespostaPesquisa[] = [];
    for (let resposta of respostas) {
        if (!resposta.duplicado) {
            respostasUnicas.push(resposta);
        }
    }
    return respostasUnicas;
}


// 5. Crie uma funcao auxiliar `contarSatisfeitos` que receba o array sem duplicados e retorne a quantidade de notas ≥ 4.
const contarSatisfeitos = (respostas: RespostaPesquisa[]): number => {
    let count = 0;
    for (let resposta of respostas) {
        if (resposta.notaSatisfacao >= 4) {
            count++;
        }
    }
    return count;
}

// 6. Crie uma funcao auxiliar `contarInsatisfeitos` que receba o array sem duplicados e retorne a quantidade de notas ≤ 2.
const contarInsatisfeitos = (respostas: RespostaPesquisa[]): number => {
    let count = 0;
    for (let resposta of respostas) {
        if (resposta.notaSatisfacao <= 2) {
            count++;
        }
    }
    return count;
}
// 7. Crie uma função principal `processarRespostas` que use as funções auxiliares para exibir o resumo completo.
function processarRespostas(respostas: RespostaPesquisa[]): void {
    const respostasUnicas = removerDuplicados(respostas);
    const totalRespostas = respostasUnicas.length;
    const totalSatisfeitos = contarSatisfeitos(respostasUnicas);
    const totalInsatisfeitos = contarInsatisfeitos(respostasUnicas);

    console.log(`Total de respostas válidas: ${totalRespostas}`);
    console.log(`Total de usuários satisfeitos (nota ≥ 4): ${totalSatisfeitos}`);
    console.log(`Total de usuários insatisfeitos (nota ≤ 2): ${totalInsatisfeitos}`);
}

processarRespostas(respostas);