import smallLogoSVG from "../assets/small-logo.svg";

const footerSection = () => {
  const body = document.querySelector("body");
  const container = document.createElement("footer");
  const logo = document.createElement("img");
  const copyright = document.createElement("h5");
  const nav = document.createElement("nav");
  const archicool = document.createElement("a");
  const projects = document.createElement("a");
  const about = document.createElement("a");
  const contact = document.createElement("a");

  logo.src = smallLogoSVG;

  copyright.innerHTML = `&copy Website designed & coded by <a>Alice Andrée Thiel</a>`;
  archicool.textContent = "Archi Cool";
  projects.textContent = "Projects";
  about.textContent = "À propos";
  contact.textContent = "Contact";

  nav.appendChild(archicool);
  nav.appendChild(projects);
  nav.appendChild(about);
  nav.appendChild(contact);

  container.appendChild(logo);
  container.appendChild(copyright);
  container.appendChild(nav);

  body.appendChild(container);
};

export default footerSection;
