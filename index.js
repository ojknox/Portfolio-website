//DOM elements
const about = document.querySelector('.aboutToggle');
const aboutInfo = document.querySelector(".aboutinfo");
const skills = document.querySelector('.skillToggle');
const skillsInfo = document.querySelector(".languages")
const contact = document.querySelector('.contactToggle');
const contactInfo = document.querySelector(".contact")


about.onclick = () => {
    aboutInfo.classList.toggle("active");
}

skills.onclick = () => {
    skillsInfo.classList.toggle("active");
}

contact.onclick = () => {
    contactInfo.classList.toggle("active");
}