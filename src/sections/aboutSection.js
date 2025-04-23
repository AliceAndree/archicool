import gridLinesSVG from "../assets/grid-lines.svg";

const aboutSection = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  const textBlock = document.createElement("div");
  const sectionTitle = document.createElement("h1");
  const divider = document.createElement("hr");
  const textPresentation = document.createElement("p");
  const archicool = document.createElement("a");

  container.id = "about-section";
  textBlock.id = "about-main";
  sectionTitle.id = "about-title";
  divider.id = "divider";
  textPresentation.id = "about-text";

  sectionTitle.textContent = "à propos d'archi cool";
  textPresentation.innerHTML = `Né de la volonté de révolutionner les espaces de vie et de travail, 
    <span>archi cool</span> incarne une approche fraîche, ludique et colorée de la décoration d’intérieur.</br></br> 
    Notre inspiration puise ses racines dans le monde captivant du cinéma, de l'illustration, du design graphique et de la photographie. 
    Autant de disciplines artistiques qui nous guident vers la conception d’espaces uniques, 
    où chaque détail est soigneusement pensé pour offrir une expérience visuelle et sensorielle exceptionnelle.</br></br> 
    Chez <span>archi cool</span>, nous privilégions le choix de matériaux audacieux et vibrants qui subliment les lieux et incitent à la créativité. 
    Notre ambition est de transcender les conventions de l'architecture d'intérieur en créant des espaces dynamiques et inspirants. 
    Que ce soit pour des résidences, bureaux, boutiques ou espaces publics, nous transformons chaque projet en une œuvre d'art unique, reflet de votre personnalité et de vos aspirations.`;

  textBlock.appendChild(sectionTitle);
  textBlock.appendChild(divider);
  textBlock.appendChild(textPresentation);

  container.style.setProperty(`--grid-lines`, `url("${gridLinesSVG}")`);

  container.appendChild(textBlock);
  body.appendChild(container);
};

export default aboutSection;
