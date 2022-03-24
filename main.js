const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav__menu');

// Abrir menu da navbar
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

// Fechar o menu da navbar
const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);

// Fechar menu nav quando algum item do menu receber um click
if (window.innerWidth < 1024) {
    document.querySelectorAll(".nav__menu li a").forEach(navItem => {
        navItem.addEventListener('click', closeNav);
    })
}

// Mudar o estilo da navbar quando der scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// Buscar comentários do arquivo testimonials
const fetchTestimonials = () => {
    let testimonialsContainer = document.querySelector('.testimonials__container');
    testimonialsContainer.innerHTML = '';

    // Percorrer e mostrar o arquivo testimonials
    testimonials.forEach(testimonial => {
        const newTestimonial = document.createElement('article');
        newTestimonial.className = 'testimonial';
        newTestimonial.innerHTML = `
        <p>
        "${testimonial.quote}"
        </p>
        <div class="testimonial__client">
            <span class="avatar">
                <img src="./images/${testimonial.avatar}.jpg">
            </span>
            <div class="testimonial__work">
                <p><b>${testimonial.name}</b></p>
                <small>${testimonial.title}</small>
            </div>
        </div>`;
    
    testimonialsContainer.append(newTestimonial);
    })
}


window.addEventListener('load', fetchTestimonials);