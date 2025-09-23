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
        lida: true
    },

    {
        id: 3,
        titulo: "Nova atualização do sistema",
        tipo: "aviso",
        lida: false
    }
]

// Funções declaradas
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

// Funções anônimas
// Crie uma função anônima atribuída a uma constante chamada marcarComoLida que receba o array de notificações e um id:
// Se encontrar uma notificação com aquele id, altere lida para true e retorne uma mensagem de confirmação.
// Se não encontrar, retorne "ID não encontrado".
// Restrição: faça a comparação apenas com inbox[0], inbox[1] e inbox[2] (sem usar loops ainda).