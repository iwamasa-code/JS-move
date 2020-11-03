const mySwiper = new Swiper('.swiper-container', {

  speed: 1000,
  effect: 'coverflow',
  loop: true,
 
  autoplay: {
      delay: 2500 //2.5秒
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
})