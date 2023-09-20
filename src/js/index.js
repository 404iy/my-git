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
}
