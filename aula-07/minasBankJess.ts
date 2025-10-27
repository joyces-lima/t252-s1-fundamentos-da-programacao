type Conta = {
    id: number;
    titular: string;
    numeroDaConta: number;
    saldo: number;
};
function criarConta(conta: Conta): Conta {
    console.log(`Olá, ${conta.titular}. Conta criada com sucesso!`)
    return conta
}
function depositar(conta: Conta, valor: number): Conta {
    conta.saldo += valor
    return conta
}


function sacar(conta: Conta, valor: number): Conta {
    if (valor > conta.saldo) {
        console.log("Saldo insuficiente!");
    } else {
        conta.saldo -= valor
        console.log("Saque realizado com sucesso!");
    }
    return conta;
}
function exibirSaldo(conta: Conta): number {
    return conta.saldo
}