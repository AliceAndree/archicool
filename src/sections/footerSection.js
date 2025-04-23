import smallLogoSVG from "../assets/small-logo.svg";

const footerSection = () => {
  const body = document.querySelector("body");
  const container = document.createElement("footer");
  const logo = document.createElement("img");
  const copyright = document.createElement("h5");
  const instaLink = document.createElement("a");
  const nav = document.createElement("nav");
  const archicool = document.createElement("a");
  const projects = document.createElement("a");
  const about = document.createElement("a");
  const contact = document.createElement("a");

  logo.src = smallLogoSVG;

  instaLink.textContent = "Alice Andrée Thiel";
  copyright.innerHTML = `&copy Website designed & coded by `;
  copyright.appendChild(instaLink);
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

  instaLink.addEventListener("click", () => {
    window.open("https://www.instagram.com/alice____andree/", "_blank");
  });

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

  const sectionScroll = (section) => {
    window.location.href = section;
    window.addEventListener(
      "hashchange",
      () => window.history.pushState({}, "", "/"),
      {}
    );
  };
};

export default footerSection;
