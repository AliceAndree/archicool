import blueSmileySVG from "../assets/blue-smiley.svg";
import yellowSmileySVG from "../assets/yellow-smileys.svg";

const contactSection = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  const leftSection = document.createElement("div");
  const rightSection = document.createElement("div");
  const sectionTitle = document.createElement("h1");
  const contactForm = document.createElement("form");
  const nameBlock = document.createElement("div");
  const firstName = document.createElement("div");
  const firstNameLabel = document.createElement("label");
  const firstNameInput = document.createElement("input");
  const lastName = document.createElement("div");
  const lastNameLabel = document.createElement("label");
  const lastNameInput = document.createElement("input");
  const email = document.createElement("div");
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  const object = document.createElement("div");
  const objectLabel = document.createElement("label");
  const objectInput = document.createElement("input");
  const message = document.createElement("div");
  const messageLabel = document.createElement("label");
  const messageInput = document.createElement("textarea");
  const submitButton = document.createElement("button");
  const blueSmiley = document.createElement("img");

  container.id = "contact-section";
  leftSection.id = "contact-left-section";
  rightSection.id = "contact-right-section";
  sectionTitle.id = "contact-title";
  contactForm.id = "contact-form";
  nameBlock.id = "name";

  firstName.classList.add("form-element");
  lastName.classList.add("form-element");
  email.classList.add("form-element");
  object.classList.add("form-element");
  message.classList.add("form-element");
  submitButton.classList.add("cta-button");

  sectionTitle.textContent = "nous contacter";
  submitButton.textContent = "envoyer";

  contactForm.setAttribute("action", "#");
  contactForm.setAttribute("method", "post");

  firstNameLabel.textContent = "Prénom";
  firstNameLabel.setAttribute("for", "first-name");
  firstNameInput.setAttribute("type", "text");
  firstNameInput.setAttribute("name", "first-name");
  firstNameInput.setAttribute("placeholder", "Votre Prénom");
  firstNameInput.setAttribute("required", "");

  lastNameLabel.textContent = "Nom";
  lastNameLabel.setAttribute("for", "last-name");
  lastNameInput.setAttribute("type", "text");
  lastNameInput.setAttribute("name", "last-name");
  lastNameInput.setAttribute("placeholder", "Votre Nom");
  lastNameInput.setAttribute("required", "");

  emailLabel.textContent = "Email";
  emailLabel.setAttribute("for", "email");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("placeholder", "hello@example.com");
  emailInput.setAttribute("required", "");

  objectLabel.textContent = "Objet";
  objectLabel.setAttribute("for", "object");
  objectInput.setAttribute("type", "text");
  objectInput.setAttribute("name", "object");
  objectInput.setAttribute("placeholder", "Objet de votre message");
  objectInput.setAttribute("required", "");

  messageLabel.textContent = "Message";
  messageLabel.setAttribute("for", "message");
  messageInput.setAttribute("type", "textarea");
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("placeholder", "Votre message");
  messageInput.setAttribute("rows", "10");
  messageInput.setAttribute("required", "");

  firstName.appendChild(firstNameLabel);
  firstName.appendChild(firstNameInput);

  lastName.appendChild(lastNameLabel);
  lastName.appendChild(lastNameInput);

  nameBlock.appendChild(firstName);
  nameBlock.appendChild(lastName);

  email.appendChild(emailLabel);
  email.appendChild(emailInput);

  object.appendChild(objectLabel);
  object.appendChild(objectInput);

  message.appendChild(messageLabel);
  message.appendChild(messageInput);

  contactForm.appendChild(nameBlock);
  contactForm.appendChild(email);
  contactForm.appendChild(object);
  contactForm.appendChild(message);
  contactForm.appendChild(submitButton);

  leftSection.appendChild(sectionTitle);
  leftSection.appendChild(contactForm);

  blueSmiley.src = blueSmileySVG;
  rightSection.style.setProperty(
    `--yellow-smiley`,
    `url("${yellowSmileySVG}")`
  );
  rightSection.appendChild(blueSmiley);

  container.appendChild(leftSection);
  container.appendChild(rightSection);
  body.appendChild(container);
};

export default contactSection;
