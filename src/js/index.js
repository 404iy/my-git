import '@popperjs/core';
import 'bootstrap';
import './ssm';

const body = document.getElementById('body');
if (body) {
    let today = new Date();// Вывод даты
    let year = today.getFullYear();
    let cYear = document.querySelectorAll('.cYear');
    for (let i = 0; i < cYear.length; i++) {
        cYear[i].innerHTML = String(year);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.main-burger');
    const navMenu = document.querySelector('.main__nav');

    burgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
});
