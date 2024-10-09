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
    // moveElementsInFooter();
});

// function moveElementsInFooter() {
//     const ulElement = document.querySelector('ul.footer__top-block');
//     const liElements = ulElement.querySelectorAll('li');
//     const elementsToMove = 6;
//     let footerJsBlock;
//
//     liElements.forEach((element, index) => {
//         if ((index + 1) % elementsToMove === 0) {
//             footerJsBlock = document.createElement('div');
//             footerJsBlock.appendChild(element);
//             ulElement.appendChild(footerJsBlock);
//         }
//
//         footerJsBlock.appendChild(element);
//
//     });
//
// }
