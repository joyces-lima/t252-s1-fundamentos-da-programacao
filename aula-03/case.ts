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

    function buscarUsuario(respostas: RespostaPesquisa[], nome: string): string {
    const r = respostas.find((resp) => resp.usuario === nome);
    return r ? `Nota: ${r.notaSatisfacao} | Comentário: ${r.comentario}` : "Usuário não encontrado";
};

    function removerDuplicados(respostas: RespostaPesquisa[]): RespostaPesquisa[] {
    return respostas.filter((r) => !r.duplicado);
    }

    function contarSatisfeitos(respostas: RespostaPesquisa[]): number {
    const satisfeitos = respostas.filter(resp => resp.notaSatisfacao >= 4);
    return satisfeitos.length;
}

    function contarInsatisfeitos(respostas: RespostaPesquisa[]): number {
    const satisfeitos = respostas.filter(resp => resp.notaSatisfacao <= 2);
    return satisfeitos.length;
}

    function processarRespostas(respostas: RespostaPesquisa[]): void {
    const validas = removerDuplicados(respostas);}

    const respostasNaoDuplicadas = removerDuplicados(respostas);
    const totalSatisfeitos = contarSatisfeitos(respostasNaoDuplicadas);
    console.log("--- Array sem Duplicatas ---");
    console.log(respostasNaoDuplicadas);
    console.log("\nTotal de respostas não duplicadas:", respostasNaoDuplicadas.length); 
    console.log("Usuários satisfeitos (Nota >= 4):", totalSatisfeitos);

    function processarRespostas2(arr: RespostaPesquisa[]): string { console.log('--- Resumo da Pesquisa ---')}