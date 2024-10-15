document.addEventListener("DOMContentLoaded", () => {
    catalogToggle();
});

function catalogToggle() {
    const catalogElement = document.getElementById("catalog");
    const catalogToggleBtn = document.getElementById("catalogToggleBtn");
    const backBtn = document.getElementById("backBtn");



    if (catalogElement && catalogToggleBtn) {
        catalogToggleBtn.addEventListener("click", () => {
            catalogElement.classList.toggle('active');
            document.body.classList.toggle('overflow-hidden');
        })
    }

    if (backBtn) {
        backBtn.addEventListener("click", () => {
            catalogElement.classList.remove('active');
            document.body.classList.remove('overflow-hidden');
        })
    }
}