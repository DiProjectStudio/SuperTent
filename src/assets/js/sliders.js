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
                slidesPerView: 3.3
            }
        },
        on: {
            slideChange: () => {
                const nextArrow = document.querySelector('.catering .swiper-arrow-next');
                const prevArrow = document.querySelector('.catering .swiper-arrow-prev');

                if (this.isEnd) {
                    nextArrow.classList.add('disabled');
                } else {
                    nextArrow.classList.remove('disabled');
                }

                if (this.activeIndex === 0) {
                    prevArrow.classList.add('disabled')
                } else {
                    prevArrow.classList.remove('disabled')
                }
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