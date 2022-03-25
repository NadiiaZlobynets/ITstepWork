import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const slider = () => {
    // swiper Hero
    const heroBgSlider = new Swiper(".js--hero-slider", {
        cssMode: true,
        navigation: {
            nextEl: ".js--hero-navigation-next",
            prevEl: ".js--hero-navigation-prev",
        },
        pagination: {
            bulletActiveClass: 'is-active',
            bulletClass: 'hero__container__slider-bottom__point__item',
            el: ".js--hero-points",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        }
    });

    const heroContentSlider = new Swiper(".js--hero-content-slider", {
        cssMode: true,
        navigation: {
            nextEl: ".js--hero-navigation-next",
            prevEl: ".js--hero-navigation-prev",
        },
        pagination: {
            bulletActiveClass: 'is-active',
            bulletClass: 'hero__container__slider-bottom__point__item',
            el: ".js--hero-points",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        mousewheel: {
            invert: false,
        },
    });
    // /swiper Hero

    // swiper product

    const productSlider = new Swiper(".js--product-slider", {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: ".js--product-navigation-next",
            prevEl: ".js--product-navigation-prev",
        },
    });
    // /swiper product

        // swiper partners

        const partnersSlider = new Swiper(".js--partners-slider", {
        
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: ".js--partners-navigation-next",
                prevEl: ".js--partners-navigation-prev",
            },
        });
        // /swiper partners
}

export default slider;