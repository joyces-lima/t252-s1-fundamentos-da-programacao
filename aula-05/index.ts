interface Estudante {
    nome: string,
    curso: string, 
    numeroMatricula: number,
    cursosMatriculados: string[],
    isActive: boolean,
    email: string,
    valorCurso: number
};

let estudantes: Estudante[] = [
    {
        nome: "Ana",
        curso: "Engenharia da Computação",
        numeroMatricula: 101,
        cursosMatriculados: ["Matemática Discreta", "Algoritmos", "Estruturas de Dados"],
        isActive: true,
        email: "ana@gmail.com",
        valorCurso: 1500
    },
    {
        nome: "Maria",
        curso: "Ciência de Dados",
        numeroMatricula: 102,
        cursosMatriculados: ["Estatística", "Machine Learning", "Banco de Dados"],
        isActive: false,
        email: "maria@gmail.com",
        valorCurso: 2000
    },
    {
        nome: "Cecília",
        curso: "Sistemas de Informação",
        numeroMatricula: 103,
        cursosMatriculados: ["Programação Web", "Redes de Computadores"],
        isActive: true,
        email: "cecilia@gmail.com",
        valorCurso: 1800
    }
];

// Usando o for
// Filtrar estudantes que estão ativas.
for (let indice = 0; indice < estudantes.length; indice++) {
    if (estudantes[indice]?.isActive){
        console.log(estudantes[indice]?.nome)
    }
};


// Usando o forEach
// Usado para imprimir valores que contém na lista, sendo direto ou a partir de uma lógica estipulada
// o retorno do forEach é um void, ou sejá ele dá undefined
let filtrarForEachEstudantesAtivas = estudantes.forEach((estudante, index, array) => {
        if(estudante.isActive) {
            console.log(estudante.nome)
        }        
})

// Usando Filter
// Ele vai selecionar elementos que atendam a uma condição
// Retorna uma nova lista com as especificações pedidas, sem alterar a lista original
let filtrarFilterEstudantesAtivas = estudantes.filter((estudante, index, array) => estudante.isActive)
console.log(filtrarFilterEstudantesAtivas)

// Operadores Ternários
// Operadores ternários são atalhos de código para instruções if/else simples, usando a sintaxe condição ? [2]expressão_verdadeira : expressão_falsa. Eles avaliam uma condição e retornam um valor de uma entre duas expressões, sendo úteis para tornar o código mais limpo e conciso ao atribuir valores a variáveis ou expressar lógica condicional. 
// Como funciona
// Condição: A primeira parte do operador é uma expressão que é avaliada como verdadeira ou falsa. 
// Ponto de interrogação (?): Separa a condição das expressões. 
// Expressão verdadeira: A expressão que será executada e retornará um valor se a condição for verdadeira. 
// Dois pontos (:): Separa a expressão verdadeira da expressão falsa. 
// Expressão falsa: A expressão que será executada e retornará um valor se a condição for falsa. 
// EXEMPLO:
let idade = 25;
let status = (idade >= 18) ? "Adulto" : "Menor de idade";
console.log(status); // Imprime "Adulto"

// Usando Map
// Poder mapiar o que vem de uma lista, e transformar os valores mapiados em uma nova lista. 
// Podendo alterar campos e até adicionar novos campos a lista
// Não altera a lista original. 

// Criando um Map para desponibilizar 10% de desconto para todos oa estudantes
let disponibilizarDescontos = estudantes.map((estudante, index, array)=> {
    let valorDesconto: number = estudante.valorCurso * 0.9;
    return {
        nome: estudante.nome,
        curso: estudante.curso,
        valorComDesconto: valorDesconto
    }
}) 
console.log(disponibilizarDescontos)

// Filtro e Map juntos
let filterEMap = estudantes.filter(estudante => estudante.isActive == true && estudante.curso == "Sistemas de Informação ").map ((estudante) => {
    let valorDesconto: number = estudante.valorCurso * 0.9;
    return {
        nome: estudante.nome,
        curso: estudante.curso,
        valorComDesconto: valorDesconto
    }
})
console.log(filterEMap)