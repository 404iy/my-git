import '@popperjs/core';
import 'bootstrap';
import './ssm';

const body = document.getElementById('body');
if (body) {
    let today = new Date();// Вывод даты
    let year = today.getFullYear();
    let cYear = document.querySelectorAll('.cYear');
    cYear.forEach((i) => i.innerHTML = year.toString());

    const header = document.querySelector('.header__nav');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        const maxScroll = 700;
        let opacity = scrollPos / maxScroll;
        opacity = Math.min(0.55, opacity);
        header.style.backgroundColor = `rgba(0, 0, 0, ${opacity.toFixed(2)})`;
    });
}
