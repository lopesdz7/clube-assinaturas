# 📚 Encantos Literários — Clube de Assinatura

Landing page de um clube de assinatura de livros, com foco em **animações**.
Desafio da formação Full Stack da Rocketseat.

🔗 **Acesse online:** https://lopesdz7.github.io/clube-assinaturas/

## ✨ Seções

- **Hero:** logo no canto superior esquerdo, botão "Assinar" no direito, título e texto
  centralizados, ilustração de um livro aberto com luz, estrelas e partículas;
- **Kit do mês:** imagem do kit em destaque, com textos dos dois lados ligados à imagem por
  linhas e pontos. Os itens aparecem **em sequência** (esquerda, direita, esquerda...) ao rolar;
- **Assinaturas:** 3 cards (Mensal, Semestral e Anual) com nome, preço em destaque, valor
  equivalente por ano, benefícios e botão. O Semestral aparece destacado como "Mais escolhido";
- **Rodapé:** logo à esquerda, ícones das redes sociais e links de navegação à direita
  (Kits passados, Clube de membros, Blog, Central de ajuda, Regulamentos e Suporte).

## 🎬 Animações

| Onde               | O que acontece                                                         |
| ------------------ | ---------------------------------------------------------------------- |
| Header             | Desce do topo ao carregar a página                                     |
| Título e texto     | Sobem com fade, um depois do outro                                     |
| Livro do hero      | Flutua devagar, com a luz atrás pulsando                               |
| Estrelas           | Piscam e giram em tempos diferentes                                    |
| Partículas         | Sobem do livro como "magia"                                            |
| Kit do mês         | A imagem aparece; cada item entra em sequência e a linha se desenha    |
| Planos             | Os cards sobem um depois do outro; levantam ao passar o mouse          |
| Botões e links     | Hover com elevação; links do rodapé ganham sublinhado animado          |

As animações de rolagem usam `IntersectionObserver` e rodam só uma vez.
Quem prefere menos movimento (`prefers-reduced-motion`) vê tudo sem animação, e sem
JavaScript todo o conteúdo continua visível.

## ♿ Acessibilidade

- Link "Pular para o conteúdo";
- Estrutura semântica (`header`, `main`, `section`, `article`, `nav`, `footer`) e hierarquia de títulos;
- Imagens decorativas com `alt=""` e `aria-hidden`; imagem do kit com texto alternativo;
- Ícones de redes sociais com `aria-label` avisando que abrem em nova aba;
- Foco visível em todos os links e botões.

## 🛠️ Tecnologias

- HTML5
- CSS3 (variáveis, Grid, Flexbox, `clip-path`, `@keyframes`, transições, media queries)
- JavaScript (só para disparar as animações ao rolar)
- Fonte [Raleway](https://fonts.google.com/specimen/Raleway) (Google Fonts)

## ▶️ Como rodar

Não precisa instalar nada.

1. Clone o repositório:
   ```bash
   git clone https://github.com/lopesdz7/clube-assinaturas.git
   ```
2. Abra o `index.html` no navegador, ou use a extensão **Live Server** do VS Code.

## 📁 Estrutura

```
clube-assinaturas/
├── index.html
├── style.css
├── script.js
└── assets/
    └── images/
        ├── logo-mark.svg   # logo
        ├── open-book.svg   # livro aberto do hero
        └── kit.svg         # kit do mês
```
