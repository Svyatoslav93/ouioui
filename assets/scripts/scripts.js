var menuButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var backdrop = document.querySelector('.backdrop');

menuButton.addEventListener('click', function openMenu() {
    mobileNav.style.display = 'block';
    backdrop.classList.add("open");
    setTimeout (function () {
        mobileNav.classList.add("open"); 
    }, 10);
})

backdrop.addEventListener('click', function closeMenu() {
    mobileNav.style.display = 'none';
    backdrop.classList.remove("open");
    setTimeout (function () {
        mobileNav.classList.remove("open"); 
    }, 10);
})

//Get the button "go to top":
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