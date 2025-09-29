# Funções em TypeScript

## Objetivos
- Entender o conceito de funções e sua importância na programação.
- Aprender a declarar e usar funções em TypeScript.
- Explorar diferentes tipos de funções, incluindo funções anônimas e arrow functions.
- Compreender o escopo de variáveis dentro e fora das funções.

## 📂 conteúdo
- O que são funções?
- Como declarar uma função
- Tipos de funções
  - Funções nomeadas
  - Funções anônimas
  - Arrow functions
- Escopo de variáveis


## O que são funções?
Funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas ajudam
a organizar o código, tornando-o mais legível e fácil de manter.

## Como declarar uma função
Em TypeScript, uma função é declarada usando a palavra-chave `function`, seguida pelo nome
da função, parênteses (que podem conter parâmetros) e chaves que delimitam o corpo da função.

```typescript
function nomeDaFuncao(parametro1: tipo, parametro2: tipo): tipoRetorno {
  // corpo da função
  return valorRetorno;
}
``` 
Exemplo:
```typescript
function somar(a: number, b: number): number {
  return a + b;
}
console.log(somar(2, 3)); // Output: 5
``` 

## Tipos de funções
### Funções nomeadas
São funções que possuem um nome e podem ser chamadas por esse nome.
```typescript
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}
console.log(saudacao("Maria")); // Output: Olá, Maria!
```

### Funções anônimas
São funções sem nome, geralmente atribuídas a variáveis ou passadas como argumentos para outras funções
```typescript
const multiplicar = function(x: number, y: number): number {
  return x * y;
};
console.log(multiplicar(4, 5)); // Output: 20
```

### Arrow functions
São uma sintaxe mais curta para escrever funções anônimas, introduzida no ES6
```typescript
const dividir = (x: number, y: number): number => {
    return x / y;
};
console.log(dividir(10, 2)); // Output: 5
```
Se a função tiver apenas um parâmetro e uma única expressão, pode ser ainda mais simplificada
```typescript
const quadrado = (x: number): number => x * x;
console.log(quadrado(6)); // Output: 36
```

## Escopo de variáveis
O escopo determina a visibilidade e o ciclo de vida das variáveis. Em TypeScript
- Variáveis declaradas dentro de uma função são locais a essa função e não podem ser acessadas de fora.
- Variáveis declaradas fora de qualquer função são globais e podem ser acessadas de qualquer
parte do código.
```typescript
let globalVar = "Eu sou global";

function exemploEscopo() {
  let localVar = "Eu sou local";
  console.log(globalVar); // Acessa variável global
  console.log(localVar);  // Acessa variável local
}

exemploEscopo();
console.log(globalVar); // Acessa variável global
console.log(localVar);  // Erro: localVar não está definida
```

## Refêrencias

- Funções TypeScript: https://www.typescriptlang.org/docs/handbook/2/functions.html
- Arrow Functions: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/
Reference/Functions/Arrow_functions
- Funções Anônimas: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions#funcoes_anonimas
- Escopo de Variáveis: https://www.typescriptlang.org/docs/handbook/2/variables.html