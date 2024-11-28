// Menu

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-bars" : "fa-solid fa-xmark")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const navSearch = document.getElementById("nav_search")

navSearch.addEventListener("click", (e) => {
    navSearch.classList.toggle("open");
});

// ScrollReveal

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content div", {
    duration: 1000,
    delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1500,
});

// Deals

ScrollReveal().reveal(".deals_card", {
    ...scrollRevealOption,
    interval: 1500,
});

//About

ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".about_card", {
    duration: 1000,
    interval: 500,
    delay: 500,
});

// Swiper

const swiper = new Swiper(".swiper", {
    loop: true,
});
