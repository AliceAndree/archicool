import titleSVG from "../assets/projects-title.svg";
import planSVG from "../assets/projects-plan.svg";

const projectsSection = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  const sectionTitle = document.createElement("img");
  const plan = document.createElement("div");
  const planImage = document.createElement("img");
  const rightSection = document.createElement("div");
  const textPresentation = document.createElement("p");
  const ctaButton = document.createElement("button");

  container.id = "projects-section";
  sectionTitle.id = "projects-title";
  planImage.id = "projects-plan";
  rightSection.id = "projects-right-section";
  textPresentation.id = "projects-text";
  ctaButton.classList.add("cta-button");

  sectionTitle.src = titleSVG;
  planImage.src = planSVG;
  plan.appendChild(planImage);

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
