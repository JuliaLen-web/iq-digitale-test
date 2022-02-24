import Swiper, {Pagination, Navigation, Mousewheel, Keyboard, EffectCreative} from 'swiper'

Swiper.use([Pagination, Navigation, Mousewheel, Keyboard, EffectCreative])

window.addEventListener('load', () => {

  // slider for firstscreen section
  if (!document.querySelector('.firstscreen')) {
    return false
  }

  const firstscreen = new Swiper(".firstscreen", {
    resizeObserver: true,
    observer: true,
    speed: 600,
    keyboard: true,
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
  })

  // slider for quotes section
  if (!document.querySelector('.quotes')) {
    return false
  }

  const quotes = new Swiper(".quotes", {
    resizeObserver: true,
    observer: true,
    speed: 600,
    keyboard: true,
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
  })

  // slider for projects section
  if (!document.querySelector('.projects__gallery')) {
    return false
  }

  const projects = new Swiper(".projects__gallery", {
    resizeObserver: true,
    observer: true,
    speed: 800,
    keyboard: true,
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 300,
    pagination: {
      el: '.swiper__process',
      type: 'bullets',
      clickable: true
    },

    breakpoints: {
      575: {
      },
      770: {
        grabCursor: true,
      },
      1024: {
        grabCursor: false,
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
      }
    }
  })

  // slider for contacts section
  if (!document.querySelector('.contacts__gallery .swiper')) {
    return false
  }

  const contacts = new Swiper(".contacts__gallery .swiper", {
    resizeObserver: true,
    observer: true,
    speed: 600,
    keyboard: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 27,
    slidesPerGroup: 1,
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      770: {

      },
      1024: {
        slidesPerView: 4,
      }
    }
  })
})
