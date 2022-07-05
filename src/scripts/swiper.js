var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
  
    breakpoints: {
        372:{
            slidesPerView: 2,
            spaceBetween: 1,  
        },
        540:{
            slidesPerView: 2,
            spaceBetween: 15,  
        },
        660:{
            slidesPerView: 3,
            spaceBetween: 15,  
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 15,  
        },
        920: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        1020: {
            slidesPerView: 5.5,
            spaceBetween: 30,
          },
        1440: {
          slidesPerView: 5.5,
          spaceBetween: 30,
        },
        1900: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
    },
  });