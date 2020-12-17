const menuIcon = document.querySelector
(".hamburger_menu")
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener('click', function() {
    navbar.classList.toggle("change");
})
