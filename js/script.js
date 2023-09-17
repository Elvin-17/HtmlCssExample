const menu_btn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar")
let menuOpen = false;
menu_btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    if(!menuOpen) {
        menu_btn.classList.add("open");
        menuOpen = true;
    }else {
        menu_btn.classList.remove("open");
        menuOpen = false;
    }
})