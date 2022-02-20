window.addEventListener('load', () => {
  const btn = document.querySelector('.about__video-btn')
  const player = document.querySelector('.about__video-player')

  btn.addEventListener('click',()=> {
    console.log('yrs')
    btn.classList.add('about__video-btn_hide')
    player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  });
})
