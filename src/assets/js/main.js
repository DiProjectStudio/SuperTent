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

                // Удаляем класс 'active' у всех элементов
                iconItems.forEach(item => {
                    item.classList.remove('active');
                });

                // Скрываем все cardItems
                cardItems.forEach(cardItem => {
                    cardItem.classList.remove('active');
                });

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
            });
        });
    }
}


