---
title: Grandes soluções, pequenas funções
path: /blog/grandes-soluções-pequenas-funções
date: "2020-10-20T23:12:03.284Z"
description: "Passei por um desafio interessante recentemente, eu precisava pegar o texto HTML de um editor, realizar uma requisição de um conjunto de palavras, e buscar cada uma delas dentro desse HTML."
tags: ["animals", "Chicago", "zoos"]
# featuredImage: '../../assets/avatar6.png'
---

<br/>

![Photo By Mani Bhargava](https://images.unsplash.com/photo-1599669550575-22795a95e36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 "Architecture image")

Photo by [Pierre-Axel Cotteret](https://unsplash.com/@pierreaxel_?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/t/architecture?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)

Estou lendo o livro Clean Code do Robert C. Martin, popularmente chamado de Uncle Bob, e estou exatamente no capítulo sobre as funções. E uma frase que me deixou inquieto durante a semana de estudos e no trabalho foi essa:

## The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that

---

Exatamente, simples, direto e que me causou um certo impacto na maneira de pensar. E venho tentado aplicar no meu dia-a-dia, seja no trabalho ou estudos pessoais. Você deve estar se perguntando, porque comecei falando sobre minhas leituras?

Porque busquei aplicar alguns dos aprendizados do livro no código que mostrarei a seguir.

### O desafio

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
const html = "<div><span>O clínico
também é um Otorrinolaringologista</span>
</div>";
```

Definido isso, sabemos que vamos precisar apenas do word do objeto e comparar com as palavras do HTML.

#### 2.Tratamento do HTML

Busquei primeiro separar cada palavra do html e colocar em um array. Criei uma função para isso:

```javascript
const splitString = value => {
  value.split(" ");
};
```

O split retorna um array, e seu primeiro parâmetro informa a regra de separação ou split dos elementos. No nosso caso, eu precisava de tudo que possuia um espaço em branco entre eles. Mas temos um problema, existem tags HTML dentro. Que no nosso caso, não é interessante para realizar a comparação de palavras.

Foi quando precisava de ajuda do RegEX para substituir cada tag HTML interna por vazio ou "". Então criei também uma função para fazer isso:

```javascript
const htmlStringReplacer = value => {
  value.replace(/<[^>]+>/g, "")
  };
```

Com isso, pude substituir cada tag HTML por uma string vazia.

#### 3. Pipeline de callbacks

Erick Elliot é um monstro do javascript, ele possui bastante conteúdo sobre Funcional programming e cursos relacionados. Mas comento dele aqui em específico de um vídeo do youtube dele, onde ele comenta sobre a simplicidade do código, o quanto isso é importante.
E um trecho me chamou atenção, como ele utiliza dos reducers para criar soluções simples.

```javascript
  const pipe = (...functions) => value => {
  return functions.reduce((currentValue,
  currentFunction) => {
    return currentFunction(currentValue);
  }, value);
};
```

O método reducer abaixo, nos permite reduzir um output para apenas um valor de retorno.

```javascript
  Array<any>.reduce(callbackfn: (previousValue: any,
  currentValue: any, currentIndex: number,
  array: any[]) => any, initialValue: any): any
```

Nos seus parâmetros, informamos o valor anterior **previousValue** e o valor atual **currentValue**, que neste momento, são informações mais relevantes para nosso cenário.
Na função **pipe** acima, reduzimos o conjunto de funções com o **spread operator** e tratamos cada resultado da função separadamente, o output anterior da função passada é utilizado como parâmetro da função atual. Como se fosse uma pequena escada, onde subimos cada degrau, um passo de cada vez para chegar a um fim.

Com essa informação, podemos partir para o último passado do nosso desafio.

#### 4. Resultado

```javascript
  cont data = pipe(
    htmlStringReplacer,
    splitString)(html);
```

As duas primeiras funções realizam o tratamento do dado **html**, onde a ordem importa, pois cada dado é passado, como passo a passo.
O resultado do dado obtivo vem a seguir:

```javascript
  ["O", "clínico", "também", "é", "um",
  "Otorrinolaringologista"]
```

Que é exatamente que estávamos buscando. Apenas as palavras e sem nenhum vestígio do HTML.

#### 5. Conclusão

O grande ensinamento que retiro do pequeno desafio, é que podemos criar soluções com pequenas funções, e obter ótimos resultados, sem precisar criar elementos complexos, que podem tornar o trabalho confuso. Por hoje é isso, obrigado se leu até aqui.

Gostou do conteúdo? Compartilha com seus amigo(a)s.
