import tippy from 'tippy.js'
if (!SVGElement.prototype.contains) {
  SVGElement.prototype.contains = HTMLDivElement.prototype.contains
}
const tooltip = () => {
  // 1
  tippy('.types__icon[data-tippy-content]', {
    arrow: false,
    placement: 'top',
    animation: 'scale-subtle',
    inertia: true
  })

  tippy('.lesson__button[data-tippy-content]', {
    arrow: false,
    placement: 'top',
    animation: 'scale-subtle',
    inertia: true
  })

  tippy('.table__total[data-tippy-content]', {
    arrow: false,
    placement: 'auto',
    animation: 'scale-subtle',
    inertia: true
  })
}
export default tooltip
