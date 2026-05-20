
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if(scrollY >= sectionTop){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){
      link.classList.add("active");
    }

  });

});



const revealElements = document.querySelectorAll(
  ".skills-card, .service-card, .about-card, .contact-box"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){

  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {

    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.style.opacity = "1";
      element.style.transform = "translateY(0px)";

    }

  });

}


revealElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(60px)";
  element.style.transition = "all 0.8s ease";

});

