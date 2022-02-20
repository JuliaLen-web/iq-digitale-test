window.addEventListener('load', () => {
  if (!document.querySelector('.blog__content')) {
    return false
  }

  const elem = document.querySelectorAll('.blog__preview')

  elem.forEach(el => {
    el.addEventListener('click', () => {
      elem.forEach(el => {
        el.classList.remove('blog__preview_active')
      })
      el.classList.add('blog__preview_active')
    })
  })
})
