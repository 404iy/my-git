import '@popperjs/core';
import 'bootstrap';
import './ssm';
import WOW from 'wowjs';

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

    let burger = document.querySelector('.header-burger');
    burger.onclick = () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    };
    let menu = document.querySelector('.header__nav-bar');
    menu.onclick = () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    };
    new WOW.WOW({
        live: false
    }).init();
    const accordion = document.getElementById('accordionExample');

    accordion.addEventListener('shown.bs.collapse', function (event) {
        const targetElement = event.target;
        const targetOffset = targetElement.getBoundingClientRect().top;
        const navbarHeight = 60; // Высота навигационной панели (если есть)

        window.scrollTo({
            top: window.scrollY + targetOffset - (window.innerHeight - targetElement.clientHeight) / 2 - navbarHeight,
            behavior: 'smooth'
        });
    });
    document.getElementById('form0').addEventListener('submit', function (event) {
        const firstName = document.querySelector('[name="first_name"]').value;
        const lastName = document.querySelector('[name="last_name"]').value;
        const email = document.querySelector('[name="email"]').value;
        const phone = document.querySelector('[name="phone"]').value;
        const firstNameError = document.getElementById('firstNameError');
        const lastNameError = document.getElementById('lastNameError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');

        let hasErrors = false;

        if (firstName === '') {
            firstNameError.style.display = 'block';
            hasErrors = true;
        } else {
            firstNameError.style.display = 'none';
        }

        if (lastName === '') {
            lastNameError.style.display = 'block';
            hasErrors = true;
        } else {
            lastNameError.style.display = 'none';
        }

        if (email === '' || !isValidEmail(email)) {
            emailError.style.display = 'block';
            hasErrors = true;
        } else {
            emailError.style.display = 'none';
        }

        if (phone === '' || !isValidPhone(phone)) {
            phoneError.style.display = 'block';
            hasErrors = true;
        } else {
            phoneError.style.display = 'none';
        }

        if (hasErrors) {
            event.preventDefault();
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function isValidPhone(phone) {
        // Ваша логика валидации для номера телефона
    }
}