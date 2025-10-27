// Descrição:  Vamos começar a modelar e criar funcionalidades para a nova Instituição Bancária Comunitária chamada Minas Bank. O seu objetivo é criar uma interface ou type para representar a primeira entidade da aplicação, no caso, a Conta Bancária. 

// Requisitos Funcionais:
// Criar uma conta bancária com o saldo inicial igual a 0;
//  Permitir depósitos, sacar e  consultas de saldos;
// Saques só podem ser realizados se tiver saldo em conta;

// Orientação técnica:

// Use type (ou interface, mas por ser somente um objeto, é preferível type) chamada Conta para representar os dados da conta.
// id: number,
// titular: string,
// numeroDaConta: number,
// saldo: number,

// Crie funções separadas para cada ação: criar, depositar, sacar, ver saldo.
// As funções devem receber e retornar o objeto da conta.
// Use console.log() para mostrar as mensagens.

type Conta = {
    id: number,
    titular: string,
    numeroDaConta: number,
    saldo: number,
    ativa: boolean,
};

// 1. Criar conta
// Sugestão: A função agora recebe os dados e cria o objeto, garantindo o saldo inicial 0.
function criarConta(id: number, titular: string, numeroDaConta: number): Conta {
    const novaConta: Conta = {
        id,
        titular,
        numeroDaConta,
        saldo: 0,
        ativa: true, // A conta já começa ativa
    };
    console.log(`Conta para ${titular} criada com sucesso!`);
    return novaConta;
}

// 2. Depositar
function depositar(conta: Conta, valor: number): Conta {
    conta.saldo += valor; // variavel seguido de += siginifica incrementação
    console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    return conta;
}

// 3. Sacar
function sacar(conta: Conta, valor: number): Conta {
    if (conta.saldo >= valor) {
        conta.saldo -= valor;  // variavel seguido de -= siginifica decrementação
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
    } else {
        console.log(`Saldo insuficiente. Você tentou sacar R$${valor.toFixed(2)}, mas seu saldo é de R$${conta.saldo.toFixed(2)}.`);
    }
    return conta;
}

// 4. Ver saldo
function verSaldo(conta: Conta): void {
    if (!conta.ativa) {
        console.log("Esta conta está inativa.");
        return;
    }
    console.log(`Olá, ${conta.titular}! Seu saldo atual é: R$ ${conta.saldo.toFixed(2)}`);
}

// 5. Desativar conta
// Sugestão: Função para alterar o status da conta.
function alterarStatusConta(conta: Conta): Conta {
    conta.ativa = !conta.ativa; // Inverte o valor atual (true vira false, false vira true)
    if (conta.ativa) {
        console.log("Conta ativada com sucesso.");
    } else {
        console.log("Conta desativada com sucesso.");
    }
    return conta;
}

// --- Demonstração de uso ---
let minhaConta = criarConta(1, "Joyce Lima", 12345);
verSaldo(minhaConta);
depositar(minhaConta, 100);
verSaldo(minhaConta);
sacar(minhaConta, 30);
verSaldo(minhaConta);
sacar(minhaConta, 80); // Tentativa de saque maior que o saldo
verSaldo(minhaConta);
alterarStatusConta(minhaConta); // Desativando a conta
verSaldo(minhaConta); // Tentando ver o saldo da conta inativa
