import { debounce } from '../utils/debounce.js'
import breakpoints from '../utils/breakpoints.js'
import { enablePageScroll, disablePageScroll } from 'scroll-lock'

const table = () => {
  const tableEl = document.querySelectorAll('.marks-table__table')
  const modal = document.querySelector('.lesson-modal')
  const marks = document.querySelectorAll('.table__marks')

  if (!tableEl.length || !modal || !marks.length) return

  const init = () => {
    if (window.matchMedia(breakpoints.lg).matches) {
      modal.classList.remove('lesson-modal--hide')

      marks.forEach(item => {
        const marksLi = item.querySelectorAll('.table__mark')

        marksLi.forEach(li => {
          li.addEventListener('click', () => {
            if (item.classList.contains('lesson-modal--active')) {
              modal.classList.remove('lesson-modal--active')
              enablePageScroll()
            } else {
              modal.classList.add('lesson-modal--active')
              disablePageScroll()
            }
          })
        })
      })

      modal.addEventListener('click', e => {
        if (!e.target.closest('.lesson-modal__content')) {
          modal.classList.remove('lesson-modal--active')
          enablePageScroll()
        }
      })
    } else {
      marks.forEach(item => {
        const marksLi = item.querySelectorAll('.table__mark')
        let scroll = 0

        item.addEventListener('scroll', () => (scroll = item.scrollLeft))

        marksLi.forEach(li => {
          li.addEventListener('mouseenter', () => {
            let x = li.getBoundingClientRect().width / 1.5 + li.offsetLeft - scroll
            let y = li.getBoundingClientRect().height / 1.5 + li.offsetTop

            modal.style.top = `${y}px`
            modal.style.left = `${x}px`

            modal.classList.remove('lesson-modal--hide')
            modal.classList.add('lesson-modal--show')
          })
        })
      })

      tableEl.forEach(item => {
        item.addEventListener('mousemove', e => {
          if (e.target.closest('.lesson-modal__content') || e.target.closest('.table__mark')) {
            // Если мы навели на modal

            modal.classList.add('lesson-modal--show')
          } else {
            // Если мы навели не в наши триггеры

            modal.classList.remove('lesson-modal--show')
            modal.classList.add('lesson-modal--hide')
          }
        })
      })
    }
  }

  init()
  window.addEventListener('resize', debounce(init))
}
export default table
