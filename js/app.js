// Global Variables
let btn = document.querySelector(".btn");
let myUl = document.getElementById("navbar__list");
let sections = document.querySelectorAll(".edit");
let header = document.querySelector(".page__header");
let scrolling = false;
// let newone;

// Add and creat link into unorderdlist and link this a tag to sections already added

sections.forEach((section) => {
  lis = document.createElement("li");
  lis.innerHTML = `<a href='#${section.id}'class="menu__link">${section.dataset.nav}</a>`;
  myUl.appendChild(lis);
});

///////////////////// start window scroll event /////////////////////

window.addEventListener("scroll", () => {
  // remove active class from all a tage if window.scroll == 0
  if (window.scrollY == 0) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }

  // window scroll to apperd and disapperd back to top button

  if (window.scrollY >= 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }

  // add active class to section on being section viewed on scroll

  sections.forEach((element) => {
    if (
      element.getBoundingClientRect().top >= -400 &&
      element.getBoundingClientRect().top <= 150
    ) {
      element.classList.add("your-active-class");
      // newone = element;
    } else {
      element.classList.remove("your-active-class");
    }
  });

  // highlight a tag on click or scroll with red color

  // let navLink = document.querySelectorAll(".menu__link");
  // navLink.forEach((links) => {
  //     if (newone.dataset.nav === links.innerText) {
  //       links.style.color = "red";
  //     } else {
  //       links.style.color = "black";
  //     }
  //     if (window.scrollY == 0) {
  //       links.style.color = "black";
  //     }
  // });

  // if window scroll scrolling = true
  scrolling = true;
});

///////////////////// end window scroll event /////////////////////

// hidenav after 3s with setinterval

setInterval(() => {
  if (scrolling) {
    header.style.display = null;
    scrolling = false;
  } else {
    header.style.display = "none";
  }
  if (window.scrollY == 0) {
    header.style.display = null;
  }
}, 3000);

// scroll to top with smooth scroll on click back to top button

btn.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

// smooth scrolling with js

const navLinks = document.querySelectorAll(".menu__link");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    /////////////////////////////////////////
    // If this code is not what you mean in feedback you can uncomment from line 51 to 61
    // uncomment line 7 and line 43
    // and comment from line 102 to 107 and from line 21 to 25
    /////////////////////////////////////////
    navLinks.forEach((item) => {
      // remove active from all a tage
      item.classList.remove("active");
    });
    // add active class when click
    link.classList.add("active");
    event.preventDefault();
    const id = event.target.getAttribute("href");
    const targetSection = document.querySelector(id);
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

///////////////// Thanks for feedback /////////////////
