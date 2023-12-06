const time = () => {
  const headerTimeBlock = document.querySelector('.header__time')
  const hoursEl = headerTimeBlock?.querySelector('.header__hours')
  const minutesEl = headerTimeBlock?.querySelector('.header__minutes')
  const secondsEl = headerTimeBlock?.querySelector('.header__seconds')

  if (!headerTimeBlock) return null

  const setTime = () => {
    const hours = new Date().getHours() + ''
    const minutes = new Date().getMinutes() + ''
    const seconds = new Date().getSeconds() + ''

    hoursEl.textContent = hours.padStart(2, '0')
    minutesEl.textContent = minutes.padStart(2, '0')
    secondsEl.textContent = seconds.padStart(2, '0')
  }
  setTime()
  setInterval(() => setTime(), 1000)
}
export default time
