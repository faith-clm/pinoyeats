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

// When picture in recipes page was hover
const adoboImage = document.getElementById("adoboImage");
const adoboIngredients = document.getElementById("adobo-ingredients");

adoboImage.addEventListener("mouseover", () => {
  adoboIngredients.style.display = "block";
});

adoboImage.addEventListener("mouseout", () => {
  adoboIngredients.style.display = "none";
});


const sinigangImage = document.getElementById("sinigangImage");
const sinigangIngredients = document.getElementById("sinigang-ingredients");

sinigangImage.addEventListener("mouseover", () => {
  sinigangIngredients.style.display = "block";
});

sinigangImage.addEventListener("mouseout", () => {
  sinigangIngredients.style.display = "none";
});


const dinakdakanImage = document.getElementById("dinakdakanImage");
const dinakdakanIngredients = document.getElementById("dinakdakan-ingredients");

dinakdakanImage.addEventListener("mouseover", () => {
  dinakdakanIngredients.style.display = "block";
});

dinakdakanImage.addEventListener("mouseout", () => {
  dinakdakanIngredients.style.display = "none";
});


const lechonImage = document.getElementById("lechonImage");
const lechonIngredients = document.getElementById("lechon-ingredients");

lechonImage.addEventListener("mouseover", () => {
  lechonIngredients.style.display = "block";
});

lechonImage.addEventListener("mouseout", () => {
  lechonIngredients.style.display = "none";
});


const sisigImage = document.getElementById("sisigImage");
const sisigIngredients = document.getElementById("sisig-ingredients");

sisigImage.addEventListener("mouseover", () => {
  sisigIngredients.style.display = "block";
});

sisigImage.addEventListener("mouseout", () => {
  sisigIngredients.style.display = "none";
});


const laingImage = document.getElementById("laingImage");
const laingIngredients = document.getElementById("laing-ingredients");

laingImage.addEventListener("mouseover", () => {
  laingIngredients.style.display = "block";
});

laingImage.addEventListener("mouseout", () => {
  laingIngredients.style.display = "none";
});