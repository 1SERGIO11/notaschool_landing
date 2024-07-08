document.addEventListener('DOMContentLoaded', (event) => {
    const leftArrow = document.querySelector('.left a');
    const rightArrow = document.querySelector('.right a');
    const carousel = document.querySelector('.review-carousel');

    leftArrow.addEventListener('click', (e) => {
        e.preventDefault();
        carousel.scrollBy({
            left: -carousel.clientWidth,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', (e) => {
        e.preventDefault();
        carousel.scrollBy({
            left: carousel.clientWidth,
            behavior: 'smooth'
        });
    });

    // Для прокрутки при помощи мыши
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; // Умножьте на 3 для увеличения скорости прокрутки
        carousel.scrollLeft = scrollLeft - walk;
    });
    const registerLink = document.querySelector('.button-register a');
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector('#register-form');
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
