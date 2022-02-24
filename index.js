//DOM elements
const about = document.getElementById('aboutToggle');
const skills = document.getElementById('skillToggle');
const contact = document.getElementById('contactToggle');

//onClick event handlers
about.onclick = () => {
    let info = document.getElementById('aboutinfo');
    if(info.style.display === 'none'){
        info.style.display = 'flex';
    } else {
        info.style.display = 'none';
    }
}

skills.onclick = () => {
    let skillInfo = document.getElementById('languages');
    if(skillInfo.style.display === 'none'){
        skillInfo.style.display = 'block';
    } else {
        skillInfo.style.display = 'none';
    }
}

contact.onclick = () => {
    let contactInfo = document.getElementById('contact');
    if(contactInfo.style.display === 'none'){
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
}
