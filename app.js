const viewProjectsButton = document.querySelector('.view-projects-button');
const SWE1 = document.querySelector('.SWE-1');
const SWE2 = document.querySelector('.SWE-2');
const WebDev = document.querySelector('.Web-Dev');

viewProjectsButton.addEventListener('click', (event) => {
    console.log(event.target);
    SWE1.classList.add('show');
    SWE2.classList.add('show');
    WebDev.classList.add('show');
});