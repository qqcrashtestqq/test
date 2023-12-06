import Calendar from 'color-calendar'

const todo = () => {
  const state = {
    inputValue: null,
    date: null,
    time: null
  }

  const todoEl = document.querySelector('.todo')
  const addTodo = todoEl?.querySelector('#todo-add')
  const taskList = todoEl?.querySelector('.todo__block--tasks .todo__list')
  const todoCalendar = todoEl?.querySelector('.todo__create')
  const cancelBtn = todoEl?.querySelector('#task-cancel')
  const saveBtn = todoEl?.querySelector('#task-save')
  const todayBtn = todoEl?.querySelector('.create__icon-num')

  if (!todoEl || !todayBtn) return null
  todayBtn.textContent = new Date().getDate()

  const initCalendar = () => {
    const calendar = new Calendar({
      id: '#calendar',

      theme: 'glass',
      layoutModifiers: ['month-left-align'],
      fontFamilyHeader: 'Roboto, sans-serif',
      fontFamilyWeekdays: 'Roboto, sans-serif',
      fontFamilyBody: 'Roboto, sans-serif',
      startWeekday: 1,
      disableMonthYearPickers: true,
      customMonthValues: [
        'січень',
        'лютий',
        'березень',
        'квітень',
        'травень',
        'червень',
        'липень',
        'серпень',
        'вересень',
        'жовтень',
        'листопад',
        'грудень'
      ],
      customWeekdayValues: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    })
  }

  const addField = () => {
    const fieldTemplate = `
      <li class="todo__item todo-item todo-item--create">
        <label class="todo-item__checkbox checkbox">
          <input type="checkbox" value="" class="checkbox__input">
          <div class="checkbox__block">
            <span class="checkbox__checkmark checkbox__checkmark--default">
              <svg><use xlink:href="img/sprite.svg#checkbox-default"></use></svg>
            </span>
            <span class="checkbox__checkmark checkbox__checkmark--active">
              <svg><use xlink:href="img/sprite.svg#checkbox-active"></use></svg>
            </span>
          </div>
          <div class="checkbox__todo"><input type="text" class="checkbox__field"></div>
        </label>
        <button class="checkbox__calendar" aria-label="Вiдкрити календар">
          <svg class="checkbox__calendar-svg">
            <use xlink:href="img/sprite.svg#calendar"></use>
          </svg>
        </button>
      </li>`

    taskList.insertAdjacentHTML('beforebegin', fieldTemplate)

    const inputValue = document.querySelector('.todo-item--create .checkbox__field')
    const checkboxValue = document.querySelector('.todo-item--create .checkbox__input')
    const calendarBtn = document.querySelector('.todo-item--create .checkbox__calendar')

    inputValue.focus()

    calendarBtn.addEventListener('click', () => {
      todoCalendar.classList.toggle('todo__create--active')
    })
  }

  addTodo.addEventListener('click', addField)

  initCalendar()
}
export default todo
