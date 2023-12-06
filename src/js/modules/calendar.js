import Calendar from 'color-calendar'

const calendar = () => {
  const scheduleCalendar = document.querySelector('#schedule-calendar')

  if (scheduleCalendar) {
    new Calendar({
      id: '#schedule-calendar',

      theme: 'glass',
      layoutModifiers: ['month-left-align'],
      fontFamilyHeader: 'Roboto, sans-serif',
      fontFamilyWeekdays: 'Roboto, sans-serif',
      fontFamilyBody: 'Roboto, sans-serif',
      startWeekday: 1,
      disableMonthYearPickers: true,
      customMonthValues: [
        'Cічень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Cерпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень'
      ],
      customWeekdayValues: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    })
  }
}
export default calendar
