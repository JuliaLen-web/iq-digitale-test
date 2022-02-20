import Swiper, {Pagination, Navigation, Mousewheel, Keyboard, EffectCreative} from 'swiper'

Swiper.use([Pagination, Navigation, Mousewheel, Keyboard, EffectCreative])

window.addEventListener('load', () => {

  // slider for firstscreen section
  if (!document.querySelector('.firstscreen')) {
    return false
  }

  const firstscreen = new Swiper(".firstscreen", {
    speed: 600,
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: [-400, 0, -400],
        opacity: 0
      },
      next: {
        translate: ['100%', 0, 0],
        opacity: 1
      },
    },
    resizeObserver: true,
    observer: true,
    preloadImages: true,
    lazy: true,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: {
      releaseOnEdges: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: true,
  })

  // slider for quotes section
  if (!document.querySelector('.quotes')) {
    return false
  }

  const quotes = new Swiper(".quotes", {
    speed: 600,
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: [-400, 0, -400],
        opacity: 0
      },
      next: {
        translate: ['100%', 0, 0],
        opacity: 1
      },
    },
    resizeObserver: true,
    observer: true,
    preloadImages: true,
    lazy: true,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: {
      releaseOnEdges: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: true,
  })

  // slider for projects section
  if (!document.querySelector('.projects__gallery')) {
    return false
  }

  const projects = new Swiper(".projects__gallery", {
    speed: 800,
    resizeObserver: true,
    observer: true,
    preloadImages: true,
    lazy: true,
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 300,
    keyboard: true,
    pagination: {
      el: '.swiper__process',
      type: 'bullets',
      clickable: true
    },
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: [0, 0, 0],
        opacity: 0
      },
      next: {
        translate: [0, 0, 0],
        opacity: 0
      },
    },
  })

  // slider for contacts section
  if (!document.querySelector('.contacts__gallery .swiper')) {
    return false
  }

  const contacts = new Swiper(".contacts__gallery .swiper", {
    speed: 600,
    resizeObserver: true,
    observer: true,
    preloadImages: true,
    lazy: true,
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: true,
  })
})
