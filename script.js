// Animações ao rolar a página.
// Sem JavaScript, tudo aparece normalmente: a classe "js" (adicionada no <head>)
// é o que esconde os elementos antes de animar.

// Ordem dos itens do kit: alterna esquerda e direita (1º esq., 1º dir., 2º esq., ...)
const kitLeft = document.querySelectorAll('.kit-list-left .kit-item')
const kitRight = document.querySelectorAll('.kit-list-right .kit-item')

kitLeft.forEach((item, index) => item.style.setProperty('--i', index * 2))
kitRight.forEach((item, index) => item.style.setProperty('--i', index * 2 + 1))

// Cards de planos entram um depois do outro
document.querySelectorAll('.plans-grid .plan-card').forEach((card, index) => {
  card.style.setProperty('--i', index)
})

const animated = document.querySelectorAll('.reveal, [data-stagger]')

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target) // anima só uma vez
        }
      })
    },
    // Dispara quando o elemento passa de 15% da altura da tela, de baixo para cima.
    // threshold 0 garante que blocos altos (cards empilhados no celular) também animem.
    { threshold: 0, rootMargin: '0px 0px -15% 0px' }
  )

  animated.forEach((element) => observer.observe(element))
} else {
  animated.forEach((element) => element.classList.add('is-visible'))
}
