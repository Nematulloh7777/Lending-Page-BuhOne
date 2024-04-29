var burgerElement = document.querySelector('.burger')

if (burgerElement) {
  burgerElement.addEventListener('click', function() {
    this.classList.toggle("active");
    document.querySelector('.header__container').classList.toggle('active');
    document.body.classList.toggle("lock")
  })
}


let swiper = new Swiper(".promo__swiper", {
    autoplay: {
      delay: 2500,
    },
    loop: true,
    pagination: {
      el: ".promo .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".promo .arrow_next",
      prevEl: ".promo .arrow_prew",
    },
});


let swiper1 = new Swiper(".clients__swiper", {
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".clients .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".clients .arrow_next",
    prevEl: ".clients .arrow_prew",
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1010: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});


let swiper3 = new Swiper(".reviews__swiper", {
  autoplay: {
    delay: 3500,
  },
  loop: true,
  pagination: {
    el: ".reviews .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".reviews .arrow_next",
    prevEl: ".reviews .arrow_prew",
  },
});


