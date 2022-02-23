window.addEventListener('load', () => {
  const btn = document.querySelector('.about__video-btn')
  const player = document.querySelector('.about__video-player')

  if (!btn) {
    return false
  }

  btn.addEventListener('click',()=> {
    btn.classList.add('about__video-btn_hide')
    player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  });
})
