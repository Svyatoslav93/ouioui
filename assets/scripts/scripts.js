var menuButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var backdrop = document.querySelector('.backdrop');

menuButton.addEventListener('click', function() {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
})
backdrop.addEventListener('click', function() {
    backdrop.classList.remove("open");
    mobileNav.classList.remove("open");
})