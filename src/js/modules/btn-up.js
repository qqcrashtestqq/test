const btnUp = () => {
  const btn = document.querySelector('#btn-up')

  if (!btn) return null

  btn.addEventListener('click', () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  })
}
export default btnUp
