// Estrutura do ex
// Crie uma interface Notificacao com as propriedades:

// id: número identificador da notificação;
// titulo: string com o texto da notificação;
// tipo: pode ser apenas "alerta" | "aviso" | "informacao";
// lida: boolean que indica se a notificação já foi lida.

interface Notificacao{
    id: number;
    titulo:string;
    tipo: "alerta" | "aviso" | "informacao";
    lida: boolean
}

// Crie um array chamado inbox com pelo menos 3 notificações diferentes seguindo a interface.

const inbox: Notificacao[] = [
    {
        id: 1,
        titulo: "Seu boleto vence hoje",
        tipo: "alerta",
        lida: false
    },

    {
        id: 2,
        titulo: "Novo comentario na sua publicação",
        tipo: "informacao",
        lida: false
    },

    {
        id: 3,
        titulo: "Nova atualização do sistema",
        tipo: "aviso",
        lida: true
    }
]

// 2.Funções declaradas
// Crie uma função declarada chamada statusLeitura que receba uma notificação e retorne:
// "✅ lida" se lida = true;
// "📨 não lida" se lida = false.

function statusLeitura(notificacao: Notificacao): string {
    if (notificacao.lida === true) {
        return "✅ lida"
    }
    else {
        return "📨 não lida"
    }
}

// 3.Funções anônimas
// Crie uma função anônima atribuída a uma constante chamada marcarComoLida que receba o array de notificações e um id:
// Se encontrar uma notificação com aquele id, altere lida para true e retorne uma mensagem de confirmação.
// Se não encontrar, retorne "ID não encontrado".
// Restrição: faça a comparação apenas com inbox[0], inbox[1] e inbox[2] (sem usar loops ainda).

const marcarComoLida = function (inbox: Notificacao[], id: number): string {
  // Garantir que temos ao menos 3 itens (senão, evita undefined)
    if (!inbox[0] || !inbox[1] || !inbox[2]) return "Lista insuficiente para este exercício";
    if(inbox[0].id === id) {
        inbox[0].lida = true;
        return `Notificação ${id} marcada como lida.`
    }

    if(inbox[1].id === id) {
        inbox[1].lida = true;
        return `Notificação ${id} marcada como lida.`
    }

    if(inbox[2].id === id) {
        inbox[2].lida = true;
        return `Notificação ${id} marcada como lida.`
    }

    return "ID não encontrado";
};

// 4.Funções Arrow Function
// Crie uma arrow function chamada contarPorTipo que receba o array e um tipo ("alerta" | "aviso" | "informacao") e retorne a quantidade de notificações daquele tipo.
// Some manualmente (if inbox[0].tipo === tipo etc.), sem for nem filter.

const contarPorTipo = (inbox: Notificacao[], tipo: "alerta" | "aviso" | "informacao"): number => {
    if (!inbox[0] || !inbox[1] || !inbox[2]) return 0; // verificação de segurança. Antes de começar a contar, ela garante que a lista tem pelo menos 3 itens. Se não tiver, ela para tudo e já retorna 0, evitando um erro no programa.

    let quantidade = 0;
    if (inbox[0].tipo === tipo) quantidade = quantidade + 1;
    if (inbox[1].tipo === tipo) quantidade = quantidade + 1;
    if (inbox[2].tipo === tipo) quantidade = quantidade + 1;
    return quantidade;
};

// 5. Switch case
// Crie uma função chamada comandoAjuda que receba um comando ("listar" | "ler" | "filtrar") e use switch/case para retornar:
// "Mostra a caixa de entrada" quando for "listar";
// "Marca como lida por id" quando for "ler";
// "Filtra por tipo" quando for "filtrar";
// uma mensagem de ajuda no caso default.

function comandoAjuda (comando: "listar" | "ler" | "filtrar" | string): string {
    switch (comando) {
        case "listar":
            return "Mostra a caixa de entrada";
        
        case "ler":
            return "Marca como lida por id";

        case "filtrar":
            return "Filtrar por tipo";

        default:
            return "Comando não reconhecido. Use: 'listar', 'ler' ou 'filtrar'."
    }
}

// 6. Exibição
// Para cada notificação, imprima no console:
// id
// título
// tipo
// status de leitura (usando a função statusLeitura)

console.log("---- LISTAGEM ----");
/// o TS entende que inbox pode ser vazio, por isso o "!" (non-null assertion), ele garante que não é nulo
// O ! depois de [0] e [1] é um recurso do TypeScript. Ele diz ao compilador: "Eu, como programador(a), garanto que este valor não será null ou undefined neste ponto do código".
// como se a gente dissesse pro TS: "confia em mim, eu sei o que estou fazendo esse valor não é nulo"
console.log(inbox[0]!.id, inbox[0]!.titulo, inbox[0]!.tipo, statusLeitura(inbox[0]!));
console.log(inbox[1]!.id, inbox[1]!.titulo, inbox[1]!.tipo, statusLeitura(inbox[1]!));
console.log(inbox[2]!.id, inbox[2]!.titulo, inbox[2]!.tipo, statusLeitura(inbox[2]!));

console.log("---- MARCAR COMO LIDA ----");
console.log(marcarComoLida(inbox, 2));
console.log(marcarComoLida(inbox, 99));

console.log("---- LISTAGEM (após ler id=2) ----");
console.log(inbox[0]!.id, inbox[0]!.titulo, inbox[0]!.tipo, statusLeitura(inbox[0]!));
console.log(inbox[1]!.id, inbox[1]!.titulo, inbox[1]!.tipo, statusLeitura(inbox[1]!));
console.log(inbox[2]!.id, inbox[2]!.titulo, inbox[2]!.tipo, statusLeitura(inbox[2]!));

console.log("---- CONTAR POR TIPO ----");
console.log("alerta     =>", contarPorTipo(inbox, "alerta"));
console.log("aviso      =>", contarPorTipo(inbox, "aviso"));
console.log("informacao =>", contarPorTipo(inbox, "informacao"));

console.log("---- AJUDA ----");
console.log("listar   :", comandoAjuda("listar"));
console.log("ler      :", comandoAjuda("ler"));
console.log("filtrar  :", comandoAjuda("filtrar"));
console.log("default  :", comandoAjuda("desconhecido"));