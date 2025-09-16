## Introdução

## Sumário

- [Visão geral](#visão-geral)
  - [Autores](#autores)
  - [ETEC](#etec)
  - [Nome do Projeto](#nome-do-projeto)
  - [Problematização](#problematização)
  - [Objetivo](#objetivo)
- [Construção](#construção)
  - [Ferramentas Utilizadas](#ferramentas-utilizadas)
  - [Tutorial de Acesso](#tutorial-de-acesso)
  - [Desafios Enfrentados](#desafios-enfrentados)
  - [Futuras Melhorias](#futuras-melhorias)
- [Conclusão](#conclusão)
- [Agradecimentos](#agradecimentos)

## Visão geral

### Autores

-Arthur Curcio de Campos Miranda
-Enzo Raphael Oliveira Garzon
-Matheus Kenzo Kobori Barres
-Rodrigo Perez Oliveira Pineda

### ETEC

ETEC Lauro Gomes

### Nome do Projeto

Dialexus - Tradutor de gírias

### Problematização

Hoje em dia, com o mundo globalizado a informação percorre o mundo rapidamente, porém nem sempre ela tem um fácil acesso, já que o uso de gírias e/ou abreviações dificulta o entendimento da informação para pessoas que conhecem pouco ou nem conhecem a língua. Mesmo que, nos tempos atuais, existam tradutores que traduzem muitas línguas, porém quando você tenta traduzir dialetos e gírias eles traduzem ao pé da letra. Por exemplo, "Piece of cake" que traduzindo literalmente, significa "Um pedaço de bolo", mas no inglês isso significa que algo é muito fácil. Portanto, os tradutores normais são excelentes em traduzir textos que seguem a norma culta, porém, em situações línguisticas que fogem da norma podem haver erros cruciais para o entendimento da frase.

### Objetivo

O nosso objetivo com a Dialexus é fazer um tradutor que entenda gírias, permita o usuário usar aúdios para a entrada de dados e que seja de fácil acesso para as pessoas, já que foi planejado para que seja utilizados em viagens, permitindo a comunicação com pesssoas nativas sem problemas de entendimento devido à alta quantidade de gírias.

## Construção

### Ferramentas Utilizadas

Nesse projeto, usamos as seguintes ferramentas:

- HTML5 para a arquitetura da página
- CSS3 para animações e estilizações
- JS para a funcionalidade da página
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Gemini API](https://ai.google.dev/gemini-api/docs?hl=pt-br) - IA do google
- [Form Submit](https://formsubmit.co/) - Biblioteca de envio de formulários
- [Sweet Alert](https://sweetalert2.github.io) - Biblioteca Javascript
- [Font Awesome](https://fontawesome.com/) - Biblioteca para icones
- [Undraw](https://undraw.co) - Biblioteca para ícones e imagens

### Tutorial de acesso

#### 1º MODO: via link do GitHub Pages:

[Disponível aqui](https://thurses.github.io/dialexus/)
-OBS: A IA não funcionará por questões de segurança

#### 2º MODO: baixando o projeto e executando localmente

#####Baixando o projeto e executando localmente

Abra a pasta "CÓDIGOS" e baixe a pasta, após isso, abra seu editor de código e entre na pasta "Tradutor", abra o arquivo chamado "gemini.js". Depois, entre no [site do google](https://ai.google.dev/gemini-api/docs?hl=pt-br) e pegue a chave da sua API no botão "gerar chave de API". Após isso, volte no código do arquivo gemini.js e coloque na linha 250 no fim dela, onde está escrito "key=" coloque após isso a sua chave da API. Agora é só rodar o código "tradutor.html" e aproveitar o tradutor da Dialexus.

### Desafios Enfrentados

- O gemini é muito complexo de se mexer, nele ocorrem muitos erros, porém conseguimos superá-los
- Sofremos um pouco na parte de tornar o site responsivo

### Futuras Melhorias

Daqui pra frente, nós vamos adicionar a parte de voz do tradutor para aumentar ainda mais a inclusão e acessibilidade. Nessa funcionalidade nova, o usuário poderá gravar um aúdio que será convertido para texto e, logo em seguida, traduzido para o idioma selecionado anteriormente.

## Conclusão

Com o desenvolvimento do Dialexus, conseguimos colocar em prática nossos conhecimentos técnicos e criar uma solução que busca ir além dos tradutores tradicionais, oferecendo uma proposta voltada para o entendimento de gírias e expressões idiomáticas. Durante o processo, enfrentamos desafios, principalmente na integração da API de IA e na adaptação do site para diferentes dispositivos, mas essas dificuldades contribuíram para o nosso aprendizado e evolução como desenvolvedores.

Apesar de ainda estar em fase inicial, o projeto já demonstra seu potencial de impacto, mostrando como a tecnologia pode aproximar pessoas de diferentes culturas e facilitar a comunicação no dia a dia. Acreditamos que, com as futuras melhorias planejadas, como a inclusão da tradução por voz, a Dialexus poderá se tornar ainda mais acessível, prática e inclusiva, cumprindo seu objetivo de ajudar pessoas a se comunicarem melhor em um mundo cada vez mais globalizado.

## Agradecimentos

Nós, da Dialexus, gostaríamos de agradecer aos nossos familiares e à todas as pessoas que deram suporte ao nosso grupo. E, mais especificamente, ao Professor Luis Carlos dos Santos, ou LC para os mais próximos, por sempre tirar nossas maiores dúvidas e sempre nos apoiar e à Professora Rosinha, outra pessoa também que nos apoiou muito no projeto e nos incentivou a darmos nosso melhor nele.
