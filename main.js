// Function expression to select elements `

const SelectElement = (s) => document.querySelector(s);
const NavLinks = document.querySelectorAll(".nav-link");

SelectElement(".burger-icon").addEventListener("click", () => {
  SelectElement(".nav-list").classList.toggle("active");
  SelectElement(".burger-icon").classList.toggle("toggle");

  NavLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkAnimate 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  })
})

NavLinks.forEach(link=> {
  link.addEventListener("click", ()=> {
    SelectElement(".nav-list").classList.toggle("active");
    SelectElement(".burger-icon").classList.toggle("toggle");

    NavLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkAnimate 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    })
  
  })
})
