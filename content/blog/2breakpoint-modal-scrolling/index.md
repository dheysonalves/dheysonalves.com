---
title: "Breakpoint #2 - Modal Scrolling"
path: "blog/2breapoint-modal-scrolling"
date: "2021-01-05T21:15:03.284Z"
description: "Muitas vezes buscamos soluções para o CSS que requerem a ajuda do Javascript para funcionalidades customizadas. Mas esquecemos, que nos últimos anos, CSS evoluiu bastante e existem várias novas soluções para problems comuns do CSS, sem a ajuda de uma línguagem."
# featuredImage: '../../assets/avatar6.png'
---

# Introdução

![Photo By Mani Bhargava](https://images.unsplash.com/photo-1602491453318-dcdf64966d7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80 "Mani Bhargava Photo")

Photo by [Kar Ming Moo](https://unsplash.com/@vrnex?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)

Muitas vezes buscamos soluções para o CSS que requerem a ajuda do Javascript para funcionalidades customizadas. Mas esquecemos, que nos últimos anos, CSS evoluiu bastante e existem várias novas soluções para problemas comuns do CSS, sem a ajuda de uma línguagem.

Hoje passei por um problema que me deixou nessa situação, pensei em algumas possibilidades usando Javascript, mas foi o CSS que me salvou desse problema.

## Funcionamento do Modal do Bootstrap

O Modal é posicionado sob todo o documento, removendo o Scroll da tag *<body>.*

```html
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
```

## O Contexto do Problema

Eu estava com uma situação comum usando Bootstrap 4, um modal aninhado, ou seja, um modal dentro de outro. O problema real era que quando o modal mais interno era fechado, o estado do Scroll do modal anterior era perdido, ativando novamente o scroll do <*body>* do html. O que não é o comportamento esperado.

## A Solução

A propriedade do CSS *overflow-y* adiciona uma scroll-bar ou adiciona um conteúdo overflow de elemento block, no nosso caso, uma div modal. Existem várias valores para essa propriedade, mas no nosso caso, o valor *auto,* foi o mais de acordo com nosso problema.

"*Deve fazer com que um scroll seja fornecido para conteúdos com valores overflow"*

No bootstrap, o seletor CSS que determina o modal é o *.modal,* logo adicionei nele a propriedade, e nosso problema foi resolvido. Adicionando o scroll referente ao conteúdo do modal de nível mais baixo.

```css
.modal {
	overflow-y: auto;
}
```

## Conclusão

Como comentado anteriormente, apenas uma linha de código, pude resolver esse pequeno problema, e nem todas as vezes, é necessário usar Javascript ou Jquery para tudo.
