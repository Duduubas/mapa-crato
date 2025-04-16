# Mapa Cultural do Crato

![Logo Crato](./public/soldadinhodoararipe.png)

<!-- Badges de Status e Informações do Projeto -->
[![Versão](https://img.shields.io/badge/Versão-1.0.0-brightgreen.svg)](hhttps://github.com/Duduubas/mapa-crato/releases)
[![Status](https://img.shields.io/badge/Status-ativo-success.svg)](hhttps://github.com/Duduubas/mapa-crato)

<!-- Badges de Tecnologia -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

<!-- Badges Especiais do Projeto -->
[![Pontos Turísticos](https://img.shields.io/badge/Pontos%20turísticos-4%2B-brightgreen.svg)](hhttps://github.com/Duduubas/mapa-crato#-funcionalidades)
[![Timeline](https://img.shields.io/badge/Timeline-interativa-blue.svg)](hhttps://github.com/Duduubas/mapa-crato#-funcionalidades)
[![Região](https://img.shields.io/badge/Região-Crato%20CE-yellowgreen.svg)](hhttps://github.com/Duduubas/mapa-crato)

<!-- Badges de Design e UX -->
[![Mobile Friendly](https://img.shields.io/badge/Mobile-friendly-success.svg)](hhttps://github.com/Duduubas/mapa-crato#-responsividade)
[![Soldadinho do Araripe](https://img.shields.io/badge/Mascote-Soldadinho%20do%20Araripe-red.svg)](hhttps://github.com/Duduubas/mapa-crato)
[![Design](https://img.shields.io/badge/Design-responsivo-informational.svg)](hhttps://github.com/Duduubas/mapa-crato#-design-e-experiência-do-usuário)

<!-- Badges de Feedback -->
[![Contribuições](https://img.shields.io/badge/Contribuições-bem--vindas-brightgreen.svg)](hhttps://github.com/Duduubas/mapa-crato)
[![Desenvolvedor](https://img.shields.io/badge/Dev-Eduardo%20B.-blueviolet.svg)](https://eduardobrito.dev)
[![Feito com](https://img.shields.io/badge/Feito%20com-❤️-ff69b4.svg)](hhttps://github.com/Duduubas/mapa-crato)
## Sobre o Projeto

O Mapa Cultural do Crato é um guia turístico digital que apresenta os principais pontos de interesse histórico e cultural da cidade de Crato, conhecida como a "Princesa do Cariri", localizada no sul do Ceará. O projeto oferece uma experiência interativa através de uma timeline visual que permite aos visitantes conhecerem locais emblemáticos como o Teatro Rachel de Queiroz, a Cúria Diocesana, o Museu Histórico do Crato e a Câmara Municipal.

## 🚀 Funcionalidades

- **Modal de Boas-Vindas**: Apresentação inicial para novos visitantes com informações sobre a cidade
- **Timeline Interativa**: Visualização dos pontos turísticos em formato de linha do tempo
- **Modais Informativos**: Ao clicar em cada ponto turístico, é exibido um modal com detalhes e descrições
- **Animações**: Efeitos visuais para melhorar a experiência do usuário
- **Design Responsivo**: Layout adaptável para dispositivos móveis e desktop
- **Armazenamento Local**: Utiliza localStorage para lembrar visitantes recorrentes

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica do conteúdo
- **CSS3**: Estilização com foco em uma paleta inspirada nas cores naturais da região do Cariri
- **JavaScript**: Implementação de interatividade e funcionalidades dinâmicas
- **Font Awesome**: Ícones utilizados na interface
- **Intersection Observer API**: Para animações baseadas em rolagem

## 📁 Estrutura do Projeto

```
/
├── index.html                  # Página principal
├── javascript/                 # Scripts JavaScript
│   ├── script.js               # Funcionalidades principais
│   └── modal-boasvindas.js     # Funcionalidades do modal de boas-vindas
├── styles/                     # Arquivos CSS
│   ├── styles.css              # Estilos principais
│   ├── footer.css              # Estilos do rodapé
│   └── modal-boasvindas.css    # Estilos do modal de boas-vindas
└── public/                     # Imagens e recursos
    ├── soldadinhodoararipe.png # Logo
    ├── praca-img.jpg           # Imagem de fundo
    ├── teatro-rachel-queiroz.png
    ├── casa-do-bispo.png
    ├── museu-historico-crato.png
    └── camara-municipal.png
```

## ⚙️ Como Executar

1. Clone este repositório:
```bash
git clone hhttps://github.com/Duduubas/mapa-crato.git
```

2. Navegue até a pasta do projeto:
```bash
cd mapa-cultural-crato
```

3. Abra o arquivo `index.html` em seu navegador ou utilize um servidor local como Live Server (VS Code).

## 🎨 Design e Experiência do Usuário

O projeto utiliza uma paleta de cores inspirada na natureza e cultura do Cariri:
- **Verde escuro**: Inspirado na Floresta Nacional do Araripe
- **Amarelo-dourado**: Representa o sol e a riqueza cultural da região
- **Vermelho-terroso**: Simboliza o solo característico da Chapada do Araripe

A experiência do usuário foi planejada para ser informativa e agradável, combinando elementos visuais e textuais que transmitem a essência da cidade do Crato.

## 📱 Responsividade

O site foi desenvolvido com uma abordagem mobile-first, garantindo que os usuários tenham uma experiência consistente em diferentes dispositivos:

- **Desktop**: Layout em timeline horizontal com itens alternando entre esquerda e direita
- **Tablet**: Adaptações de espaçamento e tamanho de elementos
- **Mobile**: Reorganização da timeline para formato vertical com todos os itens alinhados à direita

## 🧠 Lições Aprendidas

- Implementação de uma timeline interativa usando apenas HTML, CSS e JavaScript puro
- Criação de animações baseadas em scroll com Intersection Observer API
- Desenvolvimento de modais dinâmicos que carregam conteúdo via JavaScript
- Aplicação de técnicas de design responsivo para criar uma experiência consistente em múltiplos dispositivos

## 👨‍💻 Desenvolvedor

Este projeto foi desenvolvido por [Eduardo B.](https://eduardobrito.dev).

---

<div align="center">
  <p>🌴 Feito com ❤️ em Crato, Ceará, Brasil</p>
  <p>As imagens utilizadas neste projeto estão disponíveis no Google Maps, Tripadvisor e Wikipedia.</p>
</div>