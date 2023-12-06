import { debounce } from '../utils/debounce.js'

const calcHeight = () => {
  const calculateHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
  }

  calculateHeight()

  window.addEventListener('resize', debounce(calculateHeight))
}

export default calcHeight
