import titleSVG from "../assets/projects-title.svg";
import planSVG from "../assets/projects-plan.svg";

const projectsSection = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  const sectionTitle = document.createElement("img");
  const planImage = document.createElement("div");
  const rightSection = document.createElement("div");
  const textPresentation = document.createElement("p");
  const ctaButton = document.createElement("button");

  container.id = "projects-section";
  sectionTitle.id = "projects-title";
  planImage.id = "projects-plan";
  rightSection.id = "right-section";
  textPresentation.id = "projects-text";
  ctaButton.classList.add("cta-button");

  sectionTitle.src = titleSVG;
  planImage.style.setProperty(`--projects-plan`, `url("${planSVG}")`);

  textPresentation.textContent =
    "Du fun à chaque coin de mur, pour un quotidien enjoué. Votre intérieur, notre terrain de jeu coloré.";
  ctaButton.textContent = "voir";

  rightSection.appendChild(textPresentation);
  rightSection.appendChild(ctaButton);

  container.appendChild(sectionTitle);
  container.appendChild(planImage);
  container.appendChild(rightSection);

  body.appendChild(container);
};

export default projectsSection;
