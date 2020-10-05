---
title: Grandes funções, pequenas funções
path: /blog/notitleyet
date:
description: "Passei por um desafio interessante recentemente, eu precisava pegar o texto HTML de um editor, realizar uma requisição de um conjunto de palavras, e buscar cada uma delas dentro desse HTML."
---

![](https://images.unsplash.com/photo-1599669550575-22795a95e36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)
<span>Photo by <a href="https://unsplash.com/@pierreaxel_?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Pierre-Axel Cotteret</a> on <a href="https://unsplash.com/t/architecture?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

Estou lendo o livro Clean Code do Robert C. Martin, popularmente chamado de Uncle Bob, e estou exatamente no capítulo sobre as funções. E uma frase que me deixou inquieto durante a semana de estudos e no trabalho foi essa:

> The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that

Exatamente, simples, direto e que me causou um certo impacto na maneira de pensar. E venho tentado aplicar no meu dia-a-dia, seja no trabalho ou estudos pessoais. Você deve estar se perguntando, porque comecei falando sobre minhas leituras?

Porque busquei aplicar alguns dos aprendizados do livro no código que mostrarei a seguir.

#### O desafio

Passei por um desafio interessante recentemente, eu precisava pegar o texto HTML de um editor, realizar uma requisição de um conjunto de palavras, e buscar cada uma delas dentro desse HTML. Essas palavras, eram de um dicionário, previamente cadastrado, em um cenário específico da regra de negócio. Provavelmente, você já deve ter percebido a divisão em um tipo de pseudocódigo na sentença acima. Então, vamos ao "Show me the code!".

Aparentemente, nada muito complicado - o que de fato, não é. Então vamos lá, vou passar por cada etapa do meu processo.

#### 1.Dados

A estrutura de dados das palavras, e do HTML eram simples. Eu tinha uma estrutura de dados parecida com essa para as palavras:

```javascript
const dictionaryWords = [
  {
    word: "Otorrinolaringologista",
    title: "Um tipo de médico."
  },
  {
    word: "Clínico",
    title: "Um típo de médico"
  }
];
```

Temos também, o próprio HTML, vindo do editor de texto.

```javascript
const html = "<div><span>O clínico também é um Otorrinolaringologista</span></div>";
```

Definido isso, sabemos que vamos precisar apenas do word do objeto e comparar com as palavras do HTML.

#### 2.Tratamento do HTML

Busquei primeiro separar cada palavra do html e colocar em um array. Criei uma função para isso:

```javascript
const splitString = value => value.split(" ");
```

O split retorna um array, e seu primeiro parâmetro informa a regra de separação ou split dos elementos. No nosso caso, eu precisava de tudo que possuia um espaço em branco entre eles. Mas temos um problema, existem tags HTML dentro. Que no nosso caso, não é interessante para realizar a comparação de palavras.

Foi quando precisava de ajuda do RegEX para substituir cada tag HTML interna por vazio ou "". Então criei também uma função para fazer isso:

```javascript
const htmlStringReplacer = value => value.replace(/<[^>]+>/g, "");
```

Com isso, pude substituir cada tag HTML pelo vazio.

#### 3. Pipeline de callbacks

Erick Elliot é um monstro do javascript, ele possui bastante conteúdo sobre Funcional programming e cursos relacionados. Mas comento dele aqui em específico de um vídeo do youtube dele, onde ele comenta sobre a simplicidade do código, o quanto isso é importante.
E um trecho me chamou atenção, como ele utiliza os reducers.
