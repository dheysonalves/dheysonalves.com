---
title: "HTML Semântico e porque você deveria se preocupar com isso?"
path: "/blog/html-semantico"
date: "2022-07-04T21:12:03.284Z"
description: "A linguagem de marcação de hypertexto (HTML) possui elementos que determinam um meio de comunicação, seu conjunto de símbolos ou palavras buscam criar um significado para as máquinas entenderem."
tags: ["HTML"]
---

A linguagem de marcação de hypertexto (HTML) possui elementos que determinam um meio de comunicação, seu conjunto de símbolos ou palavras buscam criar um significado para as máquinas entenderem. Possuir uma semântica, permite reforçar as informações contidas em uma página web e garantir uma "boa comunicação" para a máquina.

## O que é semântica ?

No contexto de computação, nada mais que o significado de uma palava, ou no caso, do código. No HTML, nada mais que é atrelado a função de determinada tag frente ao conjunto de tags na página web.

## Porque devo me preocupar ?

No lançamento da versão 5 do HTML, algumas novas tags surgiram com a finalidade de trazer organização sintática e semântica as páginas web. Segue abaixo apenas alguns dos novos elementos:

- ```<article>```
- ```<header>```
- ```<main>```
- ```<footer>```

Em conjunto com as adições, a nova forma de escrita permitiu maior clareza para os computadores e também para os leitores de tela, permitindo uma melhor acessibilidade na web.

Existem algumas vantagens que podem responder a pergunta, segue abaixo:

- Hoje os indexadores do Google (SEO) analisam a semântica como forma de identificar o conteúdo da página. O próprio google criou tutoriais informando como sua página deve ser apresentada. As metatags fazem um papel importante aos indexadores, mas hoje, não apenas as meta descrições são suficientes, mas também a semântica do corpo da página.

- Organização do código, antes das novas tags, eram comum existir uma infinidade de tags ```<div>``` sem significado, dificultando os indexadores e os desenvolvedores a identificar qual a finalidade de determinado bloco. Pensando de forma semântica na escrita, eliminamos os problemas de legibilidade.

- Servem como sinalizadores para leitores de tela e ajudam os deficientes visuais a navegar em uma página.

## Como utilizar da semântica a seu favor ?

Questione-se primeiro, esse elemento ou componente que estou criando, qual sua finalidade ?
Como ele deve interagir com os outros elementos ? Uma lista ordenada dentro de um artigo ? Com algumas dessas perguntas, você aos poucos vai identificando o contexto do seu componente e como montar utilizando as tags do HTML de forma semântica.

Segue abaixo um trecho de código com estrutura semântica:

```html
<header></header>
<section>
 <article>
  <figure>
   <img>
   <figcaption></figcaption>
  </figure>
 </article>
</section>
<footer></footer>
```

## Conclusão

Existem grandes vantagens para sua página web e seu time em utilizar a marcação semântica. Pode te ajudar a ganhar tempo em busca de um determinado bloco de código, ou ajudar a ter seu site no topo dos índices de busca do Google.

## Referências

- [HTML5 Differences from HTML4](https://www.w3.org/TR/html5-diff/#syntax)
- [Semantic HTML](https://en.wikipedia.org/wiki/Semantic_HTML)
- [Semântica em HTML](https://developer.mozilla.org/pt-BR/docs/Glossary/Semantics#sem%C3%A2ntica_em_html)
