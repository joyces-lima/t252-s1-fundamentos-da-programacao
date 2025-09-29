// Nessa aula, exercitamos o uso de funcoes a partir das perguntas no Kahoot.

// 1) O que acontece ao executar o código abaixo? 
let idade = 20;
if (idade > 18) {
    console.log("Maior de idade");
} else if (idade === 18) {
    console.log("Exatamente 18 anos");
} else {
    console.log("Menor de idade");
}
// a) imprime Maior que 18
// b) imprime Exatamente 18 anos
// c) imprime Menor que 18
// d) dá erro de compilação

// 2) O que acontece ao executar o código abaixo? 

let preco = 80 

if (preco < 100) {
    let desconto = "Produto em promoção!";
    console.log(desconto);
} else {
    let desconto = "Preço normal.";
    console.log(desconto);
}
console.log(desconto);

// a) imprime Produto em promoção! e depois Preço normal.
// b) imprime Produto em promoção! e depois dá erro de compilação.
// c) imprime Preço normal. e depois Produto em promoção!
// d) dá erro de compilação.

// 3) Verdadeiro ou falso: o código abaixo gera erro de compilação.
function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar("2", "3"));

// 4) O que acontece ao executar o código abaixo? 
function verificarNota (nota: number): string {
    if (nota >= 7) {
        let resultado = "Aprovada";
        return resultado;
    } else {
        let resultado = "Reprovada";
        return resultado;
    }
    console.log(resultado);
    }
console.log(verificarNota(8));

// a) imprime Aprovada
// b) imprime Reprovada
// c) dá erro de compilação
// d) não imprime nada

// 5) Verdadeiro ou falso: O código abaixo funciona corretamente e retorna "Notificação importante" quando o tipo for "alerta".
const verificarNotificacao = (tipo: string): string => {
    if (tipo === "alerta") {
        let mensagem = "Notificação importante";
    } else {
        let mensagem = "Notificação comum";
    }
    return mensagem;
}
console.log(verificarNotificacao("alerta"));