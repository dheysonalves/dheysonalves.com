---
title: "GLOBBINS NO SHELL (Caracteres-Curinga)"
path: /blog/globbing-no-shell
date: "2021-02-22T14:30:03.284Z"
description: "Globbing é uma atividade para efetuar correspondências de padrões para nomes de arquivos."
tags: ["SHELL"]
---

Globbing é uma atividade para efetuar correspondências de padrões para nomes de arquivos, bastante utilizado em conjunto com o comando **grep**.

Por exemplo, o comando glob curinga **'*'**, permite efetuar correspondência om qualquer quantidade de caracteres.

```bash
$ ls -l a*.*
-rw-r--r-- 1 ubuntu ubuntu 299 jun 4 00:20 arith1.sh
-rw-r--r-- 1 ubuntu ubuntu 299 jun 4 00:20 arith2.sh
-rw-r--r-- 1 ubuntu ubuntu 299 jun 4 00:20 arith3.sh
```

As outras diretivas para utilização do junto caracteres-curinga, são a seguir:

```bash
# caracteres que começam com at
$ echo at*
# caracteres que terminam com at
$ echo *at
# caracteres que começam e terminam com at
$ echo *at*
# para correspondências exata com um caractere arbitrário
$ echo bl?b # blob ou blab
```
