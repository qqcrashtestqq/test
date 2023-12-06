const input = () => {
  const inputs = document.querySelectorAll('[data-input]')

  if (!inputs.length) return

  inputs.forEach(item => {
    item.addEventListener('input', e => {
      const value = e.target.value.length > 0
      if (value) item.classList.add('input--active')
      else item.classList.remove('input--active')
    })
  })
}
export default input
