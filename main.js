// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//     autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
// },

// });
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 450,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    });