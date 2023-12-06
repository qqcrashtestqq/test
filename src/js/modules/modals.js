import { disablePageScroll, enablePageScroll, addScrollableSelector } from 'scroll-lock'
const modals = () => {
  const bindModal = (triggerBnt, modalName, missClick = true) => {
    const trigger = document.querySelectorAll(triggerBnt)
    const modal = document.querySelector(modalName)
    const close = modal?.querySelector('.modal__close')

    if (trigger && modal && close) {
      trigger.forEach(item => {
        item.addEventListener('click', () => {
          modal.classList.add('modal--open')
          disablePageScroll()
          addScrollableSelector(modalName)
        })
      })

      close.addEventListener('click', () => {
        modal.classList.add('modal--close')
        modal.classList.remove('modal--open')

        setTimeout(() => {
          modal.classList.remove('modal--close')
          enablePageScroll()
        }, 300)
      })

      if (missClick) {
        modal.addEventListener('click', e => {
          const { target } = e
          if (!target.closest('.modal__content')) {
            modal.classList.remove('modal--open')
            modal.classList.add('modal--close')

            setTimeout(() => {
              modal.classList.remove('modal--close')
              enablePageScroll()
            }, 300)
          }
        })
      }
    }
  }
  // remove
  bindModal('.btn-1', '.login')
  bindModal('.btn-2', '.reset-password')
  bindModal('.btn-3', '.check-email')
  bindModal('.btn-4', '.create-new-password')
  bindModal('.btn-5', '.upload')
  bindModal('.btn-6', '.deposit')
  bindModal('.btn-7', '.thanks')
  bindModal('.btn-8', '.error')
  bindModal('.btn-9', '.change-photo')
  bindModal('.btn-10', '.rotate')

  // main
  bindModal('#upload-homework', '.upload')
}

export default modals
