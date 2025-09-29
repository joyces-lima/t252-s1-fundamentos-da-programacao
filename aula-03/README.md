# 📘 aula 03 – Revisão de Conceitos Introdutórios
---

## 📂 conteúdo
- [x] Condicionais – Reconhecer quando usar if/else e quando usar switch.
- [x] Listas (arrays) – como criar, acessar, adicionar e remover itens.
- [x] Objetos – como modelar informações usando chave/valor.
- [x] Funções – como declarar e usar funções, incluindo funções anônimas e arrow functions.
- [x] Escopo – como funciona o escopo de variáveis em diferentes contextos.
- [x] Loops e manipulação de arrays – como iterar sobre listas e usar métodos como for, for...of, forEach, map, filter.
- [x] Integração

---

## 💻 exercícios 

**Descrição:** Limpeza e Resumo de Dados de Pesquisas

Você trabalha como analista de dados em uma empresa de tecnologia.
O time de pesquisa enviou uma planilha com respostas de usuários sobre um novo aplicativo.

Cada registro de resposta tem:
  - id: número identificador da resposta;
  - usuario: nome do usuário que respondeu;
  - notaSatisfacao: número de 1 a 5;
  - duplicado: boolean que indica se a resposta é duplicada.
  - comentario: string com o comentário do usuário.

O sistema precisa:
  - Buscar um usuário pelo nome e exibir sua nota e comentário.
     - ignorar respostas duplicadas (duplicado = true).
  - Exibir um resumo dos dados contendo: 
     - total de respostas válidas (sem duplicados),
     - quantas notas ≥ 4 (usuários satisfeitos)
     - quantas ≤ 2 (usuários insatisfeitos).
---

## Direções
1. Crie uma interface `RespostaPesquisa` com as propriedades mencionadas
2. Crie um array `respostas` com pelo menos 5 respostas, incluindo algumas duplicadas.
3. Crie uma função `buscarUsuario` que receba o array e um nome, e retorne a nota e comentário do usuário ou "Usuário não encontrado". (utilize loop ou métodos de array)
4. Crie uma função auxiliar `removerDuplicados` que receba o array e retorne um novo array sem respostas duplicadas. (utilize loop ou métodos de array)
5. Crie uma funcao auxiliar `contarSatisfeitos` que receba o array sem duplicados e retorne a quantidade de notas ≥ 4. (utilize loop ou métodos de array)
6. Crie uma funcao auxiliar `contarInsatisfeitos` que receba o array sem duplicados e retorne a quantidade de notas ≤ 2. (utilize loop ou métodos de array)
7. Crie uma função principal `processarRespostas` que use as funções auxiliares para exibir o resumo completo.


## 🔗 links e referências
- [ Loops em TypeScript](https://www.typescriptlang.org/docs/handbook/2/loops-and-iteration.html)  
- [Array Methods](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#metodos)  
- [Funções Arrow](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)  
- [Funções Anônimas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions#funcoes_anonimas)  
- [Variáveis e Escopo](https://www.typescriptlang.org/docs/handbook/2/variables.html)  
- [Tipos Primitivos TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#primitives---string-number-boolean-symbol-null-and-undefined)
- [Interface TypeScript](https://www.typescriptlang.org/docs/handbook/interfaces.html)  
- [Tipos Literais](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)  
- [Objetos TypeScript](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Arrays TypeScript](https://www.typescriptlang.org/docs/handbook/2/arrays.html)  
- [Funções TypeScript](https://www.typescriptlang.org/docs/handbook/2/functions.html)  
- [Condicionais TypeScript](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)  
- [Switch Case](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)  
- [Documentação Oficial TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação Oficial JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)
