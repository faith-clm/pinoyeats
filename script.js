const navbar = document.getElementById("navigationBar"); //Gets the navigationBar id from the HTML document

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); //Adds the .scrolled style in navbar when scrolled
  } else {
    navbar.classList.remove('scrolled'); //Removes the .scrolled style in navbar when not scrolled
  }
});

// Navbar when opened in phone size
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}