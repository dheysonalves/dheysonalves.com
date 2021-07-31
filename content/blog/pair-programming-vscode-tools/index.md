---
title: 'Pair Programming e extenções para auxiliar na produtividade'
path: '/blog/pair-programming-vscode-tools'
date: "2021-07-31T21:40:03.284Z"
description: 'Pair programming é uma técnica de desenvolvimento, em que dois desenvolvedores(as) escrevem código juntos de forma colaborativa, e que envolve bastante comunicação. A prática pode auxiliar ambos em diversas maneiras, seja em boas discussões de boas práticas a implementação do código, code review entre os pares, na construção de boas soluções e também no compartilhamento de conhecimento.'
tags: ["GERAL"]
---

# Introdução

Sabemos que existem momentos que alguma atividade pode ser um pouco complexa, ou mesmo simples, mas necessita de um segundo ponto de vista na implementação, ou na construção do raciocínio. Pair programming é uma técnica de desenvolvimento, em que dois desenvolvedores(as) escrevem código juntos de forma colaborativa, e que envolve bastante comunicação. A prática pode auxiliar ambos em diversas maneiras, seja em boas discussões de boas práticas a implementação do código, code review entre os pares, na construção de boas soluções e também no compartilhamento de conhecimento.

Vamos comentar um pouco sobre a técnica, seus estilos, alguns de seus benefícios e também 5 ferramentas que podem auxiliar no trabalho colaborativo que envolve a prática da técnica.

# Pair Programming: Do que se trata?

Como comentado anteriormente, basicamente duas pessoas programando no mesmo dispositivo, mas surge a dúvida, como funciona? Dividimos a prática em duas funções, o Driver e o Navigator.

### **Driver**

Ele(a) busca trabalhar nos detalhes da implementação do código atual.

* Ignora elementos externos ou problemas maiores, focando apenas em pequenas partes;
* Durante sua codificação, ele fala como se estivesse explicando sua lógica.

### **Navigator**

Pensa mais estrategicamente nos próximos passos e melhorias.

* Fica na posição de observador;
* Revisa o código, compartilha ideias e dar direções;
* Analisa exceções, e possíveis bugs;
* Realiza anotações em sticky notes, para depois passar para o driver, sem interrupções.

Embora temos esses perfis bem definidos no início da sessão, ambos os desenvolvedores(as) ficam revisando nas atividades a cada conclusão de uma atividade. Para permitir que ambos possam trabalhar no código de maneira passiva e ativa.

Segue abaixo um fluxo de como inicia uma sessão de pair programming:

* Começa com a escolha de uma task bem definida e refinada;
* Separação de cargos na sessão;
* Um passo e objetivo de cada vez, podendo ser gerenciado pelo mesagem do code commit, teste unitário e/ou anotação de um sticky;
* Troca de cargos regularmente, a cada finalização de uma parte da task - definida pelos pares -, ou podendo ser a cada 25 minutos, como na técnica Pomodoro;
* O navigator não é apenas tático, mas traz também traz os próximos passos da implementação.

# Alguns Estilos de Pair Programming

## Estilo Ping Pong

Esse estilo é bem próximo do TDD (Test Driven Development), e que pode ser utilizando quando existe uma task definida que pode ser utilizada no modelo.

1. **PING**: DEV A escreve um teste que falha;
2. **PONG**: DEV B escreve a implementação que faz passar;
3. **PING**: DEV B começa a escrever o teste que falha;
4. Cada **PONG** sempre Refatorar - quando possível -, após chegar no verde;

## Estilo Pair-Development

O estilo possui alguns outras tarefas, fazendo esse estilo ser mais um mindset para sua implementação. Segundo sua criadora, Sarah Mei, o desenvolvimento de uma User Story ou uma feature, geralmente não é apenas sobre código, mas outros passos também.

### **Planing**

#### **Entendendo o problema**

* Ler a estória um para o outro como foi o entendimento;
* Se tiver ferramentas que necessita, busca por isso;

#### **Apareça com uma solução**

* Discutir com o par ou tentar chegar em alguma solução sozinho;

#### **Planejar a implementação**

* Como será testado?
* Anotações ou sticky notes;

# Os benefícios do Pair Programming

Existem alguns benefícios ao realizar pair-programming, que podem variar, dependendo da forma implementada. Vou listar alguns abaixo:

## **Compartilhar Conhecimento**

Quando duas mentes trabalham em um mesmo problema, pode existir diferentes perspectivas e alternativas para encontrar a solução.

## **Reflexão**

Explicar conceitos em voz alta, permite mostrar se realmente entendemos de determinado assunto.

