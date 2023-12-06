import SimpleBar from 'simplebar'
import accordion from './modules/accordion'
import calcHeight from './modules/calcHeight'
import input from './modules/input'
import modals from './modules/modals'
import navigation from './modules/navigation'
import select from './modules/select'
import time from './modules/time'
import tooltip from './modules/tooltip'
import header from './modules/header'
import tabs from './modules/tabs'
import todo from './modules/todo'
import btnUp from './modules/btn-up'
import editor from './modules/editor'
import maintenance from './modules/maintenance'
import graph from './modules/graph'
import table from './modules/table'
import calendar from './modules/calendar'

window.addEventListener('DOMContentLoaded', () => {
  try {
    new SimpleBar(document.querySelector('[data-simplebar]'), { autoHide: false })
  } catch (error) {
    /*  */
  }
  calcHeight()
  input()
  accordion()
  select()
  modals()
  navigation()
  time()
  tooltip()
  header()
  tabs()
  todo()
  btnUp()
  editor()
  maintenance()
  graph()
  table()
  calendar()
})
