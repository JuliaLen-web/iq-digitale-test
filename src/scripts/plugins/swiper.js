import Swiper, {Pagination, Navigation, Mousewheel, Keyboard, EffectCreative} from 'swiper'

Swiper.use([Pagination, Navigation, Mousewheel, Keyboard, EffectCreative])

window.addEventListener('load', () => {
  if (!document.querySelector('.firstscreen')) {
    return false
  }

  const firstscreen = new Swiper(".firstscreen", {
    speed: 600,
    effect: 'creative',
    creativeEffect: {
      prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, 0, -400],
      },
      next: {
        // will set `translateX(100%)` on next slides
        translate: ['100%', 0, 0],
      },
    },
    resizeObserver: true,
    observer: true,
    preloadImages: true,
    lazy: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: {
      releaseOnEdges: true,
      sensitivity: 2,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: true,
  })


})
