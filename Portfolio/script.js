let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};



ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 150
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.services-container, .certificacoes-box', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1', { origin: 'left'});
ScrollReveal().reveal('home-content p, .about-content ', { origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor front end'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: false
})