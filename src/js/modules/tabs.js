import breakpoints from '../utils/breakpoints'

const tabs = () => {
  const bindTabs = (buttons, content, activeClass, attrContent = 'data-tab-content') => {
    const tabsElements = document.querySelectorAll(buttons)
    const contentElements = document.querySelectorAll(content)

    if (!tabsElements.length && !contentElements.length) return null

    const clearContent = () => {
      contentElements.forEach(cont => {
        cont.style.display = 'none'
      })
    }

    const setActiveContent = value => {
      contentElements.forEach(item => {
        if (item.getAttribute(attrContent) === value) {
          item.style.display = 'block'
        }
      })
    }

    const setActiveTab = tab => {
      tabsElements.forEach(item => item.classList.remove(activeClass))

      tab.classList.add(activeClass)
    }

    tabsElements.forEach(tab => {
      if (tab.classList.contains(activeClass)) {
        clearContent()
        setActiveContent(tab.getAttribute(`data-tab`))
        setActiveTab(tab)
      }
      tab.addEventListener('click', () => {
        clearContent()
        setActiveContent(tab.getAttribute(`data-tab`))
        setActiveTab(tab)
      })
    })
  }

  const resetContent = items => {
    const itemEls = document.querySelectorAll(items)
    if (!itemEls.length) return null

    itemEls.forEach(item => (item.style.display = 'block'))
  }

  const lg = () => {
    if (window.matchMedia(breakpoints.lg).matches) {
      bindTabs('#main-tab .content-tabs__btn', '#main-content [data-tab-content]', 'content-tabs__btn--active')
      bindTabs(
        '.subject__mobile-tabs .content-tabs__btn',
        '.subject__inner [data-tab-content]',
        'content-tabs__btn--active'
      )
    } else {
      resetContent('#main-content [data-tab-content]')
    }
  }

  lg()
  window.addEventListener('resize', lg)

  bindTabs(
    '.lesson-section__content-tabs .content-tabs__btn',
    '.lesson-section__blocks [data-tab-content]',
    'content-tabs__btn--active'
  )

  bindTabs(
    '.subject__content-tabs .content-tabs__btn',
    '.subject__wrapper [data-tab-content-list]',
    'content-tabs__btn--active',
    'data-tab-content-list'
  )

  bindTabs(
    '.marks-table__content-tabs .content-tabs__btn',
    '.marks-table__bottom [data-tab-table]',
    'content-tabs__btn--active',
    'data-tab-table'
  )
}

export default tabs
