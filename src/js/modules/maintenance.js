import { enablePageScroll, disablePageScroll, addScrollableSelector } from 'scroll-lock'
const maintenance = () => {
  const maintenanceEl = document.querySelector('.maintenance')
  const maintenanceBtn = document.querySelector('.header__manual')
  const maintenanceClose = document.querySelector('.maintenance__close')

  if (!maintenanceEl && !maintenanceBtn && !maintenanceClose) return null

  maintenanceBtn.addEventListener('click', () => {
    maintenanceEl.classList.add('maintenance--open')
    disablePageScroll()
    addScrollableSelector('.maintenance__bottom ')
  })
  maintenanceClose.addEventListener('click', () => {
    maintenanceEl.classList.remove('maintenance--open')
    enablePageScroll()
  })

  maintenanceEl.addEventListener('click', e => {
    if (!e.target.closest('.maintenance__content')) {
      maintenanceEl.classList.remove('maintenance--open')
      enablePageScroll()
    }
  })
}
export default maintenance
