document.addEventListener('DOMContentLoaded', () => {
    const viewProjectsButton = document.querySelector('.view-projects-button');
    const SWE1 = document.querySelector('.SWE-1');
    const SWE2 = document.querySelector('.SWE-2');
    const WebDev = document.querySelector('.Web-Dev');

    if (viewProjectsButton && SWE1 && SWE2 && WebDev) {
        viewProjectsButton.addEventListener('click', (event) => {
            console.log(event.target);
            SWE1.classList.add('show');
            SWE2.classList.add('show');
            WebDev.classList.add('show');
        });
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');

        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {threshold: 0.5  }
);

const footerElements = document.querySelectorAll('.footer h2, .social-links, .copyright');
footerElements.forEach(element => observer.observe(element));


