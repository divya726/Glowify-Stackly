
// MOBILE NAVIGATION

let menuBtn = document.getElementById("menu-btn");

let navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {

    navbar.classList.toggle("show");

    let isOpen = navbar.classList.contains("show");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


// CLOSE MENU AFTER CLICKING A LINK

let navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("show");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// NEWSLETTER FORM

let newsletterForm = document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;

    document.getElementById("message").innerText =
        "Thank you! " + email + " has been submitted.";

    newsletterForm.reset();

});
