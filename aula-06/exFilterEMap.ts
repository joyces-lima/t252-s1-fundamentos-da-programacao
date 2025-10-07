// 1) Atualizar status de livros com base em empréstimo
// Cenário:
// Uma biblioteca precisa atualizar seu sistema:

// Apenas livros com mais de 5 dias emprestados devem ser marcados como “atrasados”.

// Exiba o título, o nome do leitor e o novo status.


interface Emprestimo {
    titulo: string,
    leitor: string,
    diasEmprestado: number,
    status: string,
};

const emprestimos: Emprestimo[] = [
    { titulo: "Livro x", leitor: "Ana", diasEmprestado: 3, status: "em dia" },
    { titulo: "Livro y", leitor: "Maria", diasEmprestado: 7, status: "em dia" },
    { titulo: "Livro p", leitor: "Carla", diasEmprestado: 10, status: "em dia" },
];

let livrosAtrasados = emprestimos
    .filter(emprestimo => emprestimo.diasEmprestado > 5)
    .map((emprestimo) => {
        return {
            titulo: emprestimo.titulo,
            leitor: emprestimo.leitor,
            status: "atrasado"
        }
    });

console.log(livrosAtrasados)


// 2) Corrigindo estoque e calculando produtos promocionais
// Cenário:
// Uma loja online quer:
// 1️⃣ Filtrar apenas os produtos disponíveis em estoque.
// 2️⃣ Aplicar desconto de 10 % em produtos acima de R$ 100.
// 3️⃣ Retornar uma nova lista com os produtos ajustados.

type Produto = {
    nome: string;
    preco: number;
    emEstoque: boolean;
};

const produtos: Produto[] = [
    { nome: "Fone Bluetooth", preco: 150, emEstoque: true },
    { nome: "Cabo USB", preco: 25, emEstoque: false },
    { nome: "Teclado Mecânico", preco: 200, emEstoque: true },
];

let produtosDisponiveis = produtos.filter((produto) => produto.emEstoque)
    .map((produto) => {
        let desconto: number = produto.preco > 100 ? produto.preco * 0.9 : produto.preco;
        return {
            nome: produto.nome,
            preço: desconto
        }
    })
console.log(produtosDisponiveis)


// 3) O banco quer oferecer aumento de limite apenas para clientes que:

// - têm saldo acima de R$ 2.000

// - e não estão com empréstimo ativo

// Tarefa:
// 1️⃣ Filtrar os clientes que atendem aos critérios.
// 2️⃣ Calcular um novo limite com 20 % de aumento.
// 3️⃣ Exibir nome, saldo atual e novo limite.


type Cliente = {
    nome: string;
    saldo: number;
    limiteCredito: number;
    emprestimoAtivo: boolean;
};

const clientes: Cliente[] = [
    { nome: "Ana", saldo: 2500, limiteCredito: 3000, emprestimoAtivo: false },
    { nome: "Marcos", saldo: 1200, limiteCredito: 2000, emprestimoAtivo: true },
    { nome: "Lívia", saldo: 4000, limiteCredito: 5000, emprestimoAtivo: false },
];

let filterAumentarLimite = clientes.filter(cliente => cliente.saldo > 2000 && cliente.emprestimoAtivo == false)
    .map((cliente) => {
        let novoLimite: number = cliente.limiteCredito * 1.2;
        return {
            nome: cliente.nome,
            saldo: cliente.saldo,
            limiteCredito: novoLimite
        }
    })
    console.log (filterAumentarLimite)



// 4) Atualizando saldo após depósitos
// Desafio: você tem uma lista de contas, e precisa atualizar o saldo de cada cliente somando o último depósito.

type Conta = {
    nome: string;
    saldo: number;
    ultimoDeposito: number;
};

const contas: Conta[] = [
    { nome: "Lucas", saldo: 1200, ultimoDeposito: 300 },
    { nome: "Ana", saldo: 850, ultimoDeposito: 150 },
    { nome: "Rita", saldo: 2500, ultimoDeposito: 500 }
];

let atualizacaoSaldo = contas.map((conta) => {
    let novoSaldo = conta.saldo + conta.ultimoDeposito;
    return {
        nome: conta.nome,
        saldo: novoSaldo
    }
})

console.log(atualizacaoSaldo)