// Descrição: Limpeza e Resumo de Dados de Pesquisas

// Você trabalha como analista de dados em uma empresa de tecnologia. O time de pesquisa enviou uma planilha com respostas de usuários sobre um novo aplicativo.

// Cada registro de resposta tem:

    // id: número identificador da resposta;
    // usuario: nome do usuário que respondeu;
    // notaSatisfacao: número de 1 a 5;
    // duplicado: boolean que indica se a resposta é duplicada.
    // comentario: string com o comentário do usuário.
// O sistema precisa:


// ignorar respostas duplicadas (duplicado = true).
// Exibir um resumo dos dados contendo:
// total de respostas válidas (sem duplicados),
// quantas notas ≥ 4 (usuários satisfeitos)
// quantas ≤ 2 (usuários insatisfeitos).

    interface RespostaPesquisa {
        id: number;
        usuario: string;
        notaSatisfacao: number; // Nota de 1 a 5
        duplicado: boolean;
        comentario: string;
    };
    
    const respostas: RespostaPesquisa[] = [
    { id: 1, usuario: "Thais",    notaSatisfacao: 5, duplicado: false, comentario: "Amei o app!" },
    { id: 2, usuario: "Jessica",   notaSatisfacao: 2, duplicado: false, comentario: "Poderia ser mais rápido." },
    { id: 3, usuario: "Thais",    notaSatisfacao: 5, duplicado: true,  comentario: "Registro duplicado." },
    { id: 4, usuario: "Ana bia", notaSatisfacao: 4, duplicado: false, comentario: "Curti a navegação." },
    { id: 5, usuario: "Carol",    notaSatisfacao: 1, duplicado: false, comentario: "Muitos bugs." },
    ];

// Buscar um usuário pelo nome e exibir sua nota e comentário.
// (sem usar o for)
    // function buscarUsuario(respostas:RespostaPesquisa[], nomeBuscado: string): string {
    //     const resposta0 = respostas[0]
    //     const resposta1 = respostas[1]
    //     const resposta2 = respostas[2]
    //     const resposta3 = respostas[3]
    //     const resposta4 = respostas[4]

    //     if(resposta0 && resposta0.usuario === nomeBuscado) {
    //         return `usuario: ${resposta0.usuario} comentario: ${resposta0.comentario}`
    //     }
        

    //     if(resposta1 && resposta1.usuario === nomeBuscado) {
    //         return `usuario: ${resposta1.usuario} comentario: ${resposta1.comentario}`
    //     }
        

    //     if(resposta2 && resposta2.usuario === nomeBuscado) {
    //         return `usuario: ${resposta2.usuario} comentario: ${resposta2.comentario}`
    //     }
        

    //     if(resposta3 && resposta3.usuario === nomeBuscado) {
    //         return `usuario: ${resposta3.usuario} comentario: ${resposta3.comentario}`
    //     }
        

    //     if(resposta4 && resposta4.usuario === nomeBuscado) {
    //         return `usuario: ${resposta4.usuario} comentario: ${resposta4.comentario}`
    //     }
        
    //     return "Usuário não encontrado"
    // }

    //(Usando o for/of)
    function buscarUsuario(respostas: RespostaPesquisa[], nomeBuscado: string): string {
    // Itera sobre cada resposta na lista de respostas
    for (const resposta of respostas) {
        // Verifica se o nome do usuário na resposta atual é o que estamos buscando
        if (resposta.usuario === nomeBuscado) {
            // Se encontrar, retorna a informação e a função termina aqui.
            return `nota ${resposta.notaSatisfacao}, comentário: ${resposta.comentario}`;
        }
    }

    // Se o laço 'for' terminar e a função não tiver retornado nada,
    // significa que o usuário não foi encontrado em nenhuma das respostas.
    // Então, retornamos a mensagem de "não encontrado".
    return "Usuário não encontrado";
}

