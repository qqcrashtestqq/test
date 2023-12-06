import Quill from 'quill'

const toolbarOptions = [
  ['bold', 'italic', 'underline', { color: [] }, { list: 'ordered' }, { list: 'bullet' }] // toggled buttons
]
const editor = () => {
  const createEditor = el => {
    const editorEl = document.querySelector(el)

    if (!editorEl) return
    new Quill(editorEl, {
      modules: {
        toolbar: toolbarOptions
      },

      placeholder: 'Моя відповідь',

      theme: 'snow'
    })
  }

  createEditor('.editor__block')
}
export default editor
