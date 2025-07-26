(function () {
    const isOpen = document.querySelector(".header_burger");
    const isClose = document.querySelector(".nav__icon-close");
    const navigation = document.querySelector(".header-menu");

    if (isOpen && navigation) {
        isOpen.addEventListener("click", () => {
            navigation.classList.toggle("active");
        });
    }

    if (isClose && navigation) {
        isClose.addEventListener("click", () => {
            navigation.classList.remove("active");
        });
    }

    document.addEventListener("click", (event) => {
        if (navigation && !navigation.contains(event.target) && isOpen && !isOpen.contains(event.target)) {
            navigation.classList.remove("active");
        }
    });
})();