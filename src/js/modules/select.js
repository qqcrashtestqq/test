const select = () => {
  const bindSelect = (el, topBar, bottom, activeClass = 'active') => {
    const items = document.querySelectorAll(el)

    if (!items.length) return null

    items.forEach(item => {
      const top = item.querySelector(topBar)
      const list = item.querySelector(bottom)

      if (!top || !list) return null

      top.addEventListener('click', () => {
        if (item.classList.contains(activeClass)) {
          item.classList.remove(activeClass)
        } else {
          items.forEach(el => el.classList.remove(activeClass))
          item.classList.add(activeClass)
        }
      })

      document.addEventListener('click', e => {
        if (e && e.target) if (!e.target.closest(el)) items.forEach(el => el.classList.remove(activeClass))
      })
    })
  }

  bindSelect('.select', '.select__top', '.select__bottom', 'select--active')
}

export default select
