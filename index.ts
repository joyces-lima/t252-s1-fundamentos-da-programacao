// pra rodar usar npx ts-node nome-do-arquivo.ts
// let aleatoria: string = "blablaba"
// console.log(aleatoria)

// interface Produto {
//     nome: string,
//     preco: number,
//     descricao?: string
// }

// const objetoProduto1: Produto = {
//     nome: "tv",
//     preco: 3000
// }

// const objetoProduto2: Produto = {
//     nome: "tv",
//     preco: 3000,
//     descricao: "esse produto eh top",
// }


// console.log(objetoProduto1)
// console.log(objetoProduto2)

// const palavra: string = 24
// console.log(palavra.toUpperCase())

// const listaDeNumeros: (string | number)[] = [1, 2, "do nada um texto", 13]
// console.log(listaDeNumeros)

// Crie uma interface Notificacao com as propriedades:

// id: número identificador da notificação;
// titulo: string com o texto da notificação;
// tipo: pode ser apenas "alerta" | "aviso" | "informacao";
// lida: boolean que indica se a notificação já foi lida.

interface Notificacao {
    id: number;
    titulo: string;
    tipo: "alerta" | "aviso" | "informacao";
    lida: boolean
}
// Crie um array chamado inbox com pelo menos 3 notificações 
// diferentes seguindo a interface.
const inbox: Notificacao[] = [
    {
        id: 1,
        titulo: "seu boleto vence hj",
        tipo: "alerta",
        lida: false
    },
    {
        id: 2,
        titulo: "novo comentario na sua foto",
        tipo: "informacao",
        lida: false
    },
        {
        id: 3,
        titulo: "seu cell precisa atualizar",
        tipo: "aviso",
        lida: true
    },
]

// Crie uma função declarada chamada statusLeitura que 
// receba uma notificação e retorne:
// "✅ lida" se lida = true;
// "📨 não lida" se lida = false.

//
function statusLeitura(notificacao: Notificacao): string {
    if (notificacao.lida === true) return "foi lida"
    return "nao lida"
}

// mesma funcao com if/else
function statusLeitura2(notificacao: Notificacao): string {
  if (notificacao.lida === true) {
    return "foi lida";
  } else {
    return "nao lida";
  }
}

// usando operador ternario
function statusLeitura3(notificacao: Notificacao): string {
    // se le: condicao ? valorSeVerdadeiro : valorSeFalso
  return notificacao.lida === true ? "foi lida" : "nao lida";
}

// 3) Função anônima: marcarComoLida (sem loop; acessos manuais 0..2)
const marcarComoLida = function (lista: Notificacao[], id: number): string {
  // Garantir que temos ao menos 3 itens (senão, evita undefined)
  if (!lista[0] || !lista[1] || !lista[2]) return "Lista insuficiente para este exercício";

  if (lista[0].id === id) { lista[0].lida = true; return `Notificação ${id} marcada como lida.`; }
  if (lista[1].id === id) { lista[1].lida = true; return `Notificação ${id} marcada como lida.`; }
  if (lista[2].id === id) { lista[2].lida = true; return `Notificação ${id} marcada como lida.`; }

    // com for
    // for (let i = 0; i < lista.length; i++) {
    // a linha acima se le como: para cada i começando em 0, enquanto i for menor que o tamanho da lista, incrementa i em 1
    // a gnt quer percorrer a lista inteira, por isso o i < lista.length
    // executou o codigo dentro do for, depois volta pro i, incrementa em 1 e repete o processo
    //     if (lista[i].id === id) {
    //         lista[i].lida = true
    //         return `Notificação ${id} marcada como lida.`
    //     }
    // }
  return "ID não encontrado";
};

// 4) Arrow function: contarPorTipo (sem loop; acessos manuais 0..2)
const contarPorTipo = (lista: Notificacao[], tipo: "alerta" | "aviso" | "informacao"): number => {
  if (!lista[0] || !lista[1] || !lista[2]) return 0;

  let qtd = 0;
  if (lista[0].tipo === tipo) qtd = qtd + 1;
  if (lista[1].tipo === tipo) qtd = qtd + 1;
  if (lista[2].tipo === tipo) qtd = qtd + 1;
  return qtd;
};

// 5) Switch case: comandoAjuda
function comandoAjuda(comando: "listar" | "ler" | "filtrar" | string): string {
  switch (comando) {
    case "listar":   return "Mostra a caixa de entrada";
    case "ler":      return "Marca como lida por id";
    case "filtrar":  return "Filtra por tipo";
    default:         return "Comandos: listar | ler | filtrar";
  }
}

// EXIBIÇÃO (exemplo de exibicao dos resultados no terminal)
// -----------------------------------------------------------
console.log("---- LISTAGEM ----");
/// o TS entende que inbox pode ser vazio, por isso o "!" (non-null assertion), ele garante que não é nulo
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
