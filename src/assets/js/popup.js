$(document).ready(function () {

    // FANCYBOX OPTION
    Fancybox.bind('[data-fancybox]', {
        dragToClose: false,
        autoFocus: false,
        on: {
            done: (fancybox, slide) => {
                if (slide.src === '#popup-success-request') {
                    setTimeout(() => {
                        Fancybox.close();
                    }, 3000);
                }
            },
        },
    })
});