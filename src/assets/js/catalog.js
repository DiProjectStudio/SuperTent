let windowWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", () => {
    catalogToggle();
    windowWidth = window.innerWidth;

});

document.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
});

function catalogToggle() {
    const catalogElement = document.getElementById("catalog");
    const catalogToggleBtn = document.getElementById("catalogToggleBtn");
    const backBtn = document.getElementById("backBtn");


    if (catalogElement && catalogToggleBtn) {
        catalogToggleBtn.addEventListener("click", () => {
            catalogElement.classList.toggle('active');
            catalogToggleBtn.parentElement.classList.toggle('active');
            if (windowWidth < 1200) {
                document.body.classList.toggle('overflow-hidden');
            }
        })
    }

    if (backBtn) {
        backBtn.addEventListener("click", () => {
            catalogElement.classList.remove('active');
            if (windowWidth < 1200) {
                document.body.classList.remove('overflow-hidden');
            }
        })
    }

    document.addEventListener('click', (event) => {
        if (!event.composedPath().includes(catalogElement) && !event.composedPath().includes(catalogToggleBtn)) {
            catalogElement.classList.remove('active');
            catalogToggleBtn.parentElement.classList.remove('active');
        }
    });
}

