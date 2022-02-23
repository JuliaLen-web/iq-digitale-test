window.addEventListener('load', () => {
  grecaptcha.enterprise.ready(function() {
    grecaptcha.enterprise.execute('6LfQu5YeAAAAABZFVYnaNa4-QI1CAo_YEckQCIPc', {action: 'homepage'}).then(function(token) {
      document.location.href = 'http://iq-digitaaal.site.s55.hhos.ru/lp'
      grecaptcha.enterprise.style.bottom='0 !important'
      grecaptcha.enterprise.style.right='-186px !important'
    })
  })
})
