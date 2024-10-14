$(document).ready(function() {
    sliderClone('catering');
    const cateringSlider = new Swiper('.catering__image-slider.swiper', {
        slidesPerView: 1.2,
        spaceBetween: 10,
        // loop: true,
        navigation: {
            prevEl: '.catering .swiper-arrow-prev',
            nextEl: '.catering .swiper-arrow-next'
        },
        breakpoints: {
            744: {
                slidesPerView: 2.4,
            },
            1200: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 4.2
            }
        }
    });

    const worksOuterSlider = new Swiper('.works__outer-slider.swiper', {
        slidesPerView: 1,
        loop: false,
        navigation: {
            prevEl: '.works__outer-slider.swiper > .swiper-arrows > .swiper-arrow-prev',
            nextEl: '.works__outer-slider.swiper > .swiper-arrows > .swiper-arrow-next'
        },
        spaceBetween: 12,
        breakpoints: {
            744: {
                spaceBetween: 24
            },
            1200: {
                spaceBetween: 32
            },
            1600: {
                spaceBetween: 64
            }
        }
    });

    const thumbsWorkInnerSlider = new Swiper('.thumbs-slider.swiper', {
        slidesPerView: 4,
        spaceBetween: 25,
        breakpoints: {
            1200: {
                spaceBetween: 10
            }
        }
    });

    const worksInnerSlider = new Swiper('.main-slider.swiper', {
        slidesPerView: 1,
        navigation: {
            prevEl: '.works__item-content-images .swiper-arrow-prev',
            nextEl: '.works__item-content-images .swiper-arrow-next'
        },
        nested: true,
        loop: true,
        thumbs: {
            swiper: thumbsWorkInnerSlider
        }
    });
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