$(document).ready(function() {


    /*const exampleSlider = new Swiper(".example .swiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        observer: true,
        observeParents: true,

        pagination: {
            el: '.example .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.example .slider-arrow--next',
            prevEl: '.example .slider-arrow--prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            1560: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });*/

    sliderClone('catering');
    const cateringSlider = new Swiper('.catering__image-slider.swiper', {
        slidesPerView: 1.2,
        spaceBetween: 10,
        loop: true,
        navigation: {
            prevEl: '.catering__image-slider.swiper .swiper-arrow-prev',
            nextEl: '.catering__image-slider.swiper .swiper-arrow-next'
        },
        breakpoints: {
            744: {
                slidesPerView: 2.4,
            }
        }
    })

});

function sliderClone(parent) {
    const allSlides = document.querySelectorAll(`.${parent} .swiper-slide`);
    const slidesCount = allSlides.length;
    let iterationCount = 0;

    if (slidesCount >= 9 || !slidesCount) {
        return;
    }

    iterationCount = Math.floor(9 / slidesCount);
    for (let i = 0; i < iterationCount - 1; i++) {
        allSlides.forEach(slide => {
            const slidesParent = slide.parentElement;
            let clonedSlide = slide.cloneNode(true);
            slidesParent.appendChild(clonedSlide);
        });
    }
}