## **Fluxo de trabalho otimizado**

Com ambos bem integrados na solução de determinado problema, pode surgir melhorias no codebase, pois o code-review também está sendo imediato. E o debate sobre a implementação é constante.

# Ferramentas para trabalho colaborativo

Em minha jornada, por meio de IDE e editores de texto, nenhum deles mudou minha concepção do que um ambiente completo e integrado pode ser. Seja pela imensidão de extensões disponibilizadas pela comunidade e pela Microsoft, ou pelo seu design compacto e robusto. Apresento abaixo 5 extensões que podem auxiliar você ou sua equipe no dia a dia dentro da IDE quando realizado pair-programming ou code-review.

### [Live share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)

A ferramenta busca trazer um ambiente colaborativo em tempo real para editar ou debugar código no Visual Code. Trabalhar com um colega de classe ou de trabalho remotamente, seja em pair-programming, revisão de código ou para resolver um problema específico da empresa não é mais um problema. Você se engana se acredita que seja apenas isso, não é um simples editor remoto. Você consegue também, conversar via chat, compartilhar seu servidor e terminal local! Isso mesmo, além disso, você pode até convidar mais de uma pessoa para trabalhar coletivamente.

A extensão vem com um pacote: Live Share, Live Share Audio, Live Share Chat e o Peacock . Que em conjunto traz essa ferramenta incrível para trabalho remoto.

### [Live share whiteboard](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)

Você já não entendeu algum conceito ou explicação, e seu professor ou mentor precisou sair do Visual Code para desenhar em outra ferramenta? A proposta da extensão é justamente essa, ter um ‘Quadro-Branco’ colaborativo dentro do Visual Code, exatamente. Você pode agora, desenhar modelagens de banco de dados relacionais, arquitetura de software, ou mesmo realizar uma apresentação para equipe.

### [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

Você como desenvolvedor, já deve ter passado por algum cenário que poderia ser melhorado no futuro, ou mesmo durante a implementação da feature, deixar comentários para lembrar o que ser feito quando voltar novamente ao código. O Todo Tree vem justamente para esse propósito, você consegue colocar tags TODO e FIXME no início de um comentário, e os adiciona dentro de um painel próprio para visualização futura. Criando uma lista de tasks que auxilia você a encontrar em qual parte do código você adicionou as tags.

### [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

Eu sabia que estava passando tempo de mais no terminal para realizar os comandos para adicionar, ‘commitar’ e realizar o push. Foi quando percebi que precisava de uma ferramenta para automatizar esse processo, e no percurso saber mais informações do histórico dos meus commits. O GitLens me acolheu e me deu o poder do Git Supercharged, grandes insights das alterações do código, um histórico de arquivo e linha, além de várias outras ferramentas. Com certeza, se você precisa avançar na utilização do git e precisa de mais dados sobre o progresso do seu codebase, essa é uma ferramenta essencial.

### [Live Share Pomodoro](https://marketplace.visualstudio.com/items?itemName=lostintangent.vsls-pomodoro)

A técnica Pomodoro tem sido uma ótima ferramenta no auxílio do foco. A sua estrutura simples de ter sessões de 25 minutos, com os short-breaks e long-breaks pode auxiliar bastante nas suas sessões de pair-programming. O Live share pomodoro, integra bem com o liveshare auxiliando nas sessões.

### [Github Copilot](https://copilot.github.com/)

Github Copilot é uma ferramenta de inteligência articifial que funciona como um auxiliar na escrita do código. Ele é suportado pela OpenAI, com seu novo sistema de IA chamado Codex. Onde a ferramenta foi treinada por códigos disponíveis publicamente e com processamento de línguagem natural, onde entende tanto línguagens de programação como idiomas naturais.

A ferramenta auxilia e escreve sob o contexto de comentários e código, sugerindo desde linhas de código a também funções completas. Atualmente possui suporte a uma grande variedade de línguagens de programação, e está em_ technical preview_, o que significa que é uma versão incompleta e em construção, logo sujeita a bugs e instabilidade.	Enquanto está em tempo de testes, o grupo para testadores está limitado, embora é possível entrar na [lista de espera](https://github.com/features/copilot/signup). Após a liberação de acesso, a extensão pode ser instalada no VS Code por [aqui](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot).

# Conclusão

A técnica de pair-programming pode ajudar você se comunicar melhor durante uma sessão de código, discutir boas práticas, compartilhar conhecimento e trazer soluções para problemas diários. E aliando todas essas dicas com as ferramentas do VS Code, fica mais fácil em trabalhar remotamente com a técnica. Espero ter ajudado a conhecer um pouco sobre a técnica, até logo!
