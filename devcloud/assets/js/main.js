function menuOnClick () {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("main__section__btn__item").classList.toggle("main__section__btn__item__position");
    document.getElementById("hide_logo").classList.toggle("hide");
    document.getElementById("hide_text_logo").classList.toggle("hide");
    document.getElementById("company_text").classList.toggle("hide");
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            navigation: false,
        },

        1600: {
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        }
    },
});

let galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    loopedSlides: 1
});
let galleryThumbs = new Swiper('.gallery-thumbs', {
    direction: 'vertical',
    spaceBetween: 3,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 1
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

let miniSwiper = new Swiper(".miniSwiper", {
    pagination: {
        el: ".miniSwiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.miniSwiper-button-next',
        prevEl: '.miniSwiper-button-prev',
    },
    scrollbar: {
        el: '.miniSwiper-scrollbar',
    }
});