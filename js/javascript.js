console.log("hello");
// Section Gallery - Dropdown choices
const defaultSelect = () => {
    const elementGallery = document.querySelector('#gallery__select');
    const choiceGallery = new Choices(elementGallery, {
      searchEnabled: false,
      position: 'bottom'
    });
  }
defaultSelect();

// Section Hero slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Section Gallery slider

let gallerySlider = new Swiper(".gallery__slider", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2,
    },
    1008: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
    },
    1760: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
    }
  }
});

