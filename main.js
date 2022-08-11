/*Botao voltar para o topo*/
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 180) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})
