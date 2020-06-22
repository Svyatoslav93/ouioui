let menuButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let backdrop = document.querySelector('.backdrop');
let menuOpen = false;

menuButton.addEventListener('click', function openMenu() {

  if (!menuOpen) {
    menuButton.classList.add("toggle-open");
    menuOpen = true;
    mobileNav.style.display = 'block';
    backdrop.classList.add("open");
    setTimeout (function () {
        mobileNav.classList.add("open"); 
    }, 10);
} else {
    menuButton.classList.remove("toggle-open");
    menuOpen = false;
    mobileNav.style.display = 'none';
    backdrop.classList.remove("open");
    setTimeout (function () {
        mobileNav.classList.remove("open"); 
    }, 10);
}
})

backdrop.addEventListener('click', function closeMenu() {
    mobileNav.style.display = 'none';
    menuButton.classList.remove("toggle-open")
    backdrop.classList.remove("open");
    setTimeout (function () {
        mobileNav.classList.remove("open"); 
    }, 10);
})




//Button Scroll on top

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}