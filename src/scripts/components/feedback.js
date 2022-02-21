import axios from 'axios'

window.addEventListener('load', () => {
  const form = document.querySelector('.feedback form')

  const fields = form.querySelectorAll('input, textarea')
  const requiredFields = form.querySelectorAll('input[required]')
  const button = form.querySelector('button[type=submit]')

  const listenerValue = event => {
    const field = event.target

    let parent
    let invalidClass

    if (field.type === 'text' || field.type === 'textarea') {
      parent = field.closest('input')
      invalidClass = 'label_invalid'
    }

    if (parent) {
      parent.classList.remove(invalidClass)
    }

    button.toggleAttribute('disabled', invalid())
  }

  const invalid = () => {
    let invalid = false

    requiredFields.forEach(field => {
      if ((field.type === 'text' || field.type === 'textarea') && !field.value) {
        invalid = true
      }
    })

    return invalid
  }

  fields.forEach(field => field.addEventListener('change', listenerValue))
  fields.forEach(field => field.addEventListener('input', listenerValue))

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (invalid()) {
      return false
    }

    let target = e.target

    form.classList.add('preloader')
    button.setAttribute('disabled', 'disabled')

    axios
      .post('/', {
        name: target.querySelector('[name="fullName"]').value,
        email: target.querySelector('[name="fullName"]').value,
        description: target.querySelector('[name="message"]').value,
      })
      .then(() => {
        form.classList.add('feedback__content-form_success')
      })
      .catch(error => {
        console.log(error)
      })

    form.classList.remove('mask')
    button.removeAttribute('disabled')
  })
})
