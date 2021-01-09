---
title: "Breakpoint #1 - Front-end Mentors, Arquitetura CSS"
path: "/Blog/1breakpoint"
date: "2020-05-11T21:12:03.284Z"
description: "No primeiro breakpoint, hoje aprendi mais sobre o flexbox. Conheci uma plataforma de desafios. Usei do BEM architecture para escrever meu CSS. "
# featuredImage: '../../assets/avatar6.png'
---

<br />

## FRONT-END MENTORS

Esta semana em uma publicação de algum dev da comunidade. Vi alguem realizando um desafio deste site. Era exatamente que estava procurando, alguns desafios para front-end baseados em sites do mundo real. Melhor ainda, ele me entrega a visualização em desktop e mobile. Iniciei na seção newbie, por querer melhorar minhas habilidades no CSS vanilla.

## SEPARAÇÃO DE ARQUIVOS CSS

Pensei em escrever CSS de uma forma diferente. Eu costumo seguir o padrão de estilos em apenas um arquivo, para mini-projetos vanilla. Neste, dividi os arquivos, em três em específico.

- **global.css**: Para resetar estilos padrões do HTML e determinar background.
- **variables.css**: Para determinar cores e fontes.
- **app.css**: Os estilos da tela inteira.

Funcionou da maneira que esperava, mas o ponto para se observar, e como elas deveriam estar dispostas no **head** do html.

```css
<link rel="stylesheet" href="./styles/variables.css" type="text/css">
<link rel="stylesheet" href="./styles/app.css" type="text/css">
<link rel="stylesheet" href="./styles/global.css" type="text/css">
```

A ordem de prescedência é inteiramente importante para o acesso das variáveis sobre os outros estilos. Embora seja óbvio, é um detalhe facilmente esquecível.

## BEM CSS

BEM é uma metodologia de escrita em CSS. Hoje em dia, muito discutido sobre sua real importância, com a chegada do CSS-IN-JS. Mas acredito, que nesse caso específico, foi uma boa solução de estruturar como escrevo o CSS.

Sendo muito simplório, e pedindo o perdão aqui, como não é o foco desse mini-documento. O BEM, significa (block, element, modifier) ou Bloco, elemento, modificador. Seguindo exatamente, este formato:

```css
.block {}
.block__element {}
.block--modifier {}
```

Onde:

- block: Significa a abstração maior ou container.
- block__element: Significa o elemento descedente do bloco.
- block--modifier: Significa o bloco modificado, um estado.

[Neste CSS, mostra como utilizei](https://github.com/Dheyson/four-card-flexible/blob/master/styles/app.css)

[Repositório do projeto](https://github.com/Dheyson/four-card-flexible)
