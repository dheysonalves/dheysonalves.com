---
title: "Como implementar o GitFlow?"
path: /blog/como-implementar-gitflow
date: "2021-01-24T14:15:03.284Z"
description: "O GitFlow é uma ideia abstrata para gerenciamento de branches utilizando Git. Ele auxilia a como deve ser criada as branches, e como mergea-las."
tags: ["GIT"]
---

![Git flow](https://i2.wp.com/lanziani.com/slides/gitflow/images/gitflow_1.png)

# Introdução

O GitFlow é uma ideia abstrata para gerenciamento de branches utilizando Git. Ele auxilia a como deve ser criada as branches, e como mergea-las.
No windows, a instalação base do Git vem com o comando *git flow*, que permite determinar o fluxo no repositório. A única diferença dele para o git init, é que ele cria e delimita nomes para branches específicas.
Em sistemas OSX, ele pode ser instalado via brew, com o comando *brew install git-flow*

## Como funciona

### Main e Develop branches

A combinação entre as duas branches, permite manter um histórico de versões. A main é a branch de produção, e onde é lançada as tags de versões. A develop é uma branch de integração com as features, ela é criada a partir da main, e todas as próximas features são mergeadas nela.

### Feature Branches

Uma branch feature é criada a partir da última develop, e quando é finalizada, é mergeada novamente na develop e deletada. Feature branches nunca interagem diretamente com a main.

### Release Branches

Quando a develop está pronta para ir para homologação, é criada uma release a partir dela. Na branch release criada, é realizada conserto de bugs, documentação, melhorias, qualquer solicitação nos testes realizados pelo QA.
Após finalizada e testada, é mergeada com a main e a develop, criando uma nova tag de versão na main e depois deletada.

### Hotfix Branches

A hotfix branch são para resolver erros ocorridos em produção, ela é criada diretamente a partir da main, assim que resolvido, é mergeado a main e develop (ou release se estiver ativa ainda). Adicionando também uma nova tag de versão a main.

## Resumo geral

O fluxo geral do Gitflow é:

- branch **develop** é criada a partir do **main**
- branch **release** é criada a partir de **develop**
- branches **feature** são criadas a partir da **develop**
- Quando uma **release** é concluída, ela é mesclada com a **develop**
- Quando a **release** é concluída, ela é mesclada com a **develop** e a **main**
- Se um problema na **main** for detectado, uma branch chamada **hotfix** é criada a partir da **main**
- Assim que a **hotfix** for concluída, ela é mesclada com a **develop** e a **main**

## Links

- [Atlassian gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Git flow repo](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)
- [Git flow na pratica](https://www.youtube.com/watch?v=wzxBR4pOTTs&t=82s)
