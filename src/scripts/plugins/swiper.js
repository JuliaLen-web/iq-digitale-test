import Swiper, {Pagination, Navigation, Mousewheel, Keyboard} from 'swiper'

Swiper.use([Pagination, Navigation, Mousewheel, Keyboard])

window.addEventListener('load', () => {
  if (!document.querySelector('.swiper-container')) {
    return false
  }

})
