import arrowSVG from "../assets/arrow.svg";
import logoSVG from "../assets/logo.svg";
import downArrowSVG from "../assets/down-arrow.svg";
import fbSVG from "../assets/fb.svg";
import instaSVG from "../assets/insta.svg";
import pinterestSVG from "../assets/pinterest.svg";

const heroSection = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const archicool = document.createElement("a");
  const projects = document.createElement("a");
  const about = document.createElement("a");
  const contact = document.createElement("a");
  const aside = document.createElement("div");
  const signature = document.createElement("h5");
  const hero = document.createElement("hero");
  const logo = document.createElement("img");
  const sparkle = document.createElement("img");
  const slogan = document.createElement("p");
  const arrow = document.createElement("img");
  const downArrow = document.createElement("img");
  const socials = document.createElement("div");
  const facebook = document.createElement("img");
  const pinterest = document.createElement("img");
  const instagram = document.createElement("img");

  container.id = "hero-section";
  header.id = "header";
  archicool.classList.add("nav-link");
  projects.classList.add("nav-link");
  about.classList.add("nav-link");
  contact.id = "contact";
  aside.id = "aside";
  signature.id = "signature";
  hero.id = "hero";
  logo.id = "logo";
  sparkle.id = "sparkle";
  slogan.id = "slogan";
  arrow.id = "arrow";
  downArrow.id = "down-arrow";
  socials.id = "socials";
  facebook.id = "facebook";
  pinterest.id = "pinterest";
  instagram.id = "instagram";

  archicool.textContent = "archi cool";
  projects.textContent = "projets";
  about.textContent = "à propos";
  contact.textContent = "contact";
  signature.textContent = "made by alice andrée thiel";
  slogan.textContent =
    "Du fun à chaque coin de mur, pour un quotidien enjoué. Votre intérieur, notre terrain de jeu coloré.";

  slogan.style.setProperty(`--arrow-icon`, `url("${arrowSVG}")`);

  logo.src = logoSVG;
  downArrow.src = downArrowSVG;
  facebook.src = fbSVG;
  instagram.src = instaSVG;
  pinterest.src = pinterestSVG;

  nav.appendChild(archicool);
  nav.appendChild(projects);
  nav.appendChild(about);

  header.appendChild(nav);
  header.appendChild(contact);

  hero.appendChild(logo);
  hero.appendChild(sparkle);
  hero.appendChild(slogan);

  socials.appendChild(facebook);
  socials.appendChild(pinterest);
  socials.appendChild(instagram);

  aside.appendChild(signature);

  container.appendChild(header);
  container.appendChild(aside);
  container.appendChild(hero);
  container.appendChild(socials);
  container.appendChild(downArrow);

  body.appendChild(container);

  archicool.addEventListener("click", () => {
    const homeSection = "#hero-section";
    sectionScroll(homeSection);
  });

  projects.addEventListener("click", () => {
    const projectsSection = "#projects-section";
    sectionScroll(projectsSection);
  });

  about.addEventListener("click", () => {
    const aboutSection = "#about-section";
    sectionScroll(aboutSection);
  });

  contact.addEventListener("click", () => {
    const contactSection = "#contact-section";
    sectionScroll(contactSection);
  });

  downArrow.addEventListener("click", () => {
    const projectsSection = "#projects-section";
    sectionScroll(projectsSection);
  });

  const sectionScroll = (section) => {
    window.location.href = section;
    window.addEventListener(
      "hashchange",
      () => window.history.pushState({}, "", "/"),
      {}
    );
  };
};

export default heroSection;
