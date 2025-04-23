import "./styles.css";
import faviconSVG from "../src/assets/small-logo.svg";
import heroSection from "./sections/heroSection";
import projectsSection from "./sections/projectsSection";
import aboutSection from "./sections/aboutSection";
import contactSection from "./sections/contactSection";
import footerSection from "./sections/footerSection";

const addFavicon = () => {
  const favicon = document.querySelector("link[rel~='icon']");
  favicon.href = faviconSVG;
};

addFavicon();
heroSection();
projectsSection();
aboutSection();
contactSection();
footerSection();
