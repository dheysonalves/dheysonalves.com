---
title: 'Como definir uma tag script corretamente e carregar os scripts no Laravel Framework?'
path: '/blog/meu-coworker-perguntou2'
date: "2021-01-06T21:40:03.284Z"
description:
tags: ["JAVASCRIPT", "PHP"]
---

<!-- <div style="color: orange; border: 2px solid #363636; display: inline-block; padding: 5px; margin-bottom: 10px; border-radius: 10px; background-color: lightyellow;">
	<label>Meu coworker perguntou</label>
</div> -->

![Capa principal](https://images.unsplash.com/photo-1571076250312-ec217013ba75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

<span>Photo by <a href="https://unsplash.com/@rstone_design?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ryan Stone</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

Meu coworker estava com um problema no carregamento dos scripts em uma aplicação Laravel. Ele estava importando as informações corretamente, dessa forma:

```javascript
<script src="{{ asset('js/somefile.js') }}"></script>
```

No Laravel, conseguimos acessar a pasta Public - onde são armazenados os assets - através dessa sintaxe acima. Aparentemente, tudo está normal, certo?

Errado.

Embora, o valor default do type da tag, seja "application/javascript", ter essas metatags pré-definidas garantimos que a aplicação irá identificar corretamente.

No entanto, não era apenas esse o problema, o problema persistiu, foi quando identificamos que as últimas modificações nos estilos e scripts não estavam sendo compilados.

## Laravel Mix

A ferramenta garante uma API para configuração de um **webpack** para a aplicação, para arquivos de CSS e Javascript puros ou vanilla. O Mix compila os arquivos e **minifica** para um arquivo final na pasta public.

Observado esse ponto, rodamos o comando que o Laravel disponibiliza, o ***npm run watch***, para ficarmos escutando cada modificação nos arquivos de CSS ou JS na pasta public e recompilar para a aplicação.

Feito isso, conseguimos resolver esse problema de carregamento dos scripts e/ou estilos.
