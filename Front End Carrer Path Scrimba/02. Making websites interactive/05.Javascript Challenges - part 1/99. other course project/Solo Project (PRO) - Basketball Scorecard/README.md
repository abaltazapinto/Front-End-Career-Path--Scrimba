# Getting Started

Install the dependencies and run the project

```
npm install
npm start
```

Head over to https://vitejs.dev/ to learn more about configuring vite

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!

Para alterar a disposicao do seu projecto para horizontal, você deve ajustar a propriedade `flex-direction` da sua classe `.container`para `row`em vez de horizontal .

esta funcao chamada highlighLeader é responsavel por des tacar visualmente

1- Recupera Elementos HTML dos Pontos:

```
var homeScoreElement = document.getElementbyID(home-points')
```

Estes comandos pegam elementos do DOM .

Obter e Converter Pontuacoes
var homeScore = +homeScoreElement.ineerText || 0
var guestScore= +guestScoreElement || 0;

Aqui a funcao le o texto interno desses elementos, que supostamente sao numeros representeando as pontuacoes. O operador `+` converte esse texto para um numero. Se o texto for vazio ou nao um numero valido .

if (homeScore > guestScore) [
himeScoreElement.add('leader);
] else if (guestScore > homeScore) {
guestScoreElement.classList.add('leader');
}
