import '@popperjs/core';
import 'bootstrap';
import './ssm';
import Swiper from 'swiper/bundle';

const body = document.getElementById('body');
if (body) {
    let today = new Date();// Вывод даты
    let year = today.getFullYear();
    let cYear = document.querySelectorAll('.cYear');
    for (let i = 0; i < cYear.length; i++) {
        cYear[i].innerHTML = String(year);
    }
    const buttons = document.querySelectorAll('.products__button');
    const text = document.querySelectorAll('.products__hidden-txt');
    const ellipses = document.querySelectorAll('.products__ellipses');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            text[index].classList.toggle('d-none');
            ellipses[index].classList.toggle('d-none');
            console.log(text[index]);
        });
    });
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 3000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-dots'
        },
        slidesPerView: 3, // По умолчанию на больших экранах показываем 3 слайда
        spaceBetween: 0,
        breakpoints: {
            // Для экранов шириной до 1300px, показываем 2 слайда
            1300: {
                slidesPerView: 2
            },
            // Для экранов шириной до 768px, показываем только 1 слайд
            768: {
                slidesPerView: 1
            }
        }
    });
}
