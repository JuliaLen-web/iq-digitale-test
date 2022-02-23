window.addEventListener('load', () => {
  const btnHome = document.querySelector('.recaptcha .button')

  if (!document.querySelector('.recaptcha')) {
    return false
  }

  grecaptcha.enterprise.ready(function() {
    btnHome.addEventListener('click',()=> {
      grecaptcha.enterprise.execute('6LfQu5YeAAAAABZFVYnaNa4-QI1CAo_YEckQCIPc', {action: 'homepage'}).then(function(token) {
        document.location.href = 'http://iq-digitaaal.site.s55.hhos.ru/lp.html'

      })
    })
  })
})
