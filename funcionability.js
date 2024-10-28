document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        let top = window.scrollY;

        section.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});