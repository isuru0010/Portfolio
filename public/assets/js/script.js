const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

// Sticky Header on Scroll
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
    
    // Close the menu when scrolling
    navlist.classList.remove("active");
});

// Toggle Mobile Menu
menu.addEventListener('click', () => {
    navlist.classList.toggle('active');
});

// Close the menu when a menu item is clicked (optional)
const menuLinks = navlist.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navlist.classList.remove('active');
    });
});

// Hide the preloader on page load
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});
