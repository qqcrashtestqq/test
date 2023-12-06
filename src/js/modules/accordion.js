const accordion = () => {
  const bindAccordion = (el, btn, content, activeClass, message) => {
    const targetElement = document.querySelectorAll(el)

    if (!targetElement.length) return

    targetElement.forEach(item => {
      const contentElement = item.querySelector(content)
      const btnEl = item.querySelector(btn)

      if (!contentElement && !btnEl) return

      if (item.classList.contains(activeClass)) {
        contentElement.style.maxHeight = '100vh'
        btnEl.setAttribute('aria-expanded', true)
        btnEl.setAttribute('aria-label', `Закрити ${message}`)
        // установить анимацию через 200ms после показа элементов, которые будут открыты по дефолту
        setTimeout(() => (contentElement.style.transition = 'max-height .3s var(--ease-in-out)'), 200)
      }

      btnEl.addEventListener('click', () => {
        // contentElement.classList.toggle(activeClass)

        if (contentElement.style.maxHeight) {
          contentElement.style.maxHeight = null
          item.classList.remove(activeClass)
          btnEl.setAttribute('aria-expanded', false)
          btnEl.setAttribute('aria-label', `Відкрити ${message}`)
        } else {
          contentElement.style.maxHeight = `${contentElement.scrollHeight + 2}px`
          item.classList.add(activeClass)
          btnEl.setAttribute('aria-expanded', true)
          btnEl.setAttribute('aria-label', `Закрити ${message}`)
        }
      })
    })
  }

  bindAccordion('.nav__accordion', '.nav__open', '.nav__down', 'nav__accordion--active', 'блок меню')
  bindAccordion('.maintenance__item', '.maintenance__btn', '.maintenance__block', 'maintenance__item--active', 'розділ')
  bindAccordion(
    '.todo__tasks.todo__tasks--done',
    '.todo__tasks.todo__tasks--done .todo__add',
    '.todo__tasks.todo__tasks--done .todo__bottom',
    'todo__tasks--active',
    'виконані завдання'
  )
  bindAccordion(
    '.lesson-section__inner',
    '.theme-card__more',
    '.lesson-section__right',
    'lesson-section__inner--active',
    'інформацію про предмет'
  )
  bindAccordion('.subject__plan.plan', '.plan__top', '.plan__bottom', 'plan--active', 'розділ')
}
export default accordion
