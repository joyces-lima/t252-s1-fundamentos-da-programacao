type ItemEstoque = {
    produto: string;
    quantidade: number;
    minimo: number;
};

let estoque: ItemEstoque[] = [
    { produto: "Arroz", quantidade: 50, minimo: 20 },
    { produto: "Feijão", quantidade: 15, minimo: 20 },
    { produto: "Macarrão", quantidade: 5, minimo: 10 },
    { produto: "Açúcar", quantidade: 30, minimo: 15 }
];

// Filtro

let quantidadeMaiorQue20: ItemEstoque[] = []

for (let i = 0; i < estoque.length; i++) {
    const itens = estoque[i]; // colchete sem ponto tras todas as informaçoes do array
    if (itens.quantidade > 20) {
        quantidadeMaiorQue20.push(itens)
    }
};

console.log(quantidadeMaiorQue20);