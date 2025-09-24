// 1. Estrutura do ex
    // Crie três objetos literais para representar estudantes, com as propriedades:
        // nome: string;
        // cursoId: número que referencia o curso que estudante está fazendo;
        // notas: array com 3 números;
        // mensagem: string;

        interface Estudante{
            nome: string;
            cursoId: number;
            notas: [number, number, number];
            mensagem?: string;
        }

        let estudante1: Estudante;
        estudante1 = {
            nome: "Paula",
            cursoId: 1,
            notas: [5,7,8],
            mensagem: 
        }

        let estudante2: Estudante;
        estudante2 = {
            nome: "Ana",
            cursoId: 2,
            notas: [5,3,2],
            mensagem: 
        }

        let estudante3: Estudante;
        estudante3 = {
            nome: "Antonia",
            cursoId: 3,
            notas: [9,9,8],
            mensagem: 
        }

    // Crie uma lista de cursos (array de objetos) contendo três cursos, cada um com:
        // id: número identificador do curso;
        // nome: nome do curso;

        interface Curso{
            id: number;
            nome: string;
        }

        const listaDeCursos: Curso[] = [
            {
                id: 1,
                nome: "TypeScript",
            },

            {
                id: 2,
                nome: "Python",
            },

            {
                id: 3,
                nome: "C++",
            },
        ];


// 2. Funções declaradas
    // Crie uma função declarada chamada mediaEstudante que receba um objeto estudante e retorne a média das notas, somando diretamente os três elementos do array, sem usar loops.

    function mediaEstudante (estudante: Estudante): number {
        const somaDasNotas = (estudante.notas[0] + estudante.notas[1] + estudante.notas[2]);
        return somaDasNotas / 3;
    };

// 3. Funções anônimas
    // Crie uma função anônima e atribua à estiloAprendizado que receba um objeto estudante e retorne uma das seguintes mensagens baseado na média das notas:
        // "Exploradora confiante." se a média ≥ 7
        // "Brilha como aprendiz." se a média ≥ 5 e < 7
        // "Desbravando a programação." se a média < 5    

        const estiloAprendizado = function (estudante: Estudante): string {
        const media = mediaEstudante(estudante);
        if(media >= 7){
            return "Exploradora confiante.";
        } 
        if(media >= 5) {
            return "Brilha como aprendiz.";
        } 
        else {
            return "Desbravando a programação.";
        }
        };

// 4. Funções Arrow Function
    // Adapte a função anterior para arrow function, mantendo a mesma lógica e mensagens.

    const estiloAprendizado = (estudante: Estudante): string => {
        const media = mediaEstudante(estudante);
        if(media >= 7){
            return "Exploradora confiante.";
        } 
        else if(media >= 5) {
            return "Brilha como aprendiz.";
        } else {
            return "Desbravando a programação.";
        }
    };

// 5. Switch case
    // Use switch/case para imprimir o nome de um curso, usando a propriedade cursoId como referência à lista de cursos.

        switch (listaDeCursos) {
            case 1:
                console.log("TypeScript") ;
                break;
        }
        // Ainda tenho dificuldade com o Switch case, não consegui resolver essa parte do desafio. Uma dúvida que me surgiu é se devo criar uma função e depois chamar o Switch? 

// 6. Exibição
    // Para cada estudante, imprima:
        // Nome
        // Nome de um curso
        // Média das notas
        // Mensagem

        console.log ("--- ESTUDANTE 1 ---");
        console.log (estudante1.nome, estudante1.cursoId, mediaEstudante(estudante1),  );


        console.log ("--- ESTUDANTE 2 ---");


        console.log ("--- ESTUDANTE 3 ---");

        // Tambem não consegui fazer essa parte do desafio, fiquei confusa quais partes do codigo devem entrar no console.log e como faço para que cada mensagem seja correspondente com a media do aluno.