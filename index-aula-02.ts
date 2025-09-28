// let aluna: string
// // let aluna2 = false


// interface Notificacao {
//     id: number;
//     titulo: string;
//     tipo: "alerta" | "aviso" | "informacao";
//     lida: boolean
// }


// let preco = 80;
// if (preco < 100) {
//     let desconto = "Produto em promoção!";
//     console.log(desconto);
// } else {
//     let desconto = "Preço normal.";
//     console.log(desconto);
// }
// console.log(desconto);

// funcao declarada
// tem nome
//pode ser chamada em qq lugar do codigo
// boa pra reutilizar em partes principais do codigo
// funcao anonima // nao tem nome proprio, fica armazenada em variaveis so pode ser chamada DEPOIS da linha em que foi criada  util pra funcoes mais "locais"
const soma = function (a: number, b: number): number {
    return a + b;
}

const subtrai = function (a: number, b: number): number {
    return a - b;
}

const multiplicar = function (a: number, b: number): number {
    return a * b;
}

// funcao calculadora que recebe um numero a e um numero b // e o tipo da operacao// tem q retornar o numero calculado 

// function calculadora(a: number, b: number, operacao: string): number {
//     // calculadora deve: somar, subtrair e multiplicar
//     if (operacao === "soma") return soma(a,b)
//     else if (operacao === "subtracao") return subtrai(a, b)
//     else if (operacao === "multiplicacao") return multiplicar(a, b)
//     else return NaN
// }
// let resultado

// function verificarNota (nota: number): string {
//     if (nota >= 7) {
//         let resultado = "Aprovada";
//         return resultado;
//     } else {
//         let resultado = "Reprovada";
//         return resultado;
//     }
//     console.log(resultado);
//     }
// console.log(verificarNota(8));

const verificarNotificacao = (tipo: string): string => {
  if (tipo === "alerta") {
    let mensagem = "Notificação importante";
  } else {
    let mensagem = "Notificação comum";
  }
  return "oi";
};

console.log(verificarNotificacao("alerta"));
