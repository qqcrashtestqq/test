const navigation = () => {
  const btnToggler = document.querySelector('#aside-btn')
  const aside = document.querySelector('.aside')
  const main = document.querySelector('.main')

  if (btnToggler) {
    btnToggler.addEventListener('click', () => {
      aside.classList.toggle('aside--hide')
      main.classList.toggle('main--active')
    })
  }
}

export default navigation
