let innerWidth;
$(document).ready(function () {

    // INPUT MASK PHONE NUMBER
    $('.phone-mask input').inputmask({
        "mask": "+7 (999) 999-99-99",
        showMaskOnHover: false,
        showMaskOnFocus: false,

        onBeforePaste: function (pastedValue, opts) {
            return pastedValue.replace(/^8/, '');
        }
    });

    advantagesAction();
    innerWidth = window.innerWidth;

    copyLinkInWorksSection();
    copySlideTitleInWorkSection();
    seoShowMore();
    isInputInFocus();
});

window.addEventListener('resize', function () {
    innerWidth = window.innerWidth;
});

function advantagesAction() {
    const iconItems = document.querySelectorAll('.advantages__icon-items .icon-item');
    const cardItems = document.querySelectorAll('.advantages__card-items .card-item');

    if (iconItems && iconItems.length > 0) {
        iconItems.forEach((iconItem) => {
            iconItem.addEventListener('click', function () {
                // Проверяем, активен ли элемент
                const isActive = iconItem.classList.contains('active');
                const dataTab = iconItem.getAttribute('data-tab');

                if (innerWidth < 1200) {
                    // Удаляем класс 'active' у всех элементов
                    iconItems.forEach(item => {
                        item.classList.remove('active');
                    });

                    // Скрываем все cardItems
                    cardItems.forEach(cardItem => {
                        cardItem.classList.remove('active');
                    });
                }


                // Если элемент не был активным, делаем его активным
                if (!isActive) {
                    iconItem.classList.add('active');

                    // Показываем соответствующий cardItem
                    cardItems.forEach(cardItem => {
                        if (cardItem.id === dataTab) {
                            cardItem.classList.add('active');
                        }
                    });
                }

                if (innerWidth >= 1200 && isActive) {
                    iconItem.classList.remove('active');

                    // Показываем соответствующий cardItem
                    cardItems.forEach(cardItem => {
                        if (cardItem.id === dataTab) {
                            cardItem.classList.remove('active');
                        }
                    });
                }
            });
        });
    }
}

function copyLinkInWorksSection() {
    const linkElement = document.querySelector('.works__top a.link');
    const worksInnerElement = document.querySelector('.works__inner');

    const linkElementClone = linkElement.cloneNode(true);

    if (linkElementClone && worksInnerElement) {
        worksInnerElement.appendChild(linkElementClone);
    }

}

function copySlideTitleInWorkSection() {
    const slideTitles = document.querySelectorAll('.works__item-title');
    if (slideTitles) {
        slideTitles.forEach(title => {
            title.nextElementSibling.querySelector('.works__item-content-text').appendChild(title.cloneNode(true));
        })
    }
}

function seoShowMore() {
    const moreBtn = document.getElementById('moreBtn');
    const seoContent = document.querySelector('.seo__content-text');

    if (moreBtn && seoContent) {
        moreBtn.addEventListener('click', function () {
            if (!seoContent.classList.contains('opened')) {
                seoContent.classList.add('opened');
                moreBtn.innerText = 'скрыть';
            } else {
                seoContent.classList.remove('opened');
                moreBtn.innerText = 'подробнее';
            }


        })
    }
}

function isInputInFocus() {
    const inputElement = document.querySelector(".header__bottom-search input");
    inputElement.addEventListener("focus", () => {
        inputElement.parentElement.classList.add('focused');
    });

    inputElement.addEventListener("blur", () => {
        inputElement.parentElement.classList.remove('focused');
    })


    // document.addEventListener('click', (event) => {
    //     if (!event.composedPath().includes(inputElement)) {
    //         inputElement.parentElement.classList.remove('focused');
    //     }
    // });
}